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

    // Map pemain berdasarkan NAMA
    const playerMapByName = Object.fromEntries(
        stats.map(p => [p.name.toLowerCase(), p])
    )

    for (const match of matches) {
        for (const event of match.events || []) {
            const player = playerMapByName[event.player?.toLowerCase()]
            if (player) {
                // Goal dihitung hanya league + bukan playoff
                if (match.competition === "league" && match.stage !== "playoff" && event.type === "goal") {
                    player.goals++
                }

                // Assist dihitung
                if (match.competition === "league" && match.stage !== "playoff" && "assist" in event && event.assist) {
                    const assister = playerMapByName[event.assist.toLowerCase()]
                    if (assister) assister.assists++
                }

                // Kartu untuk semua kompetisi
                if (event.type === "yellow") player.yellowCards++
                if (event.type === "red") player.redCards++
            }
        }
    }

    return stats
}
