"use client"

import { useEffect, useState } from "react"
import { generateStandings } from "@/lib/standings"

export default function RankingTable() {
    const [loading, setLoading] = useState(true)
    const [standings, setStandings] = useState<any[]>([])

    useEffect(() => {
        const load = () => {
            const result = generateStandings()
            setStandings(result)
            setLoading(false)
        }
        load()
    }, [])

    if (loading) {
        return (
            <div className="max-w-[430px] mx-auto px-4 flex items-center h-[95vh] justify-center text-center text-base text-gray-500">
                Loading data...
            </div>
        )
    }

    return (
        <div className="w-full max-w-[430px] mx-auto">
            <div className="overflow-x-auto rounded-md shadow-sm mx-4">
                <table className="w-full text-sm border-collapse">
                    <thead className="bg-red-900 text-white z-10">
                        <tr>
                            <th className="p-2 w-1" />
                            <th className="pl-1 pt-2 pb-2 pe-2 text-left">Team</th>
                            <th className="pl-1 pt-2 pb-2 pe-2">P</th>
                            <th className="pl-1 pt-2 pb-2 pe-2">W</th>
                            <th className="pl-1 pt-2 pb-2 pe-2">D</th>
                            <th className="pl-1 pt-2 pb-2 pe-2">L</th>
                            <th className="pl-1 pt-2 pb-2 pe-2">GF-GA</th>
                            <th className="pl-1 pt-2 pb-2 pe-2">Pts</th>
                        </tr>
                    </thead>
                    <tbody>
                        {standings.map((team, i) => {
                            const indicatorColor =
                                i < 3
                                    ? "bg-blue-500"
                                    : i < 7
                                        ? "bg-orange-400"
                                        : "bg-red-500"
                            return (
                                <tr key={team.id} className="border-b border-gray-200">
                                    <td className="p-0 w-1">
                                        <div className={`w-1 h-10 ${indicatorColor}`} />
                                    </td>
                                    <td className="pl-1 pt-2 pb-2 pe-2 flex items-center gap-2">
                                        <span className="text-gray-500 font-semibold w-4 text-right">{i + 1}.</span>
                                        <img
                                            src={team.logo}
                                            alt={team.name}
                                            className="w-5 h-5 object-contain"
                                        />
                                        <span>{team.name}</span>
                                    </td>
                                    <td className="pl-1 pt-2 pb-2 pe-2 text-center">{team.played}</td>
                                    <td className="pl-1 pt-2 pb-2 pe-2 text-center">{team.win}</td>
                                    <td className="pl-1 pt-2 pb-2 pe-2 text-center">{team.draw}</td>
                                    <td className="pl-1 pt-2 pb-2 pe-2 text-center">{team.lose}</td>
                                    <td className="pl-1 pt-2 pb-2 pe-2 text-center">{team.gf}-{team.ga}</td>
                                    <td className="pl-1 pt-2 pb-2 pe-2 text-center font-bold">{team.points}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
