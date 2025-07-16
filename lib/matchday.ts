export const matches: {
    homeTeamId: string
    awayTeamId: string
    score: string
    week: number
    type: string
    date: string
    time: string
    venue: string
    events: MatchEvent[]
}[] = [
        // {
        //     homeTeamId: "macallan",
        //     awayTeamId: "hennessy",
        //     score: "3 : 1",
        //     week: 1,
        //     type: "league",
        //     date: "2025-07-21",
        //     time: "15:30",
        //     venue: "Lapangan B",
        //     events: [
        //         { type: "goal", team: "home", player: "bruno", minute: 23 },
        //         { type: "goal", team: "home", player: "bruno", minute: 45 },
        //         { type: "assist", team: "home", player: "rashford", minute: 23 },
        //     ] as MatchEvent[],
        // },
        // {
        //     homeTeamId: "singleton",
        //     awayTeamId: "blacklabel",
        //     score: "0",
        //     week: 1,
        //     type: "league",
        //     date: "2025-07-19",
        //     time: "18:00",
        //     venue: "Lapangan B",
        //     events: [
        //         { type: "yellow", team: "away", player: "Marc G", minute: 62 },
        //     ],
        // },
        // {
        //     homeTeamId: "cockburn",
        //     awayTeamId: "azul",
        //     score: "0",
        //     week: 2,
        //     type: "cup",
        //     date: "2025-07-25",
        //     time: "18:00",
        //     venue: "Lapangan B",
        //     events: [
        //         { type: "yellow", team: "away", player: "Marc G", minute: 62 },
        //     ],
        // },
        // {
        //     homeTeamId: "cockburn",
        //     awayTeamId: "azul",
        //     score: "0",
        //     week: 3,
        //     type: "league",
        //     date: "2025-08-4",
        //     time: "18:00",
        //     venue: "Lapangan B",
        //     events: [
        //         { type: "yellow", team: "away", player: "Marc G", minute: 62 },
        //     ],
        // },
    ]

type MatchEvent = {
  type: "goal" | "assist" | "yellow" | "red"
  team: "home" | "away"
  player: string
  minute: number
}
