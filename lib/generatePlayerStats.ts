// lib/generatePlayerStats.ts
import { matches } from "./matchday"
import { players } from "./players"

export async function generatePlayerStats() {
    const stats = players.map(player => ({
        ...player,
        goals: 0,
        yellowCards: 0,
        redCards: 0,
    }))

    const playerMap = Object.fromEntries(stats.map(p => [p.id, p]))

    for (const match of matches) {
        for (const event of match.events || []) {
            const player = playerMap[event.player]
            if (!player) continue

            if (event.type === "goal") player.goals++
            if (event.type === "yellow") player.yellowCards++
            if (event.type === "red") player.redCards++
        }
    }

    return stats
}
