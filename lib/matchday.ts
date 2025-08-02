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

        //week1
        {
            homeTeamId: "azul",
            awayTeamId: "blacklabel",
            score: "2 : 2",
            week: 1,
            type: "league",
            date: "2025-07-31",
            time: "20:00",
            venue: "Lapangan B",
            events: [
                { type: "goal", team: "home", player: "jono", minute: 20, assist: "cibex" },
                { type: "goal", team: "home", player: "cibex", minute: 23, assist: "jono" },
                { type: "yellow", team: "home", player: "ricky", minute: 45 },
                { type: "goal", team: "away", player: "titus", minute: 3, assist: "swan" },
                { type: "goal", team: "away", player: "titus", minute: 12, assist: "zhongyen" },
                { type: "yellow", team: "away", player: "willy", minute: 37 },
            ] as unknown as MatchEvent[],
        },
        {
            homeTeamId: "hennessy",
            awayTeamId: "cockburn",
            score: "1 : 1",
            week: 1,
            type: "league",
            date: "2025-07-31",
            time: "20:00",
            venue: "Lapangan C",
            events: [
                { type: "goal", team: "home", player: "wong (OG)", minute: 15 },
                { type: "yellow", team: "home", player: "yongsun", minute: 34 },
                { type: "goal", team: "away", player: "nino", minute: 30, assist: "kibuk" },
            ] as unknown as MatchEvent[],
        },
        {
            homeTeamId: "macallan",
            awayTeamId: "singleton",
            score: "3 : 2",
            week: 1,
            type: "league",
            date: "2025-07-31",
            time: "21:00",
            venue: "Lapangan B",
            events: [
                { type: "goal", team: "home", player: "daniel", minute: 3 },
                { type: "goal", team: "home", player: "bambang", minute: 31 },
                { type: "goal", team: "home", player: "budju", minute: 46, assist: "herwin" },
                { type: "goal", team: "away", player: "mitra", minute: 12, assist: "rbonn" },
                { type: "goal", team: "away", player: "acai", minute: 18, assist: "gabriel" },
            ] as unknown as MatchEvent[],
        },
        {
            homeTeamId: "hibiki",
            awayTeamId: "glenfiddich",
            score: "1 : 2",
            week: 1,
            type: "league",
            date: "2025-07-31",
            time: "21:00",
            venue: "Lapangan C",
            events: [
                { type: "goal", team: "home", player: "fauzi", minute: 44, assist: "riko" },
                { type: "goal", team: "away", player: "bayu", minute: 22, assist: "tony" },
                { type: "goal", team: "away", player: "bayu", minute: 47, assist: "tony" },
            ] as unknown as MatchEvent[],
        },

        //week2
        {
            homeTeamId: "macallan",
            awayTeamId: "cockburn",
            score: "0",
            week: 2,
            type: "league",
            date: "2025-08-7",
            time: "20:00",
            venue: "Lapangan B",
            events: [
                // { type: "goal", team: "home", player: "bruno", minute: 23 },
            ] as MatchEvent[],
        },
        {
            homeTeamId: "hibiki",
            awayTeamId: "azul",
            score: "0",
            week: 2,
            type: "league",
            date: "2025-08-7",
            time: "20:00",
            venue: "Lapangan C",
            events: [
                // { type: "yellow", team: "away", player: "Marc G", minute: 62 },
            ],
        },
        {
            homeTeamId: "blacklabel",
            awayTeamId: "glenfiddich",
            score: "0",
            week: 2,
            type: "league",
            date: "2025-08-7",
            time: "21:00",
            venue: "Lapangan B",
            events: [
                // { type: "yellow", team: "away", player: "Marc G", minute: 62 },
            ],
        },
        {
            homeTeamId: "hennessy",
            awayTeamId: "singleton",
            score: "0",
            week: 2,
            type: "league",
            date: "2025-08-7",
            time: "21:00",
            venue: "Lapangan C",
            events: [
                // { type: "yellow", team: "away", player: "Marc G", minute: 62 },
            ],
        },

        //cup1
        {
            homeTeamId: "blacklabel",
            awayTeamId: "hibiki",
            score: "0",
            week: 1,
            type: "cup",
            date: "2025-08-14",
            time: "20:00",
            venue: "Lapangan B",
            events: [
                // { type: "goal", team: "home", player: "bruno", minute: 23 },
            ] as MatchEvent[],
        },
        {
            homeTeamId: "glenfiddich",
            awayTeamId: "azul",
            score: "0",
            week: 1,
            type: "cup",
            date: "2025-08-14",
            time: "20:00",
            venue: "Lapangan C",
            events: [
                // { type: "yellow", team: "away", player: "Marc G", minute: 62 },
            ],
        },
        {
            homeTeamId: "macallan",
            awayTeamId: "hennessy",
            score: "0",
            week: 1,
            type: "cup",
            date: "2025-08-14",
            time: "21:00",
            venue: "Lapangan B",
            events: [
                // { type: "yellow", team: "away", player: "Marc G", minute: 62 },
            ],
        },
        {
            homeTeamId: "singleton",
            awayTeamId: "cockburn",
            score: "0",
            week: 1,
            type: "cup",
            date: "2025-08-14",
            time: "21:00",
            venue: "Lapangan C",
            events: [
                // { type: "yellow", team: "away", player: "Marc G", minute: 62 },
            ],
        },

        //week3
        {
            homeTeamId: "singleton",
            awayTeamId: "hibiki",
            score: "0",
            week: 3,
            type: "league",
            date: "2025-08-21",
            time: "20:00",
            venue: "Lapangan B",
            events: [
                // { type: "goal", team: "home", player: "bruno", minute: 23 },
            ] as MatchEvent[],
        },
        {
            homeTeamId: "cockburn",
            awayTeamId: "blacklabel",
            score: "0",
            week: 3,
            type: "league",
            date: "2025-08-21",
            time: "20:00",
            venue: "Lapangan C",
            events: [
                // { type: "yellow", team: "away", player: "Marc G", minute: 62 },
            ],
        },
        {
            homeTeamId: "azul",
            awayTeamId: "hennessy",
            score: "0",
            week: 3,
            type: "league",
            date: "2025-08-21",
            time: "21:00",
            venue: "Lapangan B",
            events: [
                // { type: "yellow", team: "away", player: "Marc G", minute: 62 },
            ],
        },
        {
            homeTeamId: "glenfiddich",
            awayTeamId: "macallan",
            score: "0",
            week: 3,
            type: "league",
            date: "2025-08-21",
            time: "21:00",
            venue: "Lapangan C",
            events: [
                // { type: "yellow", team: "away", player: "Marc G", minute: 62 },
            ],
        },

        //week4
        {
            homeTeamId: "azul",
            awayTeamId: "macallan",
            score: "0",
            week: 4,
            type: "league",
            date: "2025-08-28",
            time: "20:00",
            venue: "Lapangan B",
            events: [
                // { type: "goal", team: "home", player: "bruno", minute: 23 },
            ] as MatchEvent[],
        },
        {
            homeTeamId: "hibiki",
            awayTeamId: "hennessy",
            score: "0",
            week: 4,
            type: "league",
            date: "2025-08-28",
            time: "20:00",
            venue: "Lapangan C",
            events: [
                // { type: "yellow", team: "away", player: "Marc G", minute: 62 },
            ],
        },
        {
            homeTeamId: "glenfiddich",
            awayTeamId: "cockburn",
            score: "0",
            week: 4,
            type: "league",
            date: "2025-08-28",
            time: "21:00",
            venue: "Lapangan B",
            events: [
                // { type: "yellow", team: "away", player: "Marc G", minute: 62 },
            ],
        },
        {
            homeTeamId: "blacklabel",
            awayTeamId: "singleton",
            score: "0",
            week: 4,
            type: "league",
            date: "2025-08-28",
            time: "21:00",
            venue: "Lapangan C",
            events: [
                // { type: "yellow", team: "away", player: "Marc G", minute: 62 },
            ],
        },

        //cup2
        {
            homeTeamId: "blacklabel",
            awayTeamId: "azul",
            score: "0",
            week: 2,
            type: "cup",
            date: "2025-09-4",
            time: "20:00",
            venue: "Lapangan B",
            events: [
                // { type: "goal", team: "home", player: "bruno", minute: 23 },
            ] as MatchEvent[],
        },
        {
            homeTeamId: "glenfiddich",
            awayTeamId: "hibiki",
            score: "0",
            week: 2,
            type: "cup",
            date: "2025-09-4",
            time: "20:00",
            venue: "Lapangan C",
            events: [
                // { type: "yellow", team: "away", player: "Marc G", minute: 62 },
            ],
        },
        {
            homeTeamId: "macallan",
            awayTeamId: "singleton",
            score: "0",
            week: 2,
            type: "cup",
            date: "2025-09-4",
            time: "21:00",
            venue: "Lapangan B",
            events: [
                // { type: "yellow", team: "away", player: "Marc G", minute: 62 },
            ],
        },
        {
            homeTeamId: "hennessy",
            awayTeamId: "cockburn",
            score: "0",
            week: 2,
            type: "cup",
            date: "2025-09-4",
            time: "21:00",
            venue: "Lapangan C",
            events: [
                // { type: "yellow", team: "away", player: "Marc G", minute: 62 },
            ],
        },

        //week5
        {
            homeTeamId: "blacklabel",
            awayTeamId: "hennessy",
            score: "0",
            week: 5,
            type: "league",
            date: "2025-09-11",
            time: "20:00",
            venue: "Lapangan B",
            events: [
                // { type: "goal", team: "home", player: "bruno", minute: 23 },
            ] as MatchEvent[],
        },
        {
            homeTeamId: "singleton",
            awayTeamId: "glenfiddich",
            score: "0",
            week: 5,
            type: "league",
            date: "2025-09-11",
            time: "20:00",
            venue: "Lapangan C",
            events: [
                // { type: "yellow", team: "away", player: "Marc G", minute: 62 },
            ],
        },
        {
            homeTeamId: "hibiki",
            awayTeamId: "macallan",
            score: "0",
            week: 5,
            type: "league",
            date: "2025-09-11",
            time: "21:00",
            venue: "Lapangan B",
            events: [
                // { type: "yellow", team: "away", player: "Marc G", minute: 62 },
            ],
        },
        {
            homeTeamId: "azul",
            awayTeamId: "cockburn",
            score: "0",
            week: 5,
            type: "league",
            date: "2025-09-11",
            time: "21:00",
            venue: "Lapangan C",
            events: [
                // { type: "yellow", team: "away", player: "Marc G", minute: 62 },
            ],
        },

        //week6
        {
            homeTeamId: "hibiki",
            awayTeamId: "cockburn",
            score: "0",
            week: 6,
            type: "league",
            date: "2025-09-18",
            time: "20:00",
            venue: "Lapangan B",
            events: [
                // { type: "goal", team: "home", player: "bruno", minute: 23 },
            ] as MatchEvent[],
        },
        {
            homeTeamId: "blacklabel",
            awayTeamId: "macallan",
            score: "0",
            week: 6,
            type: "league",
            date: "2025-09-18",
            time: "20:00",
            venue: "Lapangan C",
            events: [
                // { type: "yellow", team: "away", player: "Marc G", minute: 62 },
            ],
        },
        {
            homeTeamId: "singleton",
            awayTeamId: "azul",
            score: "0",
            week: 6,
            type: "league",
            date: "2025-09-18",
            time: "21:00",
            venue: "Lapangan B",
            events: [
                // { type: "yellow", team: "away", player: "Marc G", minute: 62 },
            ],
        },
        {
            homeTeamId: "glenfiddich",
            awayTeamId: "hennessy",
            score: "0",
            week: 6,
            type: "league",
            date: "2025-09-18",
            time: "21:00",
            venue: "Lapangan C",
            events: [
                // { type: "yellow", team: "away", player: "Marc G", minute: 62 },
            ],
        },

        //cup3
        {
            homeTeamId: "blacklabel",
            awayTeamId: "glenfiddich",
            score: "0",
            week: 3,
            type: "cup",
            date: "2025-09-25",
            time: "20:00",
            venue: "Lapangan B",
            events: [
                // { type: "goal", team: "home", player: "bruno", minute: 23 },
            ] as MatchEvent[],
        },
        {
            homeTeamId: "hibiki",
            awayTeamId: "azul",
            score: "0",
            week: 3,
            type: "cup",
            date: "2025-09-25",
            time: "20:00",
            venue: "Lapangan C",
            events: [
                // { type: "yellow", team: "away", player: "Marc G", minute: 62 },
            ],
        },
        {
            homeTeamId: "macallan",
            awayTeamId: "hennessy",
            score: "0",
            week: 3,
            type: "cup",
            date: "2025-09-25",
            time: "21:00",
            venue: "Lapangan B",
            events: [
                // { type: "yellow", team: "away", player: "Marc G", minute: 62 },
            ],
        },
        {
            homeTeamId: "singleton",
            awayTeamId: "cockburn",
            score: "0",
            week: 3,
            type: "cup",
            date: "2025-09-25",
            time: "21:00",
            venue: "Lapangan C",
            events: [
                // { type: "yellow", team: "away", player: "Marc G", minute: 62 },
            ],
        },

        //week7
        {
            homeTeamId: "azul",
            awayTeamId: "glenfiddich",
            score: "0",
            week: 7,
            type: "league",
            date: "2025-10-2",
            time: "20:00",
            venue: "Lapangan B",
            events: [
                // { type: "goal", team: "home", player: "bruno", minute: 23 },
            ] as MatchEvent[],
        },
        {
            homeTeamId: "singleton",
            awayTeamId: "cockburn",
            score: "0",
            week: 7,
            type: "league",
            date: "2025-10-2",
            time: "20:00",
            venue: "Lapangan C",
            events: [
                // { type: "yellow", team: "away", player: "Marc G", minute: 62 },
            ],
        },
        {
            homeTeamId: "macallan",
            awayTeamId: "hennessy",
            score: "0",
            week: 7,
            type: "league",
            date: "2025-10-2",
            time: "21:00",
            venue: "Lapangan B",
            events: [
                // { type: "yellow", team: "away", player: "Marc G", minute: 62 },
            ],
        },
        {
            homeTeamId: "blacklabel",
            awayTeamId: "hibiki",
            score: "0",
            week: 7,
            type: "league",
            date: "2025-10-2",
            time: "21:00",
            venue: "Lapangan C",
            events: [
                // { type: "yellow", team: "away", player: "Marc G", minute: 62 },
            ],
        },
    ]

type MatchEvent = {
    assist: string
    playerId: any
    type: "goal" | "assist" | "yellow" | "red"
    team: "home" | "away"
    player: string
    minute: number
}
