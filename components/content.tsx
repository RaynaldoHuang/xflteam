import Image from "next/image"
import Link from "next/link"
import { matches } from "@/lib/matchday"
import { generatePlayerStats } from "@/lib/generatePlayerStats"
import { getTeamById } from "@/lib/getTeamById"

import players from "@/public/svg/players.svg"
import team from "@/public/svg/club.svg"
import topscores from "@/public/svg/topscores.svg"
import assits from "@/public/svg/assits.svg"

import RankingTable from "./RankingTable"

export default async function HomeContent() {
    const stats = await generatePlayerStats()

    const finishedMatches = [...matches]
        .filter(m => m.score && m.score.includes(":") && m.date)
        .sort((a, b) => new Date(b.date!).getTime() - new Date(a.date!).getTime())
        .slice(0, 4)

    return (
        <>
            <div className="mt-24 pb-24">
                {/* MENU */}
                <div className="w-full max-w-[430px] mx-auto">
                    <div className="mx-4">
                        <div className="flex justify-between mt-4 mb-3 items-center">
                            <h1 className="font-[family-name:var(--space-grotesk)] font-bold text-lg">Menu</h1>
                        </div>

                        <div className="grid grid-cols-4 gap-4">
                            {[
                                {
                                    icon: team, label: "Teams", href: "/teams"
                                },
                                {
                                    icon: players, label: "Players", href: "/players"
                                },
                                {
                                    icon: topscores, label: "Top Score", href: "/topskor"
                                },
                                {
                                    icon: assits, label: "Assists", href: "/assists"
                                }
                            ].map((item, idx) => (
                                <Link key={idx} href={item.href}>
                                    <div className="flex flex-col justify-center items-center">
                                        <div className="bg-red-950 px-3 py-3 rounded-lg">
                                            <Image
                                                src={item.icon}
                                                alt=""
                                                className="text-white w-12 h-12"
                                            />
                                        </div>
                                        <h1 className="mt-2 font-[family-name:var(--space-grotesk)] font-semibold">{item.label}</h1>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                {/* HASIL PERTANDINGAN */}
                <div className="w-full max-w-[430px] mx-auto">
                    <div className="mx-4">
                        <div className="flex justify-between mt-6 items-center">
                            <h1 className="font-[family-name:var(--space-grotesk)] font-bold text-lg">Hasil Pertandingan</h1>
                            <Link href={"/result"} className="font-[family-name:var(--space-grotesk)] font-medium text-sm text-gray-500">
                                Lihat semua
                            </Link>
                        </div>

                        {finishedMatches.length > 0 ? (
                            <div className="mt-3 space-y-2 mb-4">
                                {finishedMatches.map((match, i) => {
                                    const home = getTeamById(match.homeTeamId)
                                    const away = getTeamById(match.awayTeamId)

                                    return (
                                        <div key={i} className="bg-gray-50 rounded-lg text-red-950 px-4 py-3 shadow">
                                            <div className="flex justify-between items-center mb-5">
                                                <div>
                                                    <h1 className="font-semibold capitalize">{match.type}</h1>
                                                    <p className="text-sm">
                                                        {match.date &&
                                                            new Date(match.date).toLocaleDateString("id-ID", {
                                                                weekday: "long",
                                                                day: "2-digit",
                                                                month: "long",
                                                                year: "numeric",
                                                            })}
                                                    </p>
                                                </div>
                                                <p className="text-base font-bold">Week {match.week}</p>
                                            </div>

                                            <div className="grid grid-cols-3 items-center text-center">
                                                {/* Home Team */}
                                                <div className="flex flex-col items-center gap-2 min-w-0">
                                                    <Image src={home?.logo || ""} alt={home?.name || ""} width={65} height={65} className="object-contain" />
                                                    <div className="truncate text-sm font-semibold">{home?.name}</div>
                                                </div>

                                                {/* Score */}
                                                <div>
                                                    <div className="text-3xl font-bold">{match.score}</div>
                                                    <div className="bg-red-900 text-white text-xs mx-3 py-0.5 rounded-full mt-2">Full time</div>
                                                </div>

                                                {/* Away Team */}
                                                <div className="flex flex-col items-center gap-2 min-w-0 justify-end text-right">
                                                    <Image src={away?.logo || ""} alt={away?.name || ""} width={65} height={65} className="object-contain" />
                                                    <div className="truncate text-sm font-semibold">{away?.name}</div>
                                                </div>
                                            </div>

                                            {/* Events */}
                                            <div className="flex justify-between mt-5">
                                                <div className="text-xs text-red-950 mt-1 space-y-0.5">
                                                    {Object.entries(
                                                        match.events
                                                            ?.filter((e) => e.team === "home" && e.type === "goal")
                                                            .reduce((acc, e) => {
                                                                if (!acc[e.player]) acc[e.player] = []
                                                                acc[e.player].push(e.minute)
                                                                return acc
                                                            }, {} as Record<string, number[]>)
                                                    ).map(([player, minutes], idx) => (
                                                        <div key={`goal-${idx}`} className="flex items-center">
                                                            ⚽ <p className="ms-1 me-1">{player}</p>{minutes.join("’, ")}’
                                                        </div>
                                                    ))}

                                                    {/* Bagian Kartu Kuning */}
                                                    {Object.entries(
                                                        match.events
                                                            ?.filter((e) => e.team === "home" && e.type === "yellow")
                                                            .reduce((acc, e) => {
                                                                if (!acc[e.player]) acc[e.player] = []
                                                                acc[e.player].push(e.minute)
                                                                return acc
                                                            }, {} as Record<string, number[]>)
                                                    ).map(([player, minutes], idx) => (
                                                        <div key={`yellow-${idx}`} className="flex items-center">
                                                            🟨 <p className="ms-1 me-1">{player}</p>{minutes.join("’, ")}’
                                                        </div>
                                                    ))}

                                                    {Object.entries(
                                                        match.events
                                                            ?.filter((e) => e.team === "home" && e.type === "red")
                                                            .reduce((acc, e) => {
                                                                if (!acc[e.player]) acc[e.player] = []
                                                                acc[e.player].push(e.minute)
                                                                return acc
                                                            }, {} as Record<string, number[]>)
                                                    ).map(([player, minutes], idx) => (
                                                        <div key={`red-home-${idx}`} className="flex items-center">
                                                            🟥 <p className="ms-1 me-1">{player}</p>{minutes.join("’, ")}’
                                                        </div>
                                                    ))}
                                                </div>
                                                <div className="text-xs text-red-950 mt-1 space-y-0.5">
                                                    {Object.entries(
                                                        match.events
                                                            ?.filter((e) => e.team === "away" && e.type === "goal")
                                                            .reduce((acc, e) => {
                                                                if (!acc[e.player]) acc[e.player] = []
                                                                acc[e.player].push(e.minute)
                                                                return acc
                                                            }, {} as Record<string, number[]>)
                                                    ).map(([player, minutes], idx) => (
                                                        <div key={`goal-${idx}`} className="flex items-center">
                                                            ⚽ <p className="ms-1 me-1">{player}</p>{minutes.join("’, ")}’
                                                        </div>
                                                    ))}

                                                    {/* Bagian Kartu Kuning */}
                                                    {Object.entries(
                                                        match.events
                                                            ?.filter((e) => e.team === "away" && e.type === "yellow")
                                                            .reduce((acc, e) => {
                                                                if (!acc[e.player]) acc[e.player] = []
                                                                acc[e.player].push(e.minute)
                                                                return acc
                                                            }, {} as Record<string, number[]>)
                                                    ).map(([player, minutes], idx) => (
                                                        <div key={`yellow-${idx}`} className="flex items-center">
                                                            🟨 <p className="ms-1 me-1">{player}</p>{minutes.join("’, ")}’
                                                        </div>
                                                    ))}

                                                    {Object.entries(
                                                        match.events
                                                            ?.filter((e) => e.team === "away" && e.type === "red")
                                                            .reduce((acc, e) => {
                                                                if (!acc[e.player]) acc[e.player] = []
                                                                acc[e.player].push(e.minute)
                                                                return acc
                                                            }, {} as Record<string, number[]>)
                                                    ).map(([player, minutes], idx) => (
                                                        <div key={`red-away-${idx}`} className="flex items-center">
                                                            🟥 <p className="ms-1 me-1">{player}</p>{minutes.join("’, ")}’
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        ) :
                            <div className="h-[12vh] flex items-center justify-center text-center text-sm text-gray-500 mt-4 mb-6">
                                Belum ada hasil pertandingan.
                            </div>
                        }
                    </div>
                </div>

                {/* KLASMEN */}
                <div className="w-full max-w-[430px] mx-auto">
                    <div className="mx-4">
                        <div className="flex justify-between mt-8 mb-3 items-center">
                            <h1 className="font-[family-name:var(--space-grotesk)] font-bold text-lg">Klasemen League</h1>
                            <Link href={"/ranking"} className="font-[family-name:var(--space-grotesk)] font-medium text-sm text-gray-500">
                                Lihat semua
                            </Link>
                        </div>
                    </div>

                    <div>
                        <RankingTable />
                    </div>

                    {/* Legend Kualifikasi */}
                    <div className="bg-gray-100 mx-4 rounded-md mt-4">
                        <div className="px-3 py-3">
                            <h1 className="font-[family-name:var(--space-grotesk)] text-base mb-1 font-semibold">Kualifikasi</h1>
                            <div className="flex items-center gap-4">
                                <div className="flex items-center">
                                    <div className="w-4 h-4 bg-blue-500 me-2"></div>
                                    <div className="text-sm">Lolos Semifinal</div>
                                </div>
                                <div className="flex items-center">
                                    <div className="w-4 h-4 bg-orange-400 me-2"></div>
                                    <div className="text-sm">Play Off</div>
                                </div>
                                <div className="flex items-center">
                                    <div className="w-4 h-4 bg-red-500 me-2"></div>
                                    <div className="text-sm">Gugur</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
