"use client"

import { useEffect, useState } from "react"
import { matches } from "@/lib/matchday"
import { teams } from "@/lib/teams"
import dayjs from "dayjs"
import "dayjs/locale/id"

dayjs.locale("id")

const teamMap = Object.fromEntries(teams.map(t => [t.id, t]))

// 🏷️ Fungsi untuk menampilkan label pertandingan
function getStageLabel(match: (typeof matches)[number]) {
    if (!match) return "Unknown"

    const comp = match.competition
    const stage = match.stage

    // Mapping label berdasarkan competition & stage
    const labels: Record<string, Record<string, string>> = {
        league: {
            group: "League",
            playoff: "League Playoff",
            semifinal: "League Semifinal",
            final: "League Final",
        },
        cup: {
            group: "Cup",
            playoff: "Cup Playoff",
            semifinal: "Cup Semifinal",
            final: "Cup Final",
        },
    }

    return labels[comp]?.[stage] ?? "Unknown"
}

export default function MatchSchedule() {
    const [loading, setLoading] = useState(true)
    const [groupedMatches, setGroupedMatches] = useState<Record<string, typeof matches>>({})

    useEffect(() => {
        const loadMatches = async () => {
            // ⏳ Ambil semua pertandingan yang belum ada skor (upcoming)
            const upcomingMatches = matches.filter(m => !m.score || !m.score.includes(":"))
            const matchesByDate: Record<string, typeof matches> = {}

            for (const match of upcomingMatches) {
                if (!match.date) continue
                const dateKey = dayjs(match.date).format("YYYY-MM-DD")
                if (!matchesByDate[dateKey]) matchesByDate[dateKey] = []
                matchesByDate[dateKey].push(match)
            }

            setGroupedMatches(matchesByDate)
            setLoading(false)
        }

        loadMatches()
    }, [])

    const sortedDates = Object.keys(groupedMatches).sort()

    if (loading) {
        return (
            <div className="max-w-[430px] mx-auto px-4 flex items-center h-[95vh] justify-center text-center text-base text-gray-500">
                Loading data...
            </div>
        )
    }

    if (!sortedDates.length) {
        return (
            <div className="max-w-[430px] mx-auto px-4 flex items-center h-[95vh] justify-center text-center text-base text-gray-500">
                Belum ada pertandingan.
            </div>
        )
    }

    return (
        <div className="max-w-[430px] mx-4 space-y-4 pt-26 pb-26">
            {sortedDates.map((dateKey) => {
                const dayMatches = groupedMatches[dateKey]
                const formattedDate = dayjs(dateKey).format("dddd, DD MMMM YYYY")
                const matchSample = dayMatches[0]
                const stageLabel = getStageLabel(matchSample)

                return (
                    <div key={dateKey} className="space-y-2">
                        {/* 🏷️ Header tanggal dan label stage */}
                        <div className="bg-gray-200 px-3 py-2 text-sm font-medium rounded flex justify-between">
                            <div>{stageLabel}</div>
                            <div>{formattedDate}</div>
                        </div>

                        {/* 📅 List pertandingan di tanggal tersebut */}
                        <div className="space-y-2">
                            {dayMatches.map((match, i) => {
                                const home = teamMap[match.homeTeamId]
                                const away = teamMap[match.awayTeamId]

                                return (
                                    <div
                                        key={i}
                                        className="bg-white rounded-lg shadow px-4 py-3 items-center"
                                    >
                                        <div className="flex justify-between items-stretch">
                                            {/* 🏟️ Tim kandang & tandang */}
                                            <div className="space-y-2">
                                                <div className="flex items-center">
                                                    <img
                                                        src={home.logo}
                                                        alt={home.name}
                                                        className="w-6 h-6 object-contain me-4"
                                                    />
                                                    <span className="text-base">{home.name}</span>
                                                </div>
                                                <div className="flex items-center">
                                                    <img
                                                        src={away.logo}
                                                        alt={away.name}
                                                        className="w-6 h-6 object-contain me-4"
                                                    />
                                                    <span className="text-base">{away.name}</span>
                                                </div>
                                            </div>

                                            {/* 🕒 Venue & Waktu */}
                                            <div className="flex items-center space-x-4 ps-4">
                                                <div className="self-stretch w-px bg-gray-300" />
                                                <div className="flex flex-col text-center text-sm text-gray-500">
                                                    <span>{match.venue}</span>
                                                    <span>{match.time}</span>
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
