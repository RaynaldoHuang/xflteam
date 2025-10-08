import { matches } from "./matchday"
import { teams } from "./teams"

const teamMap = Object.fromEntries(teams.map(team => [team.id, team]))

// 🏁 Batas akhir minggu liga reguler (optional — bisa dipakai kalau butuh)
const LEAGUE_LAST_WEEK = 7

// 🏆 Tipe kompetisi & tahapan
export type CompetitionType = "league" | "cup"
export type StageType = "group" | "playoff" | "semifinal" | "final"

// ✅ Helper cek apakah pertandingan knockout (tidak masuk klasemen)
function isKnockoutStage(match: any) {
    return match.stage === "playoff" || match.stage === "semifinal" || match.stage === "final"
}

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

export function generateStandings(
    type: CompetitionType = "league",
    group?: "A" | "B"
) {
    const table: Record<string, TeamStats> = {}

    // ⏩ Inisialisasi semua tim sesuai group bila ada
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

    // ⏳ Filter match sesuai tipe kompetisi
    const filteredMatches = matches.filter(match => match.competition === type)

    for (const match of filteredMatches) {
        const homeTeam = teamMap[match.homeTeamId]
        const awayTeam = teamMap[match.awayTeamId]

        if (!homeTeam || !awayTeam) continue

        // Filter group jika diperlukan
        if (group && (homeTeam.group !== group || awayTeam.group !== group)) continue

        // ❌ Lewati knockout (playoff, semifinal, final)
        if (isKnockoutStage(match)) continue

        // ❌ Lewati match tanpa skor
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

    // 🔢 Hitung poin & goal difference
    const standings = Object.values(table).map(team => ({
        ...team,
        points: team.win * 2 + team.draw,
        gd: team.gf - team.ga,
    }))

    // 📊 Urutan klasemen: Points → Head-to-Head (jika 2 tim) → GD → GF
    standings.sort((a, b) => {
        // Tim tanpa pertandingan diurut terakhir
        if (a.played === 0 && b.played > 0) return 1
        if (b.played === 0 && a.played > 0) return -1

        // 1️⃣ Points
        if (b.points !== a.points) return b.points - a.points

        // 2️⃣ Head to head jika hanya 2 tim dengan poin sama
        const samePointsCount = standings.filter(t => t.points === a.points).length
        if (samePointsCount === 2) {
            const h2hMatches = matches.filter(
                (m) =>
                    m.competition === type &&              // ⬅️ sudah diganti
                    !isKnockoutStage(m) &&
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

        // 3️⃣ Goal Difference
        if (b.gd !== a.gd) return b.gd - a.gd

        // 4️⃣ Goals For
        return b.gf - a.gf
    })

    return standings
}
