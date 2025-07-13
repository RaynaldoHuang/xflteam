import { matches } from "./matchday"

export interface PlayerStat {
    name: string
    teamId: string
    goals: number
    yellowCards: number
}

export function generatePlayerStats(): PlayerStat[] {
    const stats: Record<string, PlayerStat> = {}

    for (const match of matches) {
        for (const event of match.events ?? []) {
            const playerKey = `${event.player}-${event.team === "home" ? match.homeTeamId : match.awayTeamId}`

            if (!stats[playerKey]) {
                stats[playerKey] = {
                    name: event.player,
                    teamId: event.team === "home" ? match.homeTeamId : match.awayTeamId,
                    goals: 0,
                    yellowCards: 0,
                }
            }

            if (event.type === "goal") stats[playerKey].goals++
            if (event.type === "yellow") stats[playerKey].yellowCards++
        }
    }

    return Object.values(stats)
}
