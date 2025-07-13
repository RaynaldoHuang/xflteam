import { matches } from "@/lib/matchday"
import { teams } from "@/lib/teams"
import dayjs from "dayjs"

const teamMap = Object.fromEntries(teams.map(t => [t.id, t]))

export default function MatchSchedule() {
    // Filter hanya pertandingan yang belum selesai
    const upcomingMatches = matches.filter(m => !m.score || !m.score.includes(":"))

    // Group by date string
    const matchesByDate: Record<string, typeof matches> = {}

    for (const match of upcomingMatches) {
        if (!match.date) continue
        const dateKey = dayjs(match.date).format("YYYY-MM-DD")
        if (!matchesByDate[dateKey]) matchesByDate[dateKey] = []
        matchesByDate[dateKey].push(match)
    }

    // Urutkan tanggal
    const sortedDates = Object.keys(matchesByDate).sort()

    return (
        <div className="max-w-[430px] mx-4 space-y-4 pt-26 pb-20">
            {sortedDates.map((dateKey) => {
                const weekMatches = matchesByDate[dateKey]
                const formattedDate = dayjs(dateKey).format("dddd, DD MMMM YYYY")
                const matchSample = weekMatches[0]
                const week = matchSample?.week
                const type = matchSample?.type?.charAt(0).toUpperCase() + matchSample?.type?.slice(1)

                return (
                    <div key={dateKey} className="space-y-2">
                        <div className="bg-gray-200 px-3 py-2 text-sm font-medium rounded flex justify-between">
                            <div>
                                Week {week} • {type}
                            </div>
                            <div>
                                {formattedDate}
                            </div>
                        </div>

                        <div className="space-y-2">
                            {weekMatches.map((match, i) => {
                                const home = teamMap[match.homeTeamId]
                                const away = teamMap[match.awayTeamId]

                                return (
                                    <div
                                        key={i}
                                        className="bg-white rounded-lg shadow px-4 py-3 items-center"
                                    >
                                        <div>
                                            <div className="flex justify-between items-stretch">
                                                {/* Tim Home & Away */}
                                                <div className="space-y-2">
                                                    <div className="flex items-center">
                                                        <img src={home.logo} alt={home.name} className="w-6 h-6 object-contain me-4" />
                                                        <span className="text-base">{home.name}</span>
                                                    </div>
                                                    <div className="flex items-center">
                                                        <img src={away.logo} alt={away.name} className="w-6 h-6 object-contain me-4" />
                                                        <span className="text-base">{away.name}</span>
                                                    </div>
                                                </div>

                                                {/* Divider + Info */}
                                                <div className="flex items-center space-x-4 ps-4">
                                                    {/* Divider */}
                                                    <div className="self-stretch w-px bg-gray-300" />

                                                    {/* Venue & Time */}
                                                    <div className="flex flex-col text-center text-sm text-gray-500">
                                                        <span>{match.venue}</span>
                                                        <span>{match.time}</span>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
