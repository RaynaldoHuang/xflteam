import { teams } from "@/lib/teams"
import { getTeamStats } from "@/lib/getTeamStats"
import Image from "next/image"

export default function TeamsPage() {
    return (
        <div className="max-w-[430px] mx-auto px-4 pt-24 pb-24 space-y-4">
            <h1 className="text-lg font-bold mb-2 font-[family-name:var(--space-grotesk)]">Teams</h1>

            {teams.map(team => {
                const stats = getTeamStats(team.id)

                return (
                    <div key={team.id} className="bg-white rounded-xl shadow p-4">
                        {/* Header: Logo & Team Name */}
                        <div className="flex items-center gap-3 mb-3">
                            <Image
                                src={team.logo}
                                alt={team.name}
                                width={36}
                                height={36}
                                className="rounded-full object-contain"
                            />
                            <h2 className="text-base font-semibold">{team.name}</h2>
                        </div>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 gap-3 text-sm">
                            {/* League */}
                            <div className="bg-gray-50 p-3 rounded-md">
                                <h3 className="font-semibold text-red-900 mb-1">League</h3>
                                <p>Win: {stats.league.win}</p>
                                <p>Draw: {stats.league.draw}</p>
                                <p>Lose: {stats.league.lose}</p>
                                <p className="mt-1 font-semibold">Winrate: {stats.league.winrate}%</p>
                            </div>

                            {/* Cup */}
                            <div className="bg-gray-50 p-3 rounded-md">
                                <h3 className="font-semibold text-red-900 mb-1">Cup</h3>
                                <p>Win: {stats.cup.win}</p>
                                <p>Draw: {stats.cup.draw}</p>
                                <p>Lose: {stats.cup.lose}</p>
                                <p className="mt-1 font-semibold">Winrate: {stats.cup.winrate}%</p>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
