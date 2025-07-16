// lib/getTeamStats.ts
import { matches } from "./matchday"

export function getTeamStats(teamId: string) {
    const types = ["league", "cup"] as const

    const stats = types.map(type => {
        const filtered = matches.filter(
            m =>
                m.type === type &&
                m.score &&
                m.score.includes(":") &&
                (m.homeTeamId === teamId || m.awayTeamId === teamId)
        )

        let win = 0, lose = 0, draw = 0

        for (const match of filtered) {
            const [homeScore, awayScore] = match.score.split(":").map(Number)
            const isHome = match.homeTeamId === teamId
            const isAway = match.awayTeamId === teamId

            const teamScore = isHome ? homeScore : awayScore
            const opponentScore = isHome ? awayScore : homeScore

            if (teamScore > opponentScore) win++
            else if (teamScore < opponentScore) lose++
            else draw++
        }

        const total = win + lose + draw
        const winrate = total === 0 ? 0 : Math.round((win / total) * 100)

        return { type, win, draw, lose, winrate }
    })

    return {
        league: stats[0],
        cup: stats[1],
    }
}
