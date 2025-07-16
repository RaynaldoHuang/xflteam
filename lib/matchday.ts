type MatchEvent = {
  type: "goal" | "yellow" | "red"
  team: "home" | "away"
  player: string
  minute: number
}

export const matches = [
    {
        homeTeamId: "macallan",
        awayTeamId: "hennessy",
        score: "0",
        week: 1,
        type: "league",
        date: "2025-07-21",
        time: "15:30",
        venue: "Lapangan B",
        events: [
            // { type: "goal", team: "home", player: "Bruno", minute: 23 },
        ] as MatchEvent[],
    },
    {
        homeTeamId: "singleton",
        awayTeamId: "blacklabel",
        score: "1 : 1",
        week: 1,
        type: "league",
        date: "2025-07-19",
        time: "18:00",
        venue: "Lapangan B",
        events: [
            // { type: "yellow", team: "away", player: "Marc G", minute: 62 },
        ],
    },
    {
        homeTeamId: "cockburn",
        awayTeamId: "azul",
        score: "3 : 5",
        week: 2,
        type: "cup",
        date: "2025-07-25",
        time: "18:00",
        venue: "Lapangan B",
        events: [
         // { type: "yellow", team: "away", player: "Marc G", minute: 62 },
        ],
    },
    {
        homeTeamId: "cockburn",
        awayTeamId: "azul",
        score: "0",
        week: 3,
        type: "league",
        date: "2025-08-4",
        time: "18:00",
        venue: "Lapangan B",
        events: [
            // { type: "yellow", team: "away", player: "Marc G", minute: 62 },
        ],
    },
]
