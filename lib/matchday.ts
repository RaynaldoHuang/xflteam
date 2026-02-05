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
                { type: "goal", team: "away", player: "Aguan", minute: 13, assist: "Ryuzi" },
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
                { type: "goal", team: "away", player: "Rbonn", minute: 38, assist: "Desmond" },

                { type: "yellow", team: "home", player: "Dimas", minute: 33},
                { type: "yellow", team: "home", player: "Mitra", minute: 20},
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
            score: "3 : 8",
            week: 1,
            
            date: "2026-01-8",
            time: "20:00",
            venue: "Lapangan B",
            events: [
                { type: "goal", team: "away", player: "Cibex", minute: 7, assist: "Podiman"},
                { type: "goal", team: "away", player: "Bram", minute: 16},
                { type: "goal", team: "away", player: "Bram", minute: 18},
                { type: "goal", team: "away", player: "Cibex", minute: 23},
                { type: "goal", team: "away", player: "Cibex", minute: 33, assist: "Podiman"},
                { type: "goal", team: "away", player: "Cibex", minute: 37},
                { type: "goal", team: "away", player: "Bram", minute: 38},
                { type: "goal", team: "away", player: "Podiman", minute: 39},

                { type: "goal", team: "home", player: "Aju", minute: 8, assist: "Awai" },
                { type: "goal", team: "home", player: "Awai", minute: 21, assist: "Cieks" },
                { type: "goal", team: "home", player: "Awai", minute: 42, assist: "Cieks" },
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
            score: "4 : 4",
            week: 3,
            
            date: "2026-01-15",
            time: "20:00",
            venue: "Lapangan B",
            events: [
                { type: "goal", team: "home", player: "Hendrik", minute: 3, assist: "Ryuzi" },
                { type: "goal", team: "home", player: "Chandri", minute: 4, assist: "Hendrik" },
                { type: "goal", team: "home", player: "Hendrik", minute: 24, assist: "Henry" },
                { type: "goal", team: "home", player: "Hendrik", minute: 34, },

                { type: "goal", team: "away", player: "Podiman", minute: 1,assist: "Ferry" },
                { type: "yellow", team: "away", player: "Cibex", minute: 17 },
                { type: "goal", team: "away", player: "Effendy Olif", minute: 34,assist: "Sinaga" },
                { type: "goal", team: "away", player: "Sinaga", minute: 37,assist: "Cibex" },
                { type: "goal", team: "away", player: "Ferry", minute: 14,assist: "Sinaga" },
            ] as MatchEvent[],
            competition: "league",
            stage: "group"
        },
        {
            homeTeamId: "doraemon",
            awayTeamId: "pokemon",
            score: "1 : 4",
            week: 3,
            
            date: "2026-01-15",
            time: "20:00",
            venue: "Lapangan C",
            events: [
                { type: "goal", team: "home", player: "Rbonn", minute: 34, assist: "Desmond" },
                { type: "yellow", team: "home", player: "Wendy", minute: 45},

                { type: "goal", team: "away", player: "Kelvin", minute: 8,assist: "Budju" },
                { type: "goal", team: "away", player: "Aju", minute: 11,assist: "Kelvin" },
                { type: "goal", team: "away", player: "Cieks", minute: 14 },
                { type: "goal", team: "away", player: "Kelvin", minute: 42,assist: "Cieks" },
                { type: "yellow", team: "away", player: "William J", minute: 43},
            ] as MatchEvent[],
            competition: "league",
            stage: "group"
        },
        {
            homeTeamId: "naruto",
            awayTeamId: "digimon",
            score: "4 : 5",
            week: 3,
            
            date: "2026-01-15",
            time: "21:00",
            venue: "Lapangan B",
            events: [
                { type: "goal", team: "away", player: "Riko", minute: 13, assist: "Aho" },
                { type: "goal", team: "away", player: "Tony", minute: 18, assist: "Riko" },
                { type: "goal", team: "away", player: "Tony", minute: 20, assist: "Aho" },
                { type: "goal", team: "away", player: "OG", minute: 25},
                { type: "goal", team: "away", player: "Ringgo", minute: 30},

                { type: "yellow", team: "away", player: "Aho", minute: 8},

                { type: "goal", team: "home", player: "OG", minute: 24},
                { type: "goal", team: "home", player: "Titus", minute: 26,assist: "Fico" },
                { type: "goal", team: "home", player: "Lim", minute: 29,assist: "Titus" },
                { type: "goal", team: "home", player: "OG", minute: 43},
            ] as MatchEvent[],
            competition: "league",
            stage: "group"
        },
        {
            homeTeamId: "sinchan",
            awayTeamId: "conan",
            score: "1 : 2",
            week: 3,
            
            date: "2026-01-15",
            time: "21:00",
            venue: "Lapangan C",
            events: [
                { type: "goal", team: "home", player: "Zhong Yen", minute: 42, assist: "Tanado" },

                { type: "goal", team: "away", player: "Jono", minute: 8},
                { type: "goal", team: "away", player: "Mitra", minute: 12, assist: "Jono" },
                { type: "yellow", team: "away", player: "Dimas", minute: 46},
            ] as MatchEvent[],
            competition: "league",
            stage: "group"
        },

        //week4
        {
            homeTeamId: "naruto",
            awayTeamId: "conan",
            score: "3 : 3",
            week: 4,
            
            date: "2026-01-22",
            time: "20:00",
            venue: "Lapangan B",
            events: [
                { type: "goal", team: "home", player: "Yongsun", minute: 7 },
                { type: "goal", team: "home", player: "Yongsun", minute: 14 },
                { type: "goal", team: "home", player: "Titus", minute: 18, assist: "Lim" },

                { type: "yellow", team: "home", player: "Fico", minute: 24 },

                { type: "goal", team: "away", player: "Justin", minute: 11, assist: "Jono" },
                { type: "goal", team: "away", player: "Effendy", minute: 13, assist: "Jono" },
                { type: "goal", team: "away", player: "Jono", minute: 42},
            ] as MatchEvent[],
            competition: "league",
            stage: "group"
        },
        {
            homeTeamId: "onepiece",
            awayTeamId: "digimon",
            score: "7 : 6",
            week: 4,
            
            date: "2026-01-22",
            time: "20:00",
            venue: "Lapangan C",
            events: [
                { type: "goal", team: "home", player: "Bram", minute: 2,assist: "Bobby" },
                { type: "goal", team: "home", player: "Ferry", minute: 3,assist: "Sinaga" },
                { type: "goal", team: "home", player: "Ferry", minute: 15,assist: "Sinaga" },
                { type: "goal", team: "home", player: "Ferry", minute: 23},
                { type: "goal", team: "home", player: "Podiman", minute: 26,assist: "Sinaga"},
                { type: "goal", team: "home", player: "Podiman", minute: 33,assist: "Sinaga"},
                { type: "goal", team: "home", player: "Leo", minute: 29},
                { type: "yellow", team: "home", player: "Leo", minute: 34},

                { type: "goal", team: "away", player: "Rabin", minute: 5},
                { type: "goal", team: "away", player: "Rabin", minute: 11},
                { type: "goal", team: "away", player: "Rabin", minute: 29},
                { type: "goal", team: "away", player: "Tony", minute: 17,assist: "Riko" },
                { type: "goal", team: "away", player: "Ringgo", minute: 25,assist: "Tony" },
                { type: "goal", team: "away", player: "Ringgo", minute: 34},
                { type: "yellow", team: "away", player: "Tony", minute: 20},
                { type: "yellow", team: "away", player: "Riko", minute: 36},
            ] as MatchEvent[],
            competition: "league",
            stage: "group"
        },
        {
            homeTeamId: "doraemon",
            awayTeamId: "sinchan",
            score: "4 : 6",
            week: 4,
            
            date: "2026-01-22",
            time: "21:00",
            venue: "Lapangan B",
            events: [
                { type: "goal", team: "home", player: "Agustian", minute: 11,assist: "Desmond" },
                { type: "goal", team: "home", player: "Rbonn", minute: 32 },
                { type: "goal", team: "home", player: "Fauzi", minute: 36,assist: "Gil" },
                { type: "goal", team: "home", player: "Rbonn", minute: 43,assist: "Bangbo" },

                { type: "goal", team: "away", player: "Raynaldo", minute: 3},
                { type: "goal", team: "away", player: "Raynaldo", minute: 12, assist: "Tanado"},
                { type: "goal", team: "away", player: "Raynaldo", minute: 21, assist: "Zhong Yen"},
                { type: "goal", team: "away", player: "Raynaldo", minute: 27},
                { type: "goal", team: "away", player: "Zhong Yen", minute: 41, assist: "Raynaldo"},
                { type: "goal", team: "away", player: "Tanado", minute: 47, assist: "Raynaldo"},
            ] as MatchEvent[],
            competition: "league",
            stage: "group"
        },
        {
            homeTeamId: "pokemon",
            awayTeamId: "dragonball",
            score: "2 : 4",
            week: 4,
            
            date: "2026-01-22",
            time: "21:00",
            venue: "Lapangan C",
            events: [
                { type: "goal", team: "home", player: "Budju", minute: 38 },
                { type: "goal", team: "home", player: "Didi", minute: 39,assist: "Budju" },

                { type: "goal", team: "away", player: "Ryuzi", minute: 16},
                { type: "goal", team: "away", player: "Hendrik", minute: 39,assist: "Swan" },
                { type: "goal", team: "away", player: "Hendrik", minute: 46,assist: "Henry" },
                { type: "goal", team: "away", player: "Hendrik", minute: 47,assist: "Ryuzi" },
            ] as MatchEvent[],
            competition: "league",
            stage: "group"
        },

        //cup2
        {
            homeTeamId: "pokemon",
            awayTeamId: "naruto",
            score: "1 : 2",
            week: 2,
            
            date: "2026-01-29",
            time: "20:00",
            venue: "Lapangan B",
            events: [
                { type: "goal", team: "away", player: "Fico", minute: 10 },
                { type: "goal", team: "away", player: "Lim", minute: 37,assist: "Fico" },

                { type: "goal", team: "home", player: "Budju", minute: 26},

                { type: "yellow", team: "home", player: "Herbert", minute: 30},
                { type: "yellow", team: "home", player: "Chandra", minute: 40},

                { type: "yellow", team: "away", player: "Lim", minute: 26},
            ] as MatchEvent[],
            competition: "cup",
            stage: "group"
        },
        {
            homeTeamId: "onepiece",
            awayTeamId: "sinchan",
            score: "3 : 3",
            week: 2,
            
            date: "2026-01-29",
            time: "20:00",
            venue: "Lapangan C",
            events: [
                { type: "goal", team: "away", player: "Zhong Yen", minute: 1 },
                { type: "goal", team: "away", player: "Zhong Yen", minute: 3, assist: "Daniel" },
                { type: "goal", team: "away", player: "Daniel", minute: 24, assist: "Tanado" },

                { type: "goal", team: "home", player: "Sinaga", minute: 9, assist: "Bobby"},
                { type: "goal", team: "home", player: "Sinaga", minute: 29, assist: "Bobby"},
                { type: "goal", team: "home", player: "Bram", minute: 30, assist: "Effendy Olif"},
            ] as MatchEvent[],
            competition: "cup",
            stage: "group"
        },
        {
            homeTeamId: "conan",
            awayTeamId: "dragonball",
            score: "2 : 5",
            week: 2,
            
            date: "2026-01-29",
            time: "21:00",
            venue: "Lapangan B",
            events: [
                { type: "goal", team: "away", player: "Henry", minute: 18 },
                { type: "goal", team: "away", player: "Hendrik", minute: 20},
                { type: "goal", team: "away", player: "Aguan", minute: 23},
                { type: "goal", team: "away", player: "Ryuzi", minute: 28, assist: "Aguan"},
                { type: "goal", team: "away", player: "Hendrik", minute: 31, assist:"Swan"},

                { type: "yellow", team: "home", player: "Ferry", minute: 29},
                { type: "goal", team: "home", player: "Jono", minute: 4},
                { type: "goal", team: "home", player: "Jono", minute: 34, assist:"Mitra"},
            ] as MatchEvent[],
            competition: "cup",
            stage: "group"
        },
        {
            homeTeamId: "digimon",
            awayTeamId: "doraemon",
            score: "3 : 6",
            week: 2,
            
            date: "2026-01-29",
            time: "21:00",
            venue: "Lapangan C",
            events: [
                { type: "goal", team: "home", player: "Acai", minute: 14, assist:"Aho"},
                { type: "goal", team: "home", player: "Aho", minute: 18, assist:"Tony"},
                { type: "goal", team: "home", player: "Ringgo", minute: 46, assist:"Tony"},

                { type: "goal", team: "away", player: "Rbonn", minute: 17, assist:"Desmond"},
                { type: "goal", team: "away", player: "Rbonn", minute: 44, assist:"Desmond"},
                { type: "goal", team: "away", player: "Rbonn", minute: 37, assist:"Desmond"},
                { type: "goal", team: "away", player: "Rbonn", minute: 40, assist:"Desmond"},
                { type: "goal", team: "away", player: "Fauzi", minute: 19, assist:"Desmond"},
                { type: "goal", team: "away", player: "Desmond", minute: 20},
            ] as MatchEvent[],
            competition: "cup",
            stage: "group"
        },

        //week5
        {
            homeTeamId: "pokemon",
            awayTeamId: "digimon",
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