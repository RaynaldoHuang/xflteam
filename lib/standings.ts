import { matches } from "./matchday"
import { teams } from "./teams"

const teamMap = Object.fromEntries(teams.map(team => [team.id, team]))

interface TeamStats {
    id: string
    name: string
    logo: string
    played: number
    win: number
    draw: number
    lose: number
    gf: number
    ga: number
    group: string
}

export function generateStandings(type: "league" | "cup" = "league", group?: "A" | "B") {
    const table: Record<string, TeamStats> = {}

    // ⏩ Inisialisasi semua tim lebih awal
    for (const team of teams) {
        if (group && team.group?.toLowerCase() !== group.toLowerCase()) continue
        table[team.id] = {
            id: team.id,
            name: team.name,
            logo: team.logo,
            played: 0,
            win: 0,
            draw: 0,
            lose: 0,
            gf: 0,
            ga: 0,
            group: team.group,
        }
    }

    const filteredMatches = matches.filter(match => match.type === type)

    for (const match of filteredMatches) {
        const homeTeam = teamMap[match.homeTeamId]
        const awayTeam = teamMap[match.awayTeamId]

        if (group && (homeTeam.group !== group || awayTeam.group !== group)) {
            continue
        }

        if (!match.score || !match.score.includes(":")) continue

        const [homeScore, awayScore] = match.score.split(":").map(Number)

        const home = table[homeTeam.id]
        const away = table[awayTeam.id]

        home.played++
        away.played++
        home.gf += homeScore
        home.ga += awayScore
        away.gf += awayScore
        away.ga += homeScore

        if (homeScore > awayScore) {
            home.win++
            away.lose++
        } else if (awayScore > homeScore) {
            away.win++
            home.lose++
        } else {
            home.draw++
            away.draw++
        }
    }

    const standings = Object.values(table).map(team => ({
        ...team,
        points: team.win * 2 + team.draw,
        gd: team.gf - team.ga,
    }))

    standings.sort((a, b) => {
        // Kalau belum main, taruh di bawah
        if (a.played === 0 && b.played > 0) return 1
        if (b.played === 0 && a.played > 0) return -1

        // Urutkan poin dulu
        if (b.points !== a.points) return b.points - a.points

        // Cek berapa banyak tim yang punya poin sama
        const samePointsCount = standings.filter(t => t.points === a.points).length

        if (samePointsCount === 2) {
            // Hanya dua tim dengan poin sama → gunakan H2H
            const h2hMatches = matches.filter(
                (m) =>
                    m.type === type &&
                    ((m.homeTeamId === a.id && m.awayTeamId === b.id) ||
                        (m.homeTeamId === b.id && m.awayTeamId === a.id)) &&
                    m.score &&
                    m.score.includes(":")
            )

            if (h2hMatches.length > 0) {
                let aGoals = 0
                let bGoals = 0

                for (const m of h2hMatches) {
                    const [homeScore, awayScore] = m.score.split(":").map(Number)
                    if (m.homeTeamId === a.id) {
                        aGoals += homeScore
                        bGoals += awayScore
                    } else {
                        aGoals += awayScore
                        bGoals += homeScore
                    }
                }

                if (aGoals > bGoals) return -1
                if (bGoals > aGoals) return 1
            }
        }

        // Kalau lebih dari dua tim atau H2H imbang → pakai GD
        if (b.gd !== a.gd) return b.gd - a.gd

        // Kalau GD sama → pakai Goals For
        return b.gf - a.gf
    })

    return standings
}
