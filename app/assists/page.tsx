"use client"

import { useEffect, useState } from "react"
import { generatePlayerStats } from "@/lib/generatePlayerStats"
import { getTeamById } from "@/lib/getTeamById"
import Image from "next/image"
import profiledefault from "@/public/img/profiledefault.webp"

export default function TopAssists() {
    const [loading, setLoading] = useState(true)
    const [topAssists, setTopAssists] = useState<any[]>([])

    useEffect(() => {
        const load = async () => {
            const stats = await generatePlayerStats()

            // Langsung filter hanya yang punya assist > 0
            const filtered = stats.filter(player => Number(player.assists) > 0)

            const sorted = [...filtered]
                .sort((a, b) => Number(b.assists) - Number(a.assists))
                .slice(0, 10)


            setTopAssists(sorted)
            setLoading(false)
        }

        load()
    }, [])

    if (loading) {
        return <div className="max-w-[430px] mx-auto px-4 flex items-center h-[95vh] justify-center text-center text-base text-gray-500">
            Loading data...
        </div>
    }

    if (topAssists.length === 0) {
        return <div className="max-w-[430px] mx-auto px-4 flex items-center h-[95vh] justify-center text-center text-base text-gray-500">
            Belum ada data assist.
        </div>
    }

    return (
        <div className="max-w-[430px] mx-4 pt-24 pb-24">
            <h2 className="font-bold text-lg mb-2 font-[family-name:var(--space-grotesk)]">Top Assist</h2>
            <div className="space-y-3">
                {topAssists.map((player, i) => {
                    const team = getTeamById(player.teamId)
                    return (
                        <div key={i} className="flex items-center justify-between bg-white px-4 py-3 rounded-lg shadow">
                            <div className="flex items-center gap-3">
                                <Image
                                    src={player.photo || profiledefault}
                                    alt={player.name}
                                    width={40}
                                    height={40}
                                    className="rounded-full object-cover"
                                />
                                <div>
                                    <div className="font-medium">{player.name}</div>
                                    <div className="text-sm text-gray-500">{team?.name}</div>
                                </div>
                            </div>
                            <div className="text-lg font-bold text-red-900">{player.assists}</div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
