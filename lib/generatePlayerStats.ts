// lib/generatePlayerStats.ts
import { matches } from "./matchday"
import { players } from "./players"

export async function generatePlayerStats() {
    const stats = players.map(player => ({
        ...player,
        goals: 0,
        yellowCards: 0,
        assists: 0,
        redCards: 0,
    }))

    const playerMap = Object.fromEntries(stats.map(p => [p.id, p]))

    for (const match of matches) {
        for (const event of match.events || []) {
            const player = playerMap[event.player]
            if (player) {
                // ✅ Goal & Assist hanya dihitung di match league
                if (match.type === "league" && event.type === "goal") {
                    player.goals++
                }

                if (match.type === "league" && "assist" in event && event.assist) {
                    const assister = playerMap[event.assist]
                    if (assister) assister.assists++
                }

                // ✅ Kartu dihitung untuk semua tipe match
                if (event.type === "yellow") player.yellowCards++
                if (event.type === "red") player.redCards++
            }
        }
    }

    return stats
}
