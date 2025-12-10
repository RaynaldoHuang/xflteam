"use client"

import { generatePlayerStats } from "@/lib/generatePlayerStats"
import { getTeamById } from "@/lib/getTeamById"
import Image from "next/image"
import { notFound, useParams } from "next/navigation"
import { useEffect, useState } from "react"

export default function PlayerDetailPage() {
    const params = useParams()
    const [player, setPlayer] = useState<any>(null)

    useEffect(() => {
        async function load() {
            const stats = await generatePlayerStats()
            const found = stats.find(p => p.id === params.id)
            if (!found) return notFound()
            setPlayer(found)
        }

        load()
    }, [params.id])

   
    if (!player) {
        return (
           <div className="max-w-[430px] mx-auto px-4 flex items-center h-[95vh] justify-center text-center text-base text-gray-500">
                Loading data...
            </div>
        )
    }

    const team = getTeamById(player.teamId)

    return (
        <div className="max-w-[430px] mx-auto px-4 pt-24 pb-20">
            <div className="flex flex-col items-center">
                <Image
                    src={player.photo || "/img/profiledefault.webp"}
                    alt={player.name}
                    width={100}
                    height={100}
                    className="rounded-full object-cover mb-4"
                />
                <h1 className="text-xl font-bold">{player.name}</h1>
                <p className="text-sm text-gray-600">{player.position}</p>
                {team && <p className="text-sm mt-1 text-gray-700">Team: {team.name}</p>}
            </div>

            <div className="mt-6 bg-white rounded-lg shadow px-4 py-3 space-y-2">
                <div className="text-sm flex justify-between">
                    <span>Goals</span>
                    <span className="font-semibold">{player.goals}</span>
                </div>
                <div className="text-sm flex justify-between">
                    <span>Yellow Cards</span>
                    <span className="font-semibold">{player.yellowCards}</span>
                </div>
                <div className="text-sm flex justify-between">
                    <span>Red Cards</span>
                    <span className="font-semibold">{player.redCards}</span>
                </div>
            </div>
        </div>
    )
}
