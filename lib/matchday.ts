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
            homeTeamId: "naruto",
            awayTeamId: "pokemon",
            score: "4 : 0",
            week: 1,
            date: "2025-12-11",
            time: "20:00",
            venue: "Lapangan B",
            events: [
                { type: "goal", team: "home", player: "Suryadi", minute: 19},
                { type: "goal", team: "home", player: "Titus", minute: 34},
                { type: "goal", team: "home", player: "Lewis", minute: 40, assist: "Titus" },
                { type: "goal", team: "home", player: "Doni", minute: 43, assist: "Titus" },
            ] as unknown as MatchEvent[],
            competition: "league",
            stage: "group"
        },
        {
            homeTeamId: "digimon",
            awayTeamId: "doraemon",
            score: "3 : 1",
            week: 1,
            
            date: "2025-12-11",
            time: "20:00",
            venue: "Lapangan C",
            events: [
                { type: "goal", team: "home", player: "Ringgo", minute: 2 },
                { type: "goal", team: "home", player: "Ringgo", minute: 22, assist: "Acai" },
                { type: "goal", team: "home", player: "Tony", minute: 24, assist: "Acai" },
                { type: "yellow", team: "home", player: "Nickson", minute: 31},
                { type: "yellow", team: "home", player: "Riko", minute: 40},

                { type: "goal", team: "away", player: "Rbonn", minute: 10, assist: "Desmond"},


            ] as unknown as MatchEvent[],
            competition: "league",
            stage: "group"
        },
        {
            homeTeamId: "conan",
            awayTeamId: "dragonball",
            score: "5 : 4",
            week: 1,
            
            date: "2025-12-11",
            time: "21:00",
            venue: "Lapangan B",
            events: [
                { type: "goal", team: "home", player: "Jono", minute: 18, assist: "Mitra" },
                { type: "goal", team: "home", player: "Effendy", minute: 27 },
                { type: "goal", team: "home", player: "Mitra", minute: 30},
                { type: "goal", team: "home", player: "Acunk", minute: 36, assist: "Jono" },
                { type: "goal", team: "home", player: "Jono", minute: 42},
                { type: "yellow", team: "home", player: "Mitra", minute: 42},

                { type: "goal", team: "away", player: "Reno", minute: 10},
                { type: "goal", team: "away", player: "Aguan", minute: 13, assist: "78" },
                { type: "goal", team: "away", player: "Hendrik", minute: 24},
                { type: "goal", team: "away", player: "Ryuzi", minute: 29},
            ] as unknown as MatchEvent[],
            competition: "league",
            stage: "group"
        },
        {
            homeTeamId: "onepiece",
            awayTeamId: "sinchan",
            score: "3 : 6",
            week: 1,
            
            date: "2025-12-11",
            time: "21:00",
            venue: "Lapangan C",
            events: [
                { type: "goal", team: "home", player: "Bobby", minute: 26},
                { type: "goal", team: "home", player: "Effendy Olif", minute: 32, assist: "Acent"},
                { type: "goal", team: "home", player: "Bram", minute: 38},
                { type: "red", team: "home", player: "Sinaga", minute: 46},
                { type: "yellow", team: "home", player: "Bobby", minute: 46},
                
                { type: "goal", team: "away", player: "Tanado", minute: 12, assist: "Wong" },
                { type: "goal", team: "away", player: "Raynaldo", minute: 17, assist: "Ayang" },
                { type: "goal", team: "away", player: "Gabriel", minute: 18},
                { type: "goal", team: "away", player: "Raynaldo", minute: 21, assist: "Wong" },
                { type: "goal", team: "away", player: "Awen", minute: 23, assist: "Ayang" },
                { type: "goal", team: "away", player: "Tanado", minute: 34, assist: "Zhong Yen" },
                { type: "yellow", team: "away", player: "Awen", minute: 26},
                { type: "yellow", team: "away", player: "Raynaldo", minute: 42},
                { type: "red", team: "away", player: "Daniel", minute: 46},
            ] as unknown as MatchEvent[],
            competition: "league",
            stage: "group"
        },

        //week2
        {
            homeTeamId: "conan",
            awayTeamId: "doraemon",
            score: "2 : 2",
            week: 2,
            date: "2025-12-18",
            time: "20:00",
            venue: "Lapangan B",
            events: [
                { type: "goal", team: "home", player: "Jono", minute: 10, assist: "Effendy" },
                { type: "goal", team: "home", player: "Effendy", minute: 23, assist: "Jono" },

                { type: "goal", team: "away", player: "Fauzi", minute: 16 },
                { type: "goal", team: "away", player: "Rbonn", minute: 38, assist: "desmond" },

                { type: "yellow", team: "away", player: "Rbonn", minute: 33},
                { type: "yellow", team: "away", player: "Herwin", minute: 20},
            ] as MatchEvent[],
            competition: "league",
            stage: "group"
        },
        {
            homeTeamId: "onepiece",
            awayTeamId: "naruto",
            score: "2 : 3",
            week: 2,
            
            date: "2025-12-18",
            time: "20:00",
            venue: "Lapangan C",
            events: [
                { type: "goal", team: "home", player: "Bobby", minute: 20, assist: "Cibex" },
                { type: "goal", team: "home", player: "Bobby", minute: 25, assist: "Cibex" },

                { type: "yellow", team: "home", player: "Effendy Olif", minute: 36 },

                { type: "goal", team: "away", player: "Titus", minute: 17 },
                { type: "goal", team: "away", player: "Fico", minute: 23, assist: "Titus" },
                { type: "goal", team: "away", player: "Fico", minute: 47, assist: "Titus" },

                { type: "yellow", team: "away", player: "Yongsun", minute: 5 },
                { type: "yellow", team: "away", player: "Suryadi", minute: 44 },
                { type: "yellow", team: "away", player: "Lim", minute: 42 },
                
            ] as MatchEvent[],
            competition: "league",
            stage: "group"
        },
        {
            homeTeamId: "pokemon",
            awayTeamId: "sinchan",
            score: "1 : 5",
            week: 2,
            
            date: "2025-12-18",
            time: "21:00",
            venue: "Lapangan B",
            events: [
                { type: "goal", team: "home", player: "OG", minute: 30},

                { type: "goal", team: "away", player: "Ayang", minute: 15, assist: "Tanado" },
                { type: "goal", team: "away", player: "Will", minute: 27, assist: "Awen" },
                { type: "goal", team: "away", player: "Ayang", minute: 37, assist: "Zhong Yen" },
                { type: "goal", team: "away", player: "Zhong Yen", minute: 43},
                { type: "goal", team: "away", player: "Tanado", minute: 44},
            ] as MatchEvent[],
            competition: "league",
            stage: "group"
        },
        {
            homeTeamId: "dragonball",
            awayTeamId: "digimon",
            score: "5 : 1",
            week: 2,
            
            date: "2025-12-18",
            time: "21:00",
            venue: "Lapangan C",
            events: [
                { type: "goal", team: "home", player: "Hendrik", minute: 2},
                { type: "goal", team: "home", player: "Hendrik", minute: 7, assist: "Aguan"},
                { type: "goal", team: "home", player: "Hendrik", minute: 9, assist: "Swan"},
                { type: "goal", team: "home", player: "Hendrik", minute: 14},
                { type: "goal", team: "home", player: "Hendrik", minute: 19},

                { type: "goal", team: "away", player: "Tony", minute: 37, assist: "Riko" },

                { type: "yellow", team: "away", player: "Riko", minute: 29},
                { type: "yellow", team: "away", player: "Acai", minute: 35},
                { type: "yellow", team: "away", player: "Tony", minute: 46},
            ] as MatchEvent[],
            competition: "league",
            stage: "group"
        },

        //cup1
        {
            homeTeamId: "pokemon",
            awayTeamId: "onepiece",
            score: "8 : 3",
            week: 1,
            
            date: "2026-01-8",
            time: "20:00",
            venue: "Lapangan B",
            events: [
                { type: "goal", team: "home", player: "Cibex", minute: 7, assist: "Podiman"},
                { type: "goal", team: "home", player: "Bram", minute: 16},
                { type: "goal", team: "home", player: "Bram", minute: 18},
                { type: "goal", team: "home", player: "Cibex", minute: 23},
                { type: "goal", team: "home", player: "Cibex", minute: 33, assist: "Podiman"},
                { type: "goal", team: "home", player: "Cibex", minute: 37},
                { type: "goal", team: "home", player: "Bram", minute: 38},
                { type: "goal", team: "home", player: "Podiman", minute: 39},

                { type: "goal", team: "away", player: "Aju", minute: 8, assist: "Awai" },
                { type: "goal", team: "away", player: "Awai", minute: 21, assist: "Cieks" },
                { type: "goal", team: "away", player: "Awai", minute: 42, assist: "Cieks" },
            ] as MatchEvent[],
            competition: "cup",
            stage: "group"
        },
        {
            homeTeamId: "naruto",
            awayTeamId: "sinchan",
            score: "0 : 2",
            week: 1,
            
            date: "2026-01-8",
            time: "20:00",
            venue: "Lapangan C",
            events: [
                { type: "goal", team: "away", player: "Tanado", minute: 44 },
                { type: "goal", team: "away", player: "Raynaldo", minute: 46, assist: "Tanado" },
                { type: "yellow", team: "away", player: "Ayang", minute: 34},
            ] as MatchEvent[],
            competition: "cup",
            stage: "group"
        },
        {
            homeTeamId: "conan",
            awayTeamId: "digimon",
            score: "3 : 4",
            week: 1,
            
            date: "2026-01-8",
            time: "21:00",
            venue: "Lapangan B",
            events: [
                { type: "goal", team: "home", player: "Jono", minute: 23, assist: "Mitra"},
                { type: "goal", team: "home", player: "Effendy", minute: 26, assist: "Mitra"},
                { type: "goal", team: "home", player: "Jono", minute: 18, assist: "Mitra"},

                { type: "goal", team: "away", player: "Aho", minute: 8, assist: "Tony" },
                { type: "goal", team: "away", player: "Tony", minute: 19},
                { type: "goal", team: "away", player: "Tony", minute: 30},
                { type: "goal", team: "away", player: "Aho", minute: 39},
            ] as MatchEvent[],
            competition: "cup",
            stage: "group"
        },
        {
            homeTeamId: "dragonball",
            awayTeamId: "doraemon",
            score: "4 : 3",
            week: 1,
            
            date: "2026-01-8",
            time: "21:00",
            venue: "Lapangan C",
            events: [
                { type: "goal", team: "home", player: "Aguan", minute: 8, assist: "Ryuzi"},
                { type: "goal", team: "home", player: "Henry", minute: 9},
                { type: "goal", team: "home", player: "Hendrik", minute: 18, assist: "Aguan"},
                { type: "goal", team: "home", player: "Reno", minute: 26, assist: "Hendrik"},

                { type: "yellow", team: "home", player: "Aguan", minute: 40},

                { type: "goal", team: "away", player: "Fauzi", minute: 6},
                { type: "goal", team: "away", player: "Rbonn", minute: 36, assist: "Desmond" },
                { type: "goal", team: "away", player: "Rbonn", minute: 46, assist: "Desmond" },
            ] as MatchEvent[],
            competition: "cup",
            stage: "group"
        },

        //week3
        {
            homeTeamId: "dragonball",
            awayTeamId: "onepiece",
            score: "0",
            week: 3,
            
            date: "2026-01-15",
            time: "20:00",
            venue: "Lapangan B",
            events: [
                // { type: "goal", team: "away", player: "fauzi", minute: 15 },
                // { type: "goal", team: "away", player: "fauzi", minute: 18 },
                // { type: "goal", team: "away", player: "fico", minute: 25, assist: "riko" },
                // { type: "goal", team: "away", player: "fauzi", minute: 34, assist: "manhoi" },
                // { type: "goal", team: "away", player: "manhoi", minute: 48 },
                // { type: "yellow", team: "away", player: "delvin", minute: 15 },

                // { type: "goal", team: "home", player: "kelvin", minute: 11 },
                // { type: "goal", team: "home", player: "acent", minute: 12, assist: "mitra" },
                // { type: "goal", team: "home", player: "auco", minute: 15 },
            ] as MatchEvent[],
            competition: "league",
            stage: "group"
        },
        {
            homeTeamId: "doraemon",
            awayTeamId: "pokemon",
            score: "0",
            week: 3,
            
            date: "2026-01-15",
            time: "20:00",
            venue: "Lapangan C",
            events: [
                // { type: "goal", team: "away", player: "swan", minute: 22, assist: "bobby" },
                // { type: "goal", team: "away", player: "own goal", minute: 23, assist: "bobby" },
                // { type: "goal", team: "away", player: "titus", minute: 39, assist: "swan" },

                // { type: "goal", team: "home", player: "nino", minute: 10 },
                // { type: "goal", team: "home", player: "nino", minute: 20, assist: "edward" },
                // { type: "yellow", team: "home", player: "nino", minute: 25 },
            ] as MatchEvent[],
            competition: "league",
            stage: "group"
        },
        {
            homeTeamId: "naruto",
            awayTeamId: "digimon",
            score: "0",
            week: 3,
            
            date: "2026-01-15",
            time: "21:00",
            venue: "Lapangan B",
            events: [
                // { type: "goal", team: "away", player: "awen", minute: 35 },
                // { type: "goal", team: "home", player: "yongky", minute: 25, assist: "ali" },
            ] as MatchEvent[],
            competition: "league",
            stage: "group"
        },
        {
            homeTeamId: "sinchan",
            awayTeamId: "conan",
            score: "0",
            week: 3,
            
            date: "2026-01-15",
            time: "21:00",
            venue: "Lapangan C",
            events: [
                // { type: "goal", team: "away", player: "henry", minute: 35, assist: "raynaldo" },
                // { type: "goal", team: "away", player: "herwin", minute: 25 },
                // { type: "goal", team: "away", player: "herwin", minute: 29, assist: "budju" },

                // { type: "goal", team: "home", player: "desmond", minute: 34, assist: "gil" },
            ] as MatchEvent[],
            competition: "league",
            stage: "group"
        },

        //week4
        {
            homeTeamId: "naruto",
            awayTeamId: "conan",
            score: "0",
            week: 4,
            
            date: "2026-01-22",
            time: "20:00",
            venue: "Lapangan B",
            events: [
                // { type: "goal", team: "away", player: "budju", minute: 22 },
                // { type: "goal", team: "home", player: "jono", minute: 2, assist: "dicky" },
                // { type: "yellow", team: "home", player: "johanlim", minute: 37 },
            ] as MatchEvent[],
            competition: "league",
            stage: "group"
        },
        {
            homeTeamId: "onepiece",
            awayTeamId: "digimon",
            score: "0",
            week: 4,
            
            date: "2026-01-22",
            time: "20:00",
            venue: "Lapangan C",
            events: [
                // { type: "goal", team: "home", player: "davis", minute: 34 },
            ] as MatchEvent[],
            competition: "league",
            stage: "group"
        },
        {
            homeTeamId: "doraemon",
            awayTeamId: "sinchan",
            score: "0",
            week: 4,
            
            date: "2026-01-22",
            time: "21:00",
            venue: "Lapangan B",
            events: [
                // { type: "goal", team: "away", player: "own goal", minute: 18 },
                // { type: "goal", team: "away", player: "wong", minute: 44, assist: "bram" },
                // { type: "goal", team: "home", player: "desmond", minute: 26, assist: "tony" },
                // { type: "red", team: "home", player: "ryuzi", minute: 46 }
            ] as MatchEvent[],
            competition: "league",
            stage: "group"
        },
        {
            homeTeamId: "pokemon",
            awayTeamId: "dragonball",
            score: "0",
            week: 4,
            
            date: "2026-01-22",
            time: "21:00",
            venue: "Lapangan C",
            events: [
                // { type: "goal", team: "away", player: "deni", minute: 34 },
                // { type: "goal", team: "away", player: "acai", minute: 46, assist: "dimas" },

                // { type: "goal", team: "home", player: "titus", minute: 48, assist: "zhongyen" },
                // { type: "yellow", team: "away", player: "aliang", minute: 30 },
            ] as MatchEvent[],
            competition: "league",
            stage: "group"
        },

        //cup2
        {
            homeTeamId: "pokemon",
            awayTeamId: "naruto",
            score: "0",
            week: 2,
            
            date: "2026-01-29",
            time: "20:00",
            venue: "Lapangan B",
            events: [
                // { type: "goal", team: "home", player: "effendi", minute: 6, assist: "podiman" },
                // { type: "goal", team: "home", player: "bobby", minute: 36 },
                // { type: "goal", team: "home", player: "swan", minute: 39 },
                // { type: "goal", team: "home", player: "titus", minute: 42, assist: "bobby" },
            ] as MatchEvent[],
            competition: "cup",
            stage: "group"
        },
        {
            homeTeamId: "onepiece",
            awayTeamId: "sinchan",
            score: "0",
            week: 2,
            
            date: "2026-01-29",
            time: "20:00",
            venue: "Lapangan C",
            events: [
                // { type: "goal", team: "away", player: "fauzi", minute: 9, assist: "ayang" },
                // { type: "goal", team: "away", player: "fauzi", minute: 19 },
                // { type: "goal", team: "away", player: "manhoi", minute: 39, assist: "fauzi" },
                // { type: "goal", team: "away", player: "fauzi", minute: 46, assist: "ayang" },
            ] as MatchEvent[],
            competition: "cup",
            stage: "group"
        },
        {
            homeTeamId: "conan",
            awayTeamId: "dragonball",
            score: "0",
            week: 2,
            
            date: "2026-01-29",
            time: "21:00",
            venue: "Lapangan B",
            events: [
                // { type: "goal", team: "home", player: "raynaldo", minute: 22 },
                // { type: "goal", team: "home", player: "daniel", minute: 42 },
            ] as MatchEvent[],
            competition: "cup",
            stage: "group"
        },
        {
            homeTeamId: "digimon",
            awayTeamId: "doraemon",
            score: "0",
            week: 2,
            
            date: "2026-01-29",
            time: "21:00",
            venue: "Lapangan C",
            events: [
                // { type: "goal", team: "home", player: "awen", minute: 29, assist: "awai" },
                // { type: "goal", team: "away", player: "james", minute: 36, assist: "wong" },
            ] as MatchEvent[],
            competition: "cup",
            stage: "group"
        },

        //week5
        {
            homeTeamId: "pokemon",
            awayTeamId: "conan",
            score: "0",
            week: 5,
            
            date: "2026-02-5",
            time: "20:00",
            venue: "Lapangan B",
            events: [
                // { type: "goal", team: "home", player: "jongan", minute: 4, assist: "podiman" },
                // { type: "goal", team: "home", player: "zhongyen", minute: 34, assist: "titus" },
                // { type: "goal", team: "home", player: "titus", minute: 36, assist: "zhongyen" },
                // { type: "goal", team: "home", player: "podiman", minute: 40 },
                // { type: "red", team: "home", player: "ferry", minute: 44 },

                // { type: "goal", team: "away", player: "awen", minute: 10 },
            ] as MatchEvent[],
            competition: "league",
            stage: "group"
        },
        {
            homeTeamId: "dragonball",
            awayTeamId: "sinchan",
            score: "0",
            week: 5,
            
            date: "2026-02-5",
            time: "20:00",
            venue: "Lapangan C",
            events: [
                // { type: "goal", team: "home", player: "acent", minute: 5, assist: "kelvin" },
                // { type: "goal", team: "home", player: "acent", minute: 6, assist: "kelvin" },
                // { type: "goal", team: "home", player: "rbonn", minute: 23, assist: "acai" },
                // { type: "goal", team: "home", player: "rbonn", minute: 26, assist: "acai" },
                // { type: "goal", team: "home", player: "rbonn", minute: 33, assist: "acai" },

                // { type: "goal", team: "away", player: "bayu", minute: 23, assist: "desmond" },
                // { type: "goal", team: "away", player: "bayu", minute: 32, assist: "tony" },
                // { type: "goal", team: "away", player: "bayu", minute: 45, assist: "tony" },
                // { type: "goal", team: "away", player: "own goal", minute: 34 },
            ] as MatchEvent[],
            competition: "league",
            stage: "group"
        },
        {
            homeTeamId: "onepiece",
            awayTeamId: "conan",
            score: "0",
            week: 5,
            
            date: "2026-02-5",
            time: "21:00",
            venue: "Lapangan B",
            events: [
                // { type: "goal", team: "home", player: "ayang", minute: 30 },
                // { type: "goal", team: "away", player: "daniel", minute: 22 },
                // { type: "goal", team: "away", player: "raynaldo", minute: 34 },
                // { type: "goal", team: "away", player: "raynaldo", minute: 38 },
            ] as MatchEvent[],
            competition: "league",
            stage: "group"
        },
        {
            homeTeamId: "naruto",
            awayTeamId: "doraemon",
            score: "0",
            week: 5,
            
            date: "2026-02-5",
            time: "21:00",
            venue: "Lapangan C",
            events: [
                // { type: "goal", team: "home", player: "winsen", minute: 26, assist: "yongky" },
                // { type: "yellow", team: "home", player: "dicky", minute: 32 },

                // { type: "goal", team: "away", player: "bram", minute: 32, assist: "nino" },
                // { type: "goal", team: "away", player: "wong", minute: 42, assist: "bram" },
            ] as MatchEvent[],
            competition: "league",
            stage: "group"
        },

        //week6
        {
            homeTeamId: "onepiece",
            awayTeamId: "doraemon",
            score: "0",
            week: 6,
            
            date: "2026-02-12",
            time: "20:00",
            venue: "Lapangan B",
            events: [
                // { type: "goal", team: "home", player: "fauzi", minute: 48 },
                // { type: "goal", team: "home", player: "manhoi", minute: 34 },

                // { type: "red", team: "home", player: "stevie", minute: 42 },

                // { type: "goal", team: "away", player: "own goal", minute: 9 },
                // { type: "goal", team: "away", player: "doni", minute: 21, assist: "nino" },
                // { type: "yellow", team: "away", player: "wong", minute: 42 },
                // { type: "yellow", team: "away", player: "nino", minute: 40 },
            ] as MatchEvent[],
            competition: "league",
            stage: "group"
        },
        {
            homeTeamId: "pokemon",
            awayTeamId: "conan",
            score: "0",
            week: 6,
            
            date: "2026-02-12",
            time: "20:00",
            venue: "Lapangan C",
            events: [
                // { type: "goal", team: "home", player: "effendi", minute: 6, assist: "podiman" },
                // { type: "goal", team: "home", player: "willy", minute: 20 },

                // { type: "goal", team: "away", player: "henry", minute: 18 },
                // { type: "yellow", team: "away", player: "budju", minute: 38 },
            ] as MatchEvent[],
            competition: "league",
            stage: "group"
        },
        {
            homeTeamId: "dragonball",
            awayTeamId: "naruto",
            score: "0",
            week: 6,
            
            date: "2026-02-12",
            time: "21:00",
            venue: "Lapangan B",
            events: [
                // { type: "goal", team: "away", player: "jono", minute: 26, assist: "winsen" },
                // { type: "goal", team: "away", player: "cibex", minute: 27, assist: "winsen" },
                // { type: "goal", team: "away", player: "cibex", minute: 38, assist: "winsen" },

                // { type: "goal", team: "home", player: "rbonn", minute: 5, assist: "dimas" },
                // { type: "goal", team: "home", player: "acent", minute: 7 },
                // { type: "goal", team: "home", player: "own goal", minute: 30 },
            ] as MatchEvent[],
            competition: "league",
            stage: "group"
        },
        {
            homeTeamId: "sinchan",
            awayTeamId: "digimon",
            score: "0",
            week: 6,
            
            date: "2026-02-12",
            time: "21:00",
            venue: "Lapangan C",
            events: [
                // { type: "goal", team: "away", player: "own goal", minute: 26 },
                // { type: "goal", team: "home", player: "tony", minute: 47, assist: "desmond" },
            ] as MatchEvent[],
            competition: "league",
            stage: "group"
        },

        //cup3
        {
            homeTeamId: "pokemon",
            awayTeamId: "sinchan",
            score: "0",
            week: 3,
            
            date: "2026-02-26",
            time: "20:00",
            venue: "Lapangan B",
            events: [
                // { type: "goal", team: "home", player: "titus", minute: 15 },
                // { type: "goal", team: "home", player: "swan", minute: 38 },

                // { type: "goal", team: "away", player: "ryuzi", minute: 10 },
                // { type: "goal", team: "away", player: "tony", minute: 26 },
                // { type: "goal", team: "away", player: "bayu", minute: 36 },
                // { type: "goal", team: "away", player: "desmond", minute: 44 },
                // { type: "goal", team: "away", player: "ryuzi", minute: 47 },

                // { type: "yellow", team: "away", player: "tony", minute: 45 },
            ] as MatchEvent[],
            competition: "cup",
            stage: "group"
        },
        {
            homeTeamId: "onepiece",
            awayTeamId: "naruto",
            score: "0",
            week: 3,
            
            date: "2026-02-26",
            time: "20:00",
            venue: "Lapangan C",
            events: [
                // { type: "goal", team: "home", player: "manhoi", minute: 7 },
                // { type: "goal", team: "home", player: "fico", minute: 36 },
                // { type: "goal", team: "home", player: "fico", minute: 38 },

                // { type: "yellow", team: "home", player: "fico", minute: 30 },

                // { type: "goal", team: "away", player: "jono", minute: 27 },
                // { type: "goal", team: "away", player: "winsen", minute: 36 },
                // { type: "goal", team: "away", player: "johanlim", minute: 44 },
                // { type: "goal", team: "away", player: "johanlim", minute: 47 },
                // { type: "yellow", team: "away", player: "ricky", minute: 44 },
            ] as MatchEvent[],
            competition: "cup",
            stage: "group"
        },
        {
            homeTeamId: "conan",
            awayTeamId: "doraemon",
            score: "0",
            week: 3,
            
            date: "2026-02-26",
            time: "21:00",
            venue: "Lapangan B",
            events: [
                // { type: "goal", team: "home", player: "budju", minute: 19 },
                // { type: "goal", team: "home", player: "budju", minute: 42 },
                // { type: "goal", team: "home", player: "raynaldo", minute: 47 },

                // { type: "goal", team: "away", player: "rabin", minute: 9 },
                // { type: "goal", team: "away", player: "doni", minute: 35 },
                // { type: "goal", team: "away", player: "nino", minute: 38 },

                // { type: "yellow", team: "away", player: "james", minute: 10 },
            ] as MatchEvent[],
            competition: "cup",
            stage: "group"
        },
        {
            homeTeamId: "digimon",
            awayTeamId: "dragonball",
            score: "0",
            week: 3,
            
            date: "2026-02-26",
            time: "21:00",
            venue: "Lapangan C",
            events: [
                // { type: "goal", team: "home", player: "acent", minute: 11 },
                // { type: "goal", team: "home", player: "acent", minute: 12 },
                // { type: "goal", team: "home", player: "mitra", minute: 12 },
                // { type: "goal", team: "home", player: "rbonn", minute: 25 },
                // { type: "goal", team: "home", player: "rbonn", minute: 30 },
                // { type: "goal", team: "home", player: "rbonn", minute: 36 },
                // { type: "goal", team: "home", player: "auco", minute: 45 },

                // { type: "goal", team: "away", player: "william", minute: 8 },
                // { type: "goal", team: "away", player: "wewek", minute: 9 },
            ] as MatchEvent[],
            competition: "cup",
            stage: "group"
        },

        //week7
        {
            homeTeamId: "naruto",
            awayTeamId: "sinchan",
            score: "0",
            week: 7,
            
            date: "2026-03-5",
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
            stage: "group"
        },
        {
            homeTeamId: "dragonball",
            awayTeamId: "doraemon",
            score: "0",
            week: 7,
            
            date: "2026-03-5",
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
            stage: "group"
        },
        {
            homeTeamId: "conan",
            awayTeamId: "digimon",
            score: "0",
            week: 7,
            
            date: "2026-03-5",
            time: "21:00",
            venue: "Lapangan B",
            events: [
                // { type: "goal", team: "home", player: "raynaldo", minute: 5 },
                // { type: "goal", team: "home", player: "daniel", minute: 19 },
                // { type: "goal", team: "home", player: "awok", minute: 23 },
                // { type: "goal", team: "home", player: "awok", minute: 27, assist: "raynaldo" },

                // { type: "goal", team: "away", player: "laudek", minute: 33 },
                // { type: "yellow", team: "away", player: "laudek", minute: 17 },
            ] as MatchEvent[],
            competition: "league",
            stage: "group"
        },
        {
            homeTeamId: "onepiece",
            awayTeamId: "pokemon",
            score: "0",
            week: 7,
            
            date: "2026-03-5",
            time: "21:00",
            venue: "Lapangan C",
            events: [
                // { type: "goal", team: "home", player: "bruno", minute: 23 },
            ] as MatchEvent[],
            competition: "league",
            stage: "group"
        },

        //playoff
        // {
        //     homeTeamId: "hibiki",
        //     awayTeamId: "glenfiddich",
        //     score: "0",
        //     week: 8,
            
        //     date: "2025-10-9",
        //     time: "20:00",
        //     venue: "Lapangan B",
        //     events: [
        
        //     ] as MatchEvent[],
        //     competition: "league",
        //     stage: "playoff"
        // },
        // {
        //     homeTeamId: "azul",
        //     awayTeamId: "singleton",
        //     score: "0",
        //     week: 8,
            
        //     date: "2025-10-9",
        //     time: "20:00",
        //     venue: "Lapangan C",
        //     events: [
            
        //     ] as MatchEvent[],
        //     competition: "league",
        //     stage: "playoff"
        // },

        // {
        //     homeTeamId: "glenfiddich",
        //     awayTeamId: "azul",
        //     score: "0",
        //     week: 8,
            
        //     date: "2025-10-9",
        //     time: "21:00",
        //     venue: "Lapangan B",
        //     events: [
                
        //     ] as MatchEvent[],
        //     competition: "league",
        //     stage: "playoff"
        // },

        //semifinal
        // {
        //     homeTeamId: "azul",
        //     awayTeamId: "singleton",
        //     score: "0",
        //     week: 4,
            
        //     date: "2025-10-23",
        //     time: "20:00",
        //     venue: "Lapangan B",
        //     events: [
               

        //     ] as MatchEvent[],
        //     competition: "cup",
        //     stage: "semifinal"
        // },

        // {
        //     homeTeamId: "hibiki",
        //     awayTeamId: "macallan",
        //     score: "0",
        //     week: 4,
            
        //     date: "2025-10-23",
        //     time: "21:00",
        //     venue: "Lapangan B",
        //     events: [
                
        //     ] as MatchEvent[],
        //     competition: "cup",
        //     stage: "semifinal"
        // },
    ]

type MatchEvent = {
    assist: string
    playerId: any
    type: "goal" | "assist" | "yellow" | "red"
    team: "home" | "away"
    player: string
    minute: number
}