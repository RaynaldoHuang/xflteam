"use client"

import { useEffect, useState } from "react"
import { generatePlayerStats } from "@/lib/generatePlayerStats"
import { getTeamById } from "@/lib/getTeamById"
import Image from "next/image"

export default function TopScorersPage() {
    const [topScorers, setTopScorers] = useState<any[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchStats = async () => {
            const stats = await generatePlayerStats()

            // Cek apakah ada setidaknya satu goal
            const filtered = stats.filter(player => player.goals > 0)

            const sorted = [...filtered]
                .sort((a, b) => b.goals - a.goals)
                .slice(0, 10)

            setTopScorers(sorted)
            setLoading(false)
        }

        fetchStats()
    }, [])


    if (loading) {
        return (
            <div className="max-w-[430px] mx-auto px-4 flex items-center h-[95vh] justify-center text-center text-base text-gray-500">
                Loading data...
            </div>
        )
    }

    if (!loading && topScorers.length === 0) {
        return (
            <div className="max-w-[430px] mx-auto px-4 flex items-center justify-center h-[95vh] text-center text-base text-gray-500">
                Belum ada data top skor.
            </div>
        )
    }

    return (
        <div className="max-w-[430px] mx-4 pt-24 pb-24">
            <h1 className="text-lg font-bold mb-2 font-[family-name:var(--space-grotesk)]">Top Skor</h1>

            <div className="space-y-3">
                {topScorers.map((player, index) => {
                    const team = getTeamById(player.teamId)

                    return (
                        <div
                            key={player.id}
                            className="flex items-center justify-between bg-white shadow rounded-lg p-3"
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 relative rounded-full overflow-hidden bg-gray-200">
                                    <Image
                                        src={player.photo || "/img/profiledefault.jpg"}
                                        alt={player.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div>
                                    <div className="font-semibold">{player.name}</div>
                                    <div className="text-sm text-gray-500">{team?.name}</div>
                                </div>
                            </div>
                            <div className="text-lg font-bold text-red-900">{player.goals} ⚽</div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
