"use client"

import { useEffect, useState } from "react"
import { players } from "@/lib/players"
import { teams } from "@/lib/teams"
import Image from "next/image"
import Link from "next/link"

import profiledefault from "@/public/img/profiledefault.jpg"
import { ChevronRight } from "lucide-react"

export default function PlayersPage() {
    const [loading, setLoading] = useState(true)
    const [groupedPlayers, setGroupedPlayers] = useState<Record<string, typeof players>>({})
    const [teamMap, setTeamMap] = useState<Record<string, (typeof teams)[0]>>({})

    useEffect(() => {
        // Simulasi loading (bisa dihapus jika pakai data async asli)
        setTimeout(() => {
            const grouped: Record<string, typeof players> = {}
            for (const player of players) {
                if (!grouped[player.teamId]) grouped[player.teamId] = []
                grouped[player.teamId].push(player)
            }

            const teamObj = Object.fromEntries(teams.map(t => [t.id, t]))

            setGroupedPlayers(grouped)
            setTeamMap(teamObj)
            setLoading(false)
        }, 500)
    }, [])

    if (loading) {
        return (
            <div className="max-w-[430px] mx-auto px-4 pt-28 text-center text-gray-500 text-base h-[80vh] flex justify-center items-center">
                Memuat data pemain...
            </div>
        )
    }

    if (Object.keys(groupedPlayers).length === 0) {
        return (
            <div className="max-w-[430px] mx-auto px-4 pt-28 text-center text-gray-500 text-base h-[80vh] flex justify-center items-center">
                Belum ada data pemain.
            </div>
        )
    }

    return (
        <div className="max-w-[430px] mx-4 pt-24 pb-24 space-y-4">
            <h1 className="text-lg font-bold mb-2 font-[family-name:var(--space-grotesk)]">Players</h1>

            {Object.entries(groupedPlayers).map(([teamId, teamPlayers]) => {
                const team = teamMap[teamId]
                if (!team) return null

                return (
                    <div key={teamId} className="bg-white rounded-xl shadow border border-gray-200">
                        {/* Header Tim */}
                        <div className="flex items-center gap-3 px-4 py-3 border-b border-gray-100 bg-gray-50 rounded-t-xl">
                            <Image src={team.logo} alt={team.name} width={32} height={32} />
                            <h2 className="text-base font-semibold">{team.name}</h2>
                        </div>

                        {/* Daftar Pemain */}
                        <div className="divide-y divide-gray-100">
                            {teamPlayers.map((player) => (
                                <Link
                                    href={`/players/${player.id}`}
                                    key={player.id}
                                    className="block hover:bg-gray-50 transition"
                                >
                                    <div className="flex justify-between items-center px-4 py-3">
                                        <div className="flex items-center gap-3 min-w-0">
                                            <Image
                                                src={player.photo || profiledefault}
                                                alt={player.name}
                                                width={44}
                                                height={44}
                                                className="rounded-full object-cover"
                                            />
                                            <div className="min-w-0">
                                                <p className="font-medium text-sm truncate">{player.name}</p>
                                                <span className="text-xs text-white bg-red-900 px-2 py-0.5 rounded-full">
                                                    {player.position}
                                                </span>
                                            </div>
                                        </div>
                                        <div>
                                            <ChevronRight className="text-gray-400"/>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
