export type CompetitionType = "league" | "cup"
export type StageType = "group" | "playoff" | "semifinal" | "final"

export const matches: {
    homeTeamId: string
    awayTeamId: string
    score: string
    week: number
    date: string
    time: string
    venue: string
    events: MatchEvent[]
    competition: CompetitionType
    stage: StageType
}[] = [

        //week1
        {
            homeTeamId: "azul",
            awayTeamId: "blacklabel",
            score: "2 : 2",
            week: 1,
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
            competition: "league",
            stage: "group"
        },
        {
            homeTeamId: "hennessy",
            awayTeamId: "cockburn",
            score: "1 : 1",
            week: 1,
            
            date: "2025-07-31",
            time: "20:00",
            venue: "Lapangan C",
            events: [
                { type: "goal", team: "home", player: "wong (OG)", minute: 15 },
                { type: "yellow", team: "home", player: "yongsun", minute: 34 },
                { type: "goal", team: "away", player: "nino", minute: 30, assist: "kibuk" },
            ] as unknown as MatchEvent[],
            competition: "league",
            stage: "group"
        },
        {
            homeTeamId: "macallan",
            awayTeamId: "singleton",
            score: "3 : 2",
            week: 1,
            
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
            competition: "league",
            stage: "group"
        },
        {
            homeTeamId: "hibiki",
            awayTeamId: "glenfiddich",
            score: "1 : 2",
            week: 1,
            
            date: "2025-07-31",
            time: "21:00",
            venue: "Lapangan C",
            events: [
                { type: "goal", team: "home", player: "fauzi", minute: 44, assist: "riko" },
                { type: "goal", team: "away", player: "bayu", minute: 22, assist: "tony" },
                { type: "goal", team: "away", player: "bayu", minute: 47, assist: "tony" },
            ] as unknown as MatchEvent[],
            competition: "league",
            stage: "group"
        },

        //week2
        {
            homeTeamId: "macallan",
            awayTeamId: "cockburn",
            score: "1 : 3",
            week: 2,
            
            date: "2025-08-7",
            time: "20:00",
            venue: "Lapangan B",
            events: [
                { type: "goal", team: "away", player: "rabin", minute: 17 },
                { type: "goal", team: "away", player: "nino", minute: 43, assist: "doni" },
                { type: "goal", team: "away", player: "nino", minute: 45 },
                { type: "goal", team: "home", player: "chandri", minute: 35, assist: "raynaldo" },
                { type: "yellow", team: "home", player: "daniel", minute: 39 },
            ] as MatchEvent[],
            competition: "league",
            stage: "group"
        },
        {
            homeTeamId: "hibiki",
            awayTeamId: "azul",
            score: "5 : 2",
            week: 2,
            
            date: "2025-08-7",
            time: "20:00",
            venue: "Lapangan C",
            events: [
                { type: "goal", team: "away", player: "cibex", minute: 21, assist: "winsen" },
                { type: "goal", team: "away", player: "jono", minute: 35 },
                { type: "yellow", team: "away", player: "ricky", minute: 22 },
                { type: "goal", team: "home", player: "riko", minute: 5 },
                { type: "goal", team: "home", player: "ricky (OG)", minute: 12 },
                { type: "goal", team: "home", player: "ayang", minute: 15 },
                { type: "goal", team: "home", player: "manhoi", minute: 31, assist: "fauzi" },
                { type: "goal", team: "home", player: "fauzi", minute: 46 },
                { type: "yellow", team: "home", player: "fico", minute: 45 },
            ] as MatchEvent[],
            competition: "league",
            stage: "group"
        },
        {
            homeTeamId: "blacklabel",
            awayTeamId: "glenfiddich",
            score: "5 : 2",
            week: 2,
            
            date: "2025-08-7",
            time: "21:00",
            venue: "Lapangan B",
            events: [
                { type: "goal", team: "away", player: "bayu", minute: 6, assist: "akok" },
                { type: "goal", team: "away", player: "tony", minute: 44 },
                { type: "yellow", team: "away", player: "desmond", minute: 17 },
                { type: "goal", team: "home", player: "swan", minute: 5, assist: "ferry" },
                { type: "goal", team: "home", player: "titus", minute: 29, assist: "johanbutet" },
                { type: "goal", team: "home", player: "podiman", minute: 31 },
                { type: "goal", team: "home", player: "titus", minute: 35, assist: "podiman" },
                { type: "goal", team: "home", player: "podiman", minute: 44 },
                { type: "yellow", team: "home", player: "ferry", minute: 32 },
            ] as MatchEvent[],
            competition: "league",
            stage: "group"
        },
        {
            homeTeamId: "hennessy",
            awayTeamId: "singleton",
            score: "2 : 4",
            week: 2,
            
            date: "2025-08-7",
            time: "21:00",
            venue: "Lapangan C",
            events: [
                { type: "goal", team: "away", player: "acent", minute: 12, assist: "kelvin" },
                { type: "goal", team: "away", player: "wewek (OG)", minute: 14 },
                { type: "goal", team: "away", player: "auco", minute: 22, assist: "kelvin" },
                { type: "goal", team: "away", player: "auco", minute: 29, assist: "kelvin" },
                { type: "goal", team: "home", player: "awen", minute: 31 },
                { type: "goal", team: "home", player: "salja", minute: 44 },
            ] as MatchEvent[],
            competition: "league",
            stage: "group"
        },

        //cup1
        {
            homeTeamId: "blacklabel",
            awayTeamId: "hibiki",
            score: "0 : 1",
            week: 1,
            
            date: "2025-08-14",
            time: "20:00",
            venue: "Lapangan B",
            events: [
                { type: "goal", team: "away", player: "ayang", minute: 18, assist: "vj" },
                { type: "yellow", team: "away", player: "riko", minute: 46 },
                { type: "yellow", team: "away", player: "fico", minute: 44 },
                { type: "yellow", team: "home", player: "ferry", minute: 36 },
            ] as MatchEvent[],
            competition: "cup",
            stage: "group"
        },
        {
            homeTeamId: "glenfiddich",
            awayTeamId: "azul",
            score: "1 : 2",
            week: 1,
            
            date: "2025-08-14",
            time: "20:00",
            venue: "Lapangan C",
            events: [
                { type: "goal", team: "away", player: "winsen", minute: 4 },
                { type: "goal", team: "away", player: "winsen", minute: 33, assist: "fahrun" },
                { type: "yellow", team: "away", player: "jono", minute: 24 },
                { type: "goal", team: "home", player: "yanssen", minute: 17, assist: "tony" },
                { type: "yellow", team: "home", player: "desmond", minute: 16 },
            ] as MatchEvent[],
            competition: "cup",
            stage: "group"
        },
        {
            homeTeamId: "macallan",
            awayTeamId: "hennessy",
            score: "2 : 2",
            week: 1,
            
            date: "2025-08-14",
            time: "21:00",
            venue: "Lapangan B",
            events: [
                { type: "goal", team: "away", player: "wewek", minute: 4 },
                { type: "goal", team: "away", player: "awai", minute: 20 },
                { type: "goal", team: "home", player: "chandri", minute: 24, assist: "raynaldo" },
                { type: "goal", team: "home", player: "henry", minute: 36, assist: "daniel" },
                { type: "yellow", team: "home", player: "arifin", minute: 32 },
            ] as MatchEvent[],
            competition: "cup",
            stage: "group"
        },
        {
            homeTeamId: "singleton",
            awayTeamId: "cockburn",
            score: "5 : 2",
            week: 1,
            
            date: "2025-08-14",
            time: "21:00",
            venue: "Lapangan C",
            events: [
                { type: "goal", team: "away", player: "doni", minute: 9 },
                { type: "goal", team: "away", player: "nino", minute: 17, assist: "james" },
                { type: "goal", team: "home", player: "rbonn", minute: 19 },
                { type: "goal", team: "home", player: "acent", minute: 27, assist: "mitra" },
                { type: "goal", team: "home", player: "auco", minute: 34, assist: "kelvin" },
                { type: "goal", team: "home", player: "vincent (OG)", minute: 44 },
                { type: "goal", team: "home", player: "mitra", minute: 48, assist: "auco" },
            ] as MatchEvent[],
            competition: "cup",
            stage: "group"
        },

        //week3
        {
            homeTeamId: "singleton",
            awayTeamId: "hibiki",
            score: "3 : 5",
            week: 3,
            
            date: "2025-08-21",
            time: "20:00",
            venue: "Lapangan B",
            events: [
                { type: "goal", team: "away", player: "fauzi", minute: 15 },
                { type: "goal", team: "away", player: "fauzi", minute: 18 },
                { type: "goal", team: "away", player: "fico", minute: 25, assist: "riko" },
                { type: "goal", team: "away", player: "fauzi", minute: 34, assist: "manhoi" },
                { type: "goal", team: "away", player: "manhoi", minute: 48 },
                { type: "yellow", team: "away", player: "delvin", minute: 15 },

                { type: "goal", team: "home", player: "kelvin", minute: 11 },
                { type: "goal", team: "home", player: "acent", minute: 12, assist: "mitra" },
                { type: "goal", team: "home", player: "auco", minute: 15 },
            ] as MatchEvent[],
            competition: "league",
            stage: "group"
        },
        {
            homeTeamId: "cockburn",
            awayTeamId: "blacklabel",
            score: "2 : 3",
            week: 3,
            
            date: "2025-08-21",
            time: "20:00",
            venue: "Lapangan C",
            events: [
                { type: "goal", team: "away", player: "swan", minute: 22, assist: "bobby" },
                { type: "goal", team: "away", player: "own goal", minute: 23, assist: "bobby" },
                { type: "goal", team: "away", player: "titus", minute: 39, assist: "swan" },

                { type: "goal", team: "home", player: "nino", minute: 10 },
                { type: "goal", team: "home", player: "nino", minute: 20, assist: "edward" },
                { type: "yellow", team: "home", player: "nino", minute: 25 },
            ] as MatchEvent[],
            competition: "league",
            stage: "group"
        },
        {
            homeTeamId: "azul",
            awayTeamId: "hennessy",
            score: "1 : 1",
            week: 3,
            
            date: "2025-08-21",
            time: "21:00",
            venue: "Lapangan B",
            events: [
                { type: "goal", team: "away", player: "awen", minute: 35 },
                { type: "goal", team: "home", player: "yongky", minute: 25, assist: "ali" },
            ] as MatchEvent[],
            competition: "league",
            stage: "group"
        },
        {
            homeTeamId: "glenfiddich",
            awayTeamId: "macallan",
            score: "1 : 3",
            week: 3,
            
            date: "2025-08-21",
            time: "21:00",
            venue: "Lapangan C",
            events: [
                { type: "goal", team: "away", player: "henry", minute: 35, assist: "raynaldo" },
                { type: "goal", team: "away", player: "herwin", minute: 25 },
                { type: "goal", team: "away", player: "herwin", minute: 29, assist: "budju" },

                { type: "goal", team: "home", player: "desmond", minute: 34, assist: "gil" },
            ] as MatchEvent[],
            competition: "league",
            stage: "group"
        },

        //week4
        {
            homeTeamId: "azul",
            awayTeamId: "macallan",
            score: "1 : 1",
            week: 4,
            
            date: "2025-08-28",
            time: "20:00",
            venue: "Lapangan B",
            events: [
                { type: "goal", team: "away", player: "budju", minute: 22 },
                { type: "goal", team: "home", player: "jono", minute: 2, assist: "dicky" },
                { type: "yellow", team: "home", player: "johanlim", minute: 37 },
            ] as MatchEvent[],
            competition: "league",
            stage: "group"
        },
        {
            homeTeamId: "hibiki",
            awayTeamId: "hennessy",
            score: "1 : 0",
            week: 4,
            
            date: "2025-08-28",
            time: "20:00",
            venue: "Lapangan C",
            events: [
                { type: "goal", team: "home", player: "davis", minute: 34 },
            ] as MatchEvent[],
            competition: "league",
            stage: "group"
        },
        {
            homeTeamId: "glenfiddich",
            awayTeamId: "cockburn",
            score: "1 : 2",
            week: 4,
            
            date: "2025-08-28",
            time: "21:00",
            venue: "Lapangan B",
            events: [
                { type: "goal", team: "away", player: "own goal", minute: 18 },
                { type: "goal", team: "away", player: "wong", minute: 44, assist: "bram" },
                { type: "goal", team: "home", player: "desmond", minute: 26, assist: "tony" },
                { type: "red", team: "home", player: "ryuzi", minute: 46 }
            ] as MatchEvent[],
            competition: "league",
            stage: "group"
        },
        {
            homeTeamId: "blacklabel",
            awayTeamId: "singleton",
            score: "1 : 2",
            week: 4,
            
            date: "2025-08-28",
            time: "21:00",
            venue: "Lapangan C",
            events: [
                { type: "goal", team: "away", player: "deni", minute: 34 },
                { type: "goal", team: "away", player: "acai", minute: 46, assist: "dimas" },

                { type: "goal", team: "home", player: "titus", minute: 48, assist: "zhongyen" },
                { type: "yellow", team: "away", player: "aliang", minute: 30 },
            ] as MatchEvent[],
            competition: "league",
            stage: "group"
        },

        //cup2
        {
            homeTeamId: "blacklabel",
            awayTeamId: "azul",
            score: "4 : 0",
            week: 2,
            
            date: "2025-09-4",
            time: "20:00",
            venue: "Lapangan B",
            events: [
                { type: "goal", team: "home", player: "effendi", minute: 6, assist: "podiman" },
                { type: "goal", team: "home", player: "bobby", minute: 36 },
                { type: "goal", team: "home", player: "swan", minute: 39 },
                { type: "goal", team: "home", player: "titus", minute: 42, assist: "bobby" },
            ] as MatchEvent[],
            competition: "cup",
            stage: "group"
        },
        {
            homeTeamId: "glenfiddich",
            awayTeamId: "hibiki",
            score: "0 : 4",
            week: 2,
            
            date: "2025-09-4",
            time: "20:00",
            venue: "Lapangan C",
            events: [
                { type: "goal", team: "away", player: "fauzi", minute: 9, assist: "ayang" },
                { type: "goal", team: "away", player: "fauzi", minute: 19 },
                { type: "goal", team: "away", player: "manhoi", minute: 39, assist: "fauzi" },
                { type: "goal", team: "away", player: "fauzi", minute: 46, assist: "ayang" },
            ] as MatchEvent[],
            competition: "cup",
            stage: "group"
        },
        {
            homeTeamId: "macallan",
            awayTeamId: "singleton",
            score: "2 : 0",
            week: 2,
            
            date: "2025-09-4",
            time: "21:00",
            venue: "Lapangan B",
            events: [
                { type: "goal", team: "home", player: "raynaldo", minute: 22 },
                { type: "goal", team: "home", player: "daniel", minute: 42 },
            ] as MatchEvent[],
            competition: "cup",
            stage: "group"
        },
        {
            homeTeamId: "hennessy",
            awayTeamId: "cockburn",
            score: "1 : 1",
            week: 2,
            
            date: "2025-09-4",
            time: "21:00",
            venue: "Lapangan C",
            events: [
                { type: "goal", team: "home", player: "awen", minute: 29, assist: "awai" },
                { type: "goal", team: "away", player: "james", minute: 36, assist: "wong" },
            ] as MatchEvent[],
            competition: "cup",
            stage: "group"
        },

        //week5
        {
            homeTeamId: "blacklabel",
            awayTeamId: "hennessy",
            score: "4 : 1",
            week: 5,
            
            date: "2025-09-11",
            time: "20:00",
            venue: "Lapangan B",
            events: [
                { type: "goal", team: "home", player: "jongan", minute: 4, assist: "podiman" },
                { type: "goal", team: "home", player: "zhongyen", minute: 34, assist: "titus" },
                { type: "goal", team: "home", player: "titus", minute: 36, assist: "zhongyen" },
                { type: "goal", team: "home", player: "podiman", minute: 40 },
                { type: "red", team: "home", player: "ferry", minute: 44 },

                { type: "goal", team: "away", player: "awen", minute: 10 },
            ] as MatchEvent[],
            competition: "league",
            stage: "group"
        },
        {
            homeTeamId: "singleton",
            awayTeamId: "glenfiddich",
            score: "5 : 4",
            week: 5,
            
            date: "2025-09-11",
            time: "20:00",
            venue: "Lapangan C",
            events: [
                { type: "goal", team: "home", player: "acent", minute: 5, assist: "kelvin" },
                { type: "goal", team: "home", player: "acent", minute: 6, assist: "kelvin" },
                { type: "goal", team: "home", player: "rbonn", minute: 23, assist: "acai" },
                { type: "goal", team: "home", player: "rbonn", minute: 26, assist: "acai" },
                { type: "goal", team: "home", player: "rbonn", minute: 33, assist: "acai" },

                { type: "goal", team: "away", player: "bayu", minute: 23, assist: "desmond" },
                { type: "goal", team: "away", player: "bayu", minute: 32, assist: "tony" },
                { type: "goal", team: "away", player: "bayu", minute: 45, assist: "tony" },
                { type: "goal", team: "away", player: "own goal", minute: 34 },
            ] as MatchEvent[],
            competition: "league",
            stage: "group"
        },
        {
            homeTeamId: "hibiki",
            awayTeamId: "macallan",
            score: "1 : 3",
            week: 5,
            
            date: "2025-09-11",
            time: "21:00",
            venue: "Lapangan B",
            events: [
                { type: "goal", team: "home", player: "ayang", minute: 30 },
                { type: "goal", team: "away", player: "daniel", minute: 22 },
                { type: "goal", team: "away", player: "raynaldo", minute: 34 },
                { type: "goal", team: "away", player: "raynaldo", minute: 38 },
            ] as MatchEvent[],
            competition: "league",
            stage: "group"
        },
        {
            homeTeamId: "azul",
            awayTeamId: "cockburn",
            score: "1 : 2",
            week: 5,
            
            date: "2025-09-11",
            time: "21:00",
            venue: "Lapangan C",
            events: [
                { type: "goal", team: "home", player: "winsen", minute: 26, assist: "yongky" },
                { type: "yellow", team: "home", player: "dicky", minute: 32 },

                { type: "goal", team: "away", player: "bram", minute: 32, assist: "nino" },
                { type: "goal", team: "away", player: "wong", minute: 42, assist: "bram" },
            ] as MatchEvent[],
            competition: "league",
            stage: "group"
        },

        //week6
        {
            homeTeamId: "hibiki",
            awayTeamId: "cockburn",
            score: "2 : 2",
            week: 6,
            
            date: "2025-09-18",
            time: "20:00",
            venue: "Lapangan B",
            events: [
                { type: "goal", team: "home", player: "fauzi", minute: 48 },
                { type: "goal", team: "home", player: "manhoi", minute: 34 },

                { type: "red", team: "home", player: "stevie", minute: 42 },

                { type: "goal", team: "away", player: "own goal", minute: 9 },
                { type: "goal", team: "away", player: "doni", minute: 21, assist: "nino" },
                { type: "yellow", team: "away", player: "wong", minute: 42 },
                { type: "yellow", team: "away", player: "nino", minute: 40 },
            ] as MatchEvent[],
            competition: "league",
            stage: "group"
        },
        {
            homeTeamId: "blacklabel",
            awayTeamId: "macallan",
            score: "2 : 1",
            week: 6,
            
            date: "2025-09-18",
            time: "20:00",
            venue: "Lapangan C",
            events: [
                { type: "goal", team: "home", player: "effendi", minute: 6, assist: "podiman" },
                { type: "goal", team: "home", player: "willy", minute: 20 },

                { type: "goal", team: "away", player: "henry", minute: 18 },
                { type: "yellow", team: "away", player: "budju", minute: 38 },
            ] as MatchEvent[],
            competition: "league",
            stage: "group"
        },
        {
            homeTeamId: "singleton",
            awayTeamId: "azul",
            score: "3 : 3",
            week: 6,
            
            date: "2025-09-18",
            time: "21:00",
            venue: "Lapangan B",
            events: [
                { type: "goal", team: "away", player: "jono", minute: 26, assist: "winsen" },
                { type: "goal", team: "away", player: "cibex", minute: 27, assist: "winsen" },
                { type: "goal", team: "away", player: "cibex", minute: 38, assist: "winsen" },

                { type: "goal", team: "home", player: "rbonn", minute: 5, assist: "dimas" },
                { type: "goal", team: "home", player: "acent", minute: 7 },
                { type: "goal", team: "home", player: "own goal", minute: 30 },
            ] as MatchEvent[],
            competition: "league",
            stage: "group"
        },
        {
            homeTeamId: "glenfiddich",
            awayTeamId: "hennessy",
            score: "1 : 1",
            week: 6,
            
            date: "2025-09-18",
            time: "21:00",
            venue: "Lapangan C",
            events: [
                { type: "goal", team: "away", player: "own goal", minute: 26 },
                { type: "goal", team: "home", player: "tony", minute: 47, assist: "desmond" },
            ] as MatchEvent[],
            competition: "league",
            stage: "group"
        },

        //cup3
        {
            homeTeamId: "blacklabel",
            awayTeamId: "glenfiddich",
            score: "2 : 5",
            week: 3,
            
            date: "2025-09-25",
            time: "20:00",
            venue: "Lapangan B",
            events: [
                { type: "goal", team: "home", player: "titus", minute: 15 },
                { type: "goal", team: "home", player: "swan", minute: 38 },

                { type: "goal", team: "away", player: "ryuzi", minute: 10 },
                { type: "goal", team: "away", player: "tony", minute: 26 },
                { type: "goal", team: "away", player: "bayu", minute: 36 },
                { type: "goal", team: "away", player: "desmond", minute: 44 },
                { type: "goal", team: "away", player: "ryuzi", minute: 47 },

                { type: "yellow", team: "away", player: "tony", minute: 45 },
            ] as MatchEvent[],
            competition: "cup",
            stage: "group"
        },
        {
            homeTeamId: "hibiki",
            awayTeamId: "azul",
            score: "3 : 4",
            week: 3,
            
            date: "2025-09-25",
            time: "20:00",
            venue: "Lapangan C",
            events: [
                { type: "goal", team: "home", player: "manhoi", minute: 7 },
                { type: "goal", team: "home", player: "fico", minute: 36 },
                { type: "goal", team: "home", player: "fico", minute: 38 },

                { type: "yellow", team: "home", player: "fico", minute: 30 },

                { type: "goal", team: "away", player: "jono", minute: 27 },
                { type: "goal", team: "away", player: "winsen", minute: 36 },
                { type: "goal", team: "away", player: "johanlim", minute: 44 },
                { type: "goal", team: "away", player: "johanlim", minute: 47 },
                { type: "yellow", team: "away", player: "ricky", minute: 44 },
            ] as MatchEvent[],
            competition: "cup",
            stage: "group"
        },
        {
            homeTeamId: "macallan",
            awayTeamId: "cockburn",
            score: "3 : 3",
            week: 3,
            
            date: "2025-09-25",
            time: "21:00",
            venue: "Lapangan B",
            events: [
                { type: "goal", team: "home", player: "budju", minute: 19 },
                { type: "goal", team: "home", player: "budju", minute: 42 },
                { type: "goal", team: "home", player: "raynaldo", minute: 47 },

                { type: "goal", team: "away", player: "rabin", minute: 9 },
                { type: "goal", team: "away", player: "doni", minute: 35 },
                { type: "goal", team: "away", player: "nino", minute: 38 },

                { type: "yellow", team: "away", player: "james", minute: 10 },
            ] as MatchEvent[],
            competition: "cup",
            stage: "group"
        },
        {
            homeTeamId: "singleton",
            awayTeamId: "hennessy",
            score: "7 : 2",
            week: 3,
            
            date: "2025-09-25",
            time: "21:00",
            venue: "Lapangan C",
            events: [
                { type: "goal", team: "home", player: "acent", minute: 11 },
                { type: "goal", team: "home", player: "acent", minute: 12 },
                { type: "goal", team: "home", player: "mitra", minute: 12 },
                { type: "goal", team: "home", player: "rbonn", minute: 25 },
                { type: "goal", team: "home", player: "rbonn", minute: 30 },
                { type: "goal", team: "home", player: "rbonn", minute: 36 },
                { type: "goal", team: "home", player: "auco", minute: 45 },

                { type: "goal", team: "away", player: "william", minute: 8 },
                { type: "goal", team: "away", player: "wewek", minute: 9 },
            ] as MatchEvent[],
            competition: "cup",
            stage: "group"
        },

        //week7
        {
            homeTeamId: "blacklabel",
            awayTeamId: "hibiki",
            score: "2 : 1",
            week: 7,
            
            date: "2025-10-2",
            time: "20:00",
            venue: "Lapangan B",
            events: [
                { type: "goal", team: "home", player: "aliang", minute: 10, assist: "podiman" },
                { type: "goal", team: "home", player: "podiman", minute: 17 },

                { type: "goal", team: "away", player: "riko", minute: 31 },
                { type: "yellow", team: "away", player: "delvin", minute: 21 },
                { type: "yellow", team: "away", player: "fico", minute: 36 },
            ] as MatchEvent[],
            competition: "league",
            stage: "group"
        },
        {
            homeTeamId: "singleton",
            awayTeamId: "cockburn",
            score: "2 : 3",
            week: 7,
            
            date: "2025-10-2",
            time: "20:00",
            venue: "Lapangan C",
            events: [
                { type: "goal", team: "home", player: "rabin", minute: 11, assist: "kibuk" },
                { type: "goal", team: "home", player: "wong", minute: 32 },
                { type: "goal", team: "home", player: "nino", minute: 46 },

                { type: "goal", team: "away", player: "kelvin", minute: 5, assist: "acent" },
                { type: "goal", team: "away", player: "acent", minute: 29 },
            ] as MatchEvent[],
            competition: "league",
            stage: "group"
        },
        {
            homeTeamId: "macallan",
            awayTeamId: "hennessy",
            score: "4 : 1",
            week: 7,
            
            date: "2025-10-2",
            time: "21:00",
            venue: "Lapangan B",
            events: [
                { type: "goal", team: "home", player: "raynaldo", minute: 5 },
                { type: "goal", team: "home", player: "daniel", minute: 19 },
                { type: "goal", team: "home", player: "awok", minute: 23 },
                { type: "goal", team: "home", player: "awok", minute: 27, assist: "raynaldo" },

                { type: "goal", team: "away", player: "laudek", minute: 33 },
                { type: "yellow", team: "away", player: "laudek", minute: 17 },
            ] as MatchEvent[],
            competition: "league",
            stage: "group"
        },
        {
            homeTeamId: "azul",
            awayTeamId: "glenfiddich",
            score: "0 : 0",
            week: 7,
            
            date: "2025-10-2",
            time: "21:00",
            venue: "Lapangan C",
            events: [
                // { type: "goal", team: "home", player: "bruno", minute: 23 },
            ] as MatchEvent[],
            competition: "league",
            stage: "group"
        },

        //playoff
        {
            homeTeamId: "hibiki",
            awayTeamId: "glenfiddich",
            score: "0",
            week: 8,
            
            date: "2025-10-9",
            time: "20:00",
            venue: "Lapangan B",
            events: [
                // { type: "goal", team: "home", player: "aliang", minute: 10, assist: "podiman" },
                // { type: "goal", team: "home", player: "podiman", minute: 17 },
                // { type: "goal", team: "away", player: "riko", minute: 31 },
                // { type: "yellow", team: "away", player: "delvin", minute: 21 },
                // { type: "yellow", team: "away", player: "fico", minute: 36 },
            ] as MatchEvent[],
            competition: "league",
            stage: "playoff"
        },
        {
            homeTeamId: "azul",
            awayTeamId: "singleton",
            score: "0",
            week: 8,
            
            date: "2025-10-9",
            time: "20:00",
            venue: "Lapangan C",
            events: [
                // { type: "goal", team: "home", player: "rabin", minute: 11, assist: "kibuk" },
                // { type: "goal", team: "home", player: "wong", minute: 32 },
                // { type: "goal", team: "home", player: "nino", minute: 46 },
                // { type: "goal", team: "away", player: "kelvin", minute: 5, assist: "acent" },
                // { type: "goal", team: "away", player: "acent", minute: 29 },
            ] as MatchEvent[],
            competition: "league",
            stage: "playoff"
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