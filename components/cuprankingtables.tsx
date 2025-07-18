"use client"

import { useEffect, useState } from "react"
import { generateCupStandings } from "@/lib/generateCupStandings"

export default function CupRankingTable() {
    const [groups, setGroups] = useState<Record<string, any[]> | null>(null)

    useEffect(() => {
        const fetchData = async () => {
            const data = await generateCupStandings()
            setGroups(data)
        }

        fetchData()
    }, [])

    if (!groups) {
        return (
           <div className="max-w-[430px] mx-auto px-4 flex items-center h-[95vh] justify-center text-center text-base text-gray-500">
                Loading data...
            </div>
        )
    }

    return (
        <div className="max-w-[430px] mx-4 pt-2 space-y-4">
            {Object.entries(groups).map(([groupName, standings]) => (
                <div key={groupName}>
                    <h2 className="text-base font-semibold text-gray-800 mb-2">
                        Group {groupName}
                    </h2>

                    <div className="overflow-x-auto rounded-md shadow-sm border border-gray-200">
                        <table className="w-full text-sm border-collapse">
                            <thead className="bg-red-900 text-white">
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
                                        i < 2
                                            ? "bg-blue-500"
                                            : i < 4
                                            ? "bg-red-500"
                                            : "bg-orange-500"
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
            ))}
        </div>
    )
}
