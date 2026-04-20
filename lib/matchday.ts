export type CompetitionType = "league" | "cup";
export type StageType = "group" | "playoff" | "semifinal" | "final";

export const matches: {
  homeTeamId: string;
  awayTeamId: string;
  score: string;
  week: number;
  date: string;
  time: string;
  venue: string;
  events: MatchEvent[];
  competition: CompetitionType;
  stage: StageType;
}[] = [
  //week1
  {
    homeTeamId: "pantaigading",
    awayTeamId: "norway",
    score: "0",
    week: 1,
    date: "2026-04-23",
    time: "20:00",
    venue: "Lapangan B",
    events: [
      // { type: "goal", team: "home", player: "Suryadi", minute: 19 },
      // { type: "goal", team: "home", player: "Titus", minute: 34 },
      // {
      //   type: "goal",
      //   team: "home",
      //   player: "Lewis",
      //   minute: 40,
      //   assist: "Titus",
      // },
      // {
      //   type: "goal",
      //   team: "home",
      //   player: "Doni",
      //   minute: 43,
      //   assist: "Titus",
      // },
    ] as unknown as MatchEvent[],
    competition: "league",
    stage: "group",
  },
  {
    homeTeamId: "paraguay",
    awayTeamId: "arabsaudi",
    score: "0",
    week: 1,

    date: "2026-04-23",
    time: "20:00",
    venue: "Lapangan C",
    events: [
      // { type: "goal", team: "home", player: "Ringgo", minute: 2 },
      // {
      //   type: "goal",
      //   team: "home",
      //   player: "Ringgo",
      //   minute: 22,
      //   assist: "Acai",
      // },
      // {
      //   type: "goal",
      //   team: "home",
      //   player: "Tony",
      //   minute: 24,
      //   assist: "Acai",
      // },
      // { type: "yellow", team: "home", player: "Nickson", minute: 31 },
      // { type: "yellow", team: "home", player: "Riko", minute: 40 },

      // {
      //   type: "goal",
      //   team: "away",
      //   player: "Rbonn",
      //   minute: 10,
      //   assist: "Desmond",
      // },
    ] as unknown as MatchEvent[],
    competition: "league",
    stage: "group",
  },
  {
    homeTeamId: "skotlandia",
    awayTeamId: "qatar",
    score: "0",
    week: 1,

    date: "2026-04-23",
    time: "21:00",
    venue: "Lapangan B",
    events: [
      // {
      //   type: "goal",
      //   team: "home",
      //   player: "Jono",
      //   minute: 18,
      //   assist: "Mitra",
      // },
      // { type: "goal", team: "home", player: "Effendy", minute: 27 },
      // { type: "goal", team: "home", player: "Mitra", minute: 30 },
      // {
      //   type: "goal",
      //   team: "home",
      //   player: "Acunk",
      //   minute: 36,
      //   assist: "Jono",
      // },
      // { type: "goal", team: "home", player: "Jono", minute: 42 },
      // { type: "yellow", team: "home", player: "Mitra", minute: 42 },

      // { type: "goal", team: "away", player: "Reno", minute: 10 },
      // {
      //   type: "goal",
      //   team: "away",
      //   player: "Aguan",
      //   minute: 13,
      //   assist: "Ryuzi",
      // },
      // { type: "goal", team: "away", player: "Hendrik", minute: 24 },
      // { type: "goal", team: "away", player: "Ryuzi", minute: 29 },
    ] as unknown as MatchEvent[],
    competition: "league",
    stage: "group",
  },

  {
    homeTeamId: "uzbekistan",
    awayTeamId: "afsel",
    score: "0",
    week: 1,

    date: "2026-04-23",
    time: "21:00",
    venue: "Lapangan C",
    events: [
      
    ] as unknown as MatchEvent[],
    competition: "league",
    stage: "group",
  },

  //week2
  {
    homeTeamId: "skotlandia",
    awayTeamId: "arabsaudi",
    score: "0",
    week: 2,
    date: "2026-04-30",
    time: "20:00",
    venue: "Lapangan B",
    events: [
      
    ] as MatchEvent[],
    competition: "league",
    stage: "group",
  },

  {
    homeTeamId: "uzbekistan",
    awayTeamId: "norway",
    score: "0",
    week: 2,

    date: "2026-04-30",
    time: "20:00",
    venue: "Lapangan C",
    events: [
      
    ] as MatchEvent[],
    competition: "league",
    stage: "group",
  },

  {
    homeTeamId: "pantaigading",
    awayTeamId: "afsel",
    score: "0",
    week: 2,

    date: "2026-04-30",
    time: "21:00",
    venue: "Lapangan B",
    events: [
      
    ] as MatchEvent[],
    competition: "league",
    stage: "group",
  },

  {
    homeTeamId: "qatar",
    awayTeamId: "paraguay",
    score: "0",
    week: 2,

    date: "2026-04-30",
    time: "21:00",
    venue: "Lapangan C",
    events: [
      
    ] as MatchEvent[],
    competition: "league",
    stage: "group",
  },

  //cup1
  {
    homeTeamId: "pantaigading",
    awayTeamId: "uzbekistan",
    score: "0",
    week: 1,

    date: "2026-05-7",
    time: "20:00",
    venue: "Lapangan B",
    events: [
      
    ] as MatchEvent[],
    competition: "cup",
    stage: "group",
  },

  {
    homeTeamId: "norway",
    awayTeamId: "afsel",
    score: "0",
    week: 1,

    date: "2026-05-7",
    time: "20:00",
    venue: "Lapangan C",
    events: [
      
    ] as MatchEvent[],
    competition: "cup",
    stage: "group",
  },

  {
    homeTeamId: "skotlandia",
    awayTeamId: "paraguay",
    score: "0",
    week: 1,

    date: "2026-05-7",
    time: "21:00",
    venue: "Lapangan B",
    events: [
      
    ] as MatchEvent[],
    competition: "cup",
    stage: "group",
  },

  {
    homeTeamId: "qatar",
    awayTeamId: "arabsaudi",
    score: "0",
    week: 1,

    date: "2026-05-7",
    time: "21:00",
    venue: "Lapangan C",
    events: [
      
    ] as MatchEvent[],
    competition: "cup",
    stage: "group",
  },

  //week3
  {
    homeTeamId: "qatar",
    awayTeamId: "uzbekistan",
    score: "0",
    week: 3,

    date: "2026-05-21",
    time: "20:00",
    venue: "Lapangan B",
    events: [
      
    ] as MatchEvent[],
    competition: "league",
    stage: "group",
  },

  {
    homeTeamId: "arabsaudi",
    awayTeamId: "pantaigading",
    score: "0",
    week: 3,

    date: "2026-05-21",
    time: "20:00",
    venue: "Lapangan C",
    events: [
      
    ] as MatchEvent[],
    competition: "league",
    stage: "group",
  },

  {
    homeTeamId: "norway",
    awayTeamId: "paraguay",
    score: "0",
    week: 3,

    date: "2026-05-21",
    time: "21:00",
    venue: "Lapangan B",
    events: [
      
    ] as MatchEvent[],
    competition: "league",
    stage: "group",
  },

  {
    homeTeamId: "afsel",
    awayTeamId: "skotlandia",
    score: "0",
    week: 3,

    date: "2026-05-21",
    time: "21:00",
    venue: "Lapangan C",
    events: [
      
    ] as MatchEvent[],
    competition: "league",
    stage: "group",
  },

  //week4
  {
    homeTeamId: "norway",
    awayTeamId: "skotlandia",
    score: "0",
    week: 4,

    date: "2026-06-4",
    time: "20:00",
    venue: "Lapangan B",
    events: [
      
    ] as MatchEvent[],
    competition: "league",
    stage: "group",
  },
  {
    homeTeamId: "uzbekistan",
    awayTeamId: "paraguay",
    score: "0",
    week: 4,

    date: "2026-06-4",
    time: "20:00",
    venue: "Lapangan C",
    events: [
      
    ] as MatchEvent[],
    competition: "league",
    stage: "group",
  },
  {
    homeTeamId: "arabsaudi",
    awayTeamId: "afsel",
    score: "0",
    week: 4,

    date: "2026-06-4",
    time: "21:00",
    venue: "Lapangan B",
    events: [
      
    ] as MatchEvent[],
    competition: "league",
    stage: "group",
  },

  {
    homeTeamId: "pantaigading",
    awayTeamId: "qatar",
    score: "0",
    week: 4,

    date: "2026-06-4",
    time: "21:00",
    venue: "Lapangan C",
    events: [
      
    ] as MatchEvent[],
    competition: "league",
    stage: "group",
  },

  //cup2
  {
    homeTeamId: "pantaigading",
    awayTeamId: "norway",
    score: "0",
    week: 2,

    date: "2026-06-11",
    time: "20:00",
    venue: "Lapangan B",
    events: [
      
    ] as MatchEvent[],
    competition: "cup",
    stage: "group",
  },

  {
    homeTeamId: "uzbekistan",
    awayTeamId: "afsel",
    score: "0",
    week: 2,

    date: "2026-06-11",
    time: "20:00",
    venue: "Lapangan C",
    events: [
      
    ] as MatchEvent[],
    competition: "cup",
    stage: "group",
  },

  {
    homeTeamId: "skotlandia",
    awayTeamId: "qatar",
    score: "0",
    week: 2,

    date: "2026-06-11",
    time: "21:00",
    venue: "Lapangan B",
    events: [
      
    ] as MatchEvent[],
    competition: "cup",
    stage: "group",
  },

  {
    homeTeamId: "paraguay",
    awayTeamId: "arabsaudi",
    score: "0",
    week: 2,

    date: "2026-06-11",
    time: "21:00",
    venue: "Lapangan C",
    events: [
      
    ] as MatchEvent[],
    competition: "cup",
    stage: "group",
  },

  //week5
  {
    homeTeamId: "pantaigading",
    awayTeamId: "paraguay",
    score: "0",
    week: 5,

    date: "2026-06-18",
    time: "20:00",
    venue: "Lapangan B",
    events: [
      
    ] as MatchEvent[],
    competition: "league",
    stage: "group",
  },

  {
    homeTeamId: "qatar",
    awayTeamId: "afsel",
    score: "0",
    week: 5,

    date: "2026-06-18",
    time: "20:00",
    venue: "Lapangan C",
    events: [
      
    ] as MatchEvent[],
    competition: "league",
    stage: "group",
  },

  {
    homeTeamId: "uzbekistan",
    awayTeamId: "skotlandia",
    score: "0",
    week: 5,

    date: "2026-06-18",
    time: "21:00",
    venue: "Lapangan B",
    events: [
      
    ] as MatchEvent[],
    competition: "league",
    stage: "group",
  },

  {
    homeTeamId: "norway",
    awayTeamId: "arabsaudi",
    score: "0",
    week: 5,

    date: "2026-06-18",
    time: "21:00",
    venue: "Lapangan C",
    events: [
      
    ] as MatchEvent[],
    competition: "league",
    stage: "group",
  },

  //week6
  {
    homeTeamId: "uzbekistan",
    awayTeamId: "arabsaudi",
    score: "0",
    week: 6,

    date: "2026-06-25",
    time: "20:00",
    venue: "Lapangan B",
    events: [
      
    ] as MatchEvent[],
    competition: "league",
    stage: "group",
  },

  {
    homeTeamId: "pantaigading",
    awayTeamId: "skotlandia",
    score: "0",
    week: 6,

    date: "2026-06-25",
    time: "20:00",
    venue: "Lapangan C",
    events: [
      
    ] as MatchEvent[],
    competition: "league",
    stage: "group",
  },

  {
    homeTeamId: "qatar",
    awayTeamId: "norway",
    score: "0",
    week: 6,

    date: "2026-06-25",
    time: "21:00",
    venue: "Lapangan B",
    events: [
      
    ] as MatchEvent[],
    competition: "league",
    stage: "group",
  },
  
  {
    homeTeamId: "afsel",
    awayTeamId: "paraguay",
    score: "0",
    week: 6,

    date: "2026-06-25",
    time: "21:00",
    venue: "Lapangan C",
    events: [
      
    ] as MatchEvent[],
    competition: "league",
    stage: "group",
  },

  //cup3
  {
    homeTeamId: "pantaigading",
    awayTeamId: "afsel",
    score: "0",
    week: 3,

    date: "2026-07-02",
    time: "20:00",
    venue: "Lapangan B",
    events: [
      
    ] as MatchEvent[],
    competition: "cup",
    stage: "group",
  },

  {
    homeTeamId: "uzbekistan",
    awayTeamId: "norway",
    score: "0",
    week: 3,

    date: "2026-07-02",
    time: "20:00",
    venue: "Lapangan C",
    events: [
      
    ] as MatchEvent[],
    competition: "cup",
    stage: "group",
  },

  {
    homeTeamId: "skotlandia",
    awayTeamId: "arabsaudi",
    score: "0",
    week: 3,

    date: "2026-07-02",
    time: "21:00",
    venue: "Lapangan B",
    events: [
      
    ] as MatchEvent[],
    competition: "cup",
    stage: "group",
  },

  {
    homeTeamId: "paraguay",
    awayTeamId: "qatar",
    score: "0",
    week: 3,

    date: "2026-07-02",
    time: "21:00",
    venue: "Lapangan C",
    events: [
      
    ] as MatchEvent[],
    competition: "cup",
    stage: "group",
  },

  //week7
  {
    homeTeamId: "norway",
    awayTeamId: "afsel",
    score: "0",
    week: 7,

    date: "2026-07-09",
    time: "20:00",
    venue: "Lapangan B",
    events: [
      
    ] as MatchEvent[],
    competition: "league",
    stage: "group",
  },

  {
    homeTeamId: "qatar",
    awayTeamId: "arabsaudi",
    score: "0",
    week: 7,

    date: "2026-07-09",
    time: "20:00",
    venue: "Lapangan C",
    events: [
      
    ] as MatchEvent[],
    competition: "league",
    stage: "group",
  },

  {
    homeTeamId: "skotlandia",
    awayTeamId: "paraguay",
    score: "0",
    week: 7,

    date: "2026-07-09",
    time: "21:00",
    venue: "Lapangan B",
    events: [
      
    ] as MatchEvent[],
    competition: "league",
    stage: "group",
  },
  {
    homeTeamId: "uzbekistan",
    awayTeamId: "pantaigading",
    score: "0",
    week: 7,

    date: "2026-07-09",
    time: "21:00",
    venue: "Lapangan C",
    events: [
      
    ] as MatchEvent[],
    competition: "league",
    stage: "group",
  },

  // playoff
  // {
  //     homeTeamId: "sinchan",
  //     awayTeamId: "doraemon",
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
  //   homeTeamId: "sinchan",
  //   awayTeamId: "doraemon",
  //   score: "2 : 2",
  //   week: 4,

  //   date: "2026-04-2",
  //   time: "20:00",
  //   venue: "Lapangan B",
  //   events: [
  //     {
  //       type: "goal",
  //       team: "home",
  //       player: "Daniel",
  //       minute: 35,
  //       assist: "Tanado",
  //     },
  //     {
  //       type: "goal",
  //       team: "home",
  //       player: "Wong",
  //       minute: 42,
  //       assist: "Zhong Yen",
  //     },
  //     {
  //       type: "goal",
  //       team: "away",
  //       player: "Fauzi",
  //       minute: 11,
  //       assist: "Herwin",
  //     },
  //     {
  //       type: "goal",
  //       team: "away",
  //       player: "Rbonn",
  //       minute: 30,
  //     },
  //   ] as MatchEvent[],
  //   competition: "cup",
  //   stage: "semifinal",
  // },

  // {
  //   homeTeamId: "dragonball",
  //   awayTeamId: "onepiece",
  //   score: "7 : 1",
  //   week: 4,

  //   date: "2026-04-2",
  //   time: "21:00",
  //   venue: "Lapangan C",
  //   events: [
  //     {
  //       type: "goal",
  //       team: "home",
  //       player: "Hendrik",
  //       minute: 12,
  //       assist: "Aguan",
  //     },
  //     {
  //       type: "goal",
  //       team: "home",
  //       player: "Hendrik",
  //       minute: 20,
  //     },
  //     {
  //       type: "goal",
  //       team: "home",
  //       player: "Hendrik",
  //       minute: 30,
  //     },
  //     {
  //       type: "goal",
  //       team: "home",
  //       player: "Hendrik",
  //       minute: 36,
  //       assist: "Swan",
  //     },
  //     {
  //       type: "goal",
  //       team: "home",
  //       player: "Hendrik",
  //       minute: 40,
  //       assist: "Swan",
  //     },
  //     {
  //       type: "goal",
  //       team: "home",
  //       player: "Hendrik",
  //       minute: 42,
  //       assist: "Swan",
  //     },
  //     {
  //       type: "goal",
  //       team: "home",
  //       player: "Aguan",
  //       minute: 45,
  //       assist: "Hendrik",
  //     },

  //     {
  //       type: "goal",
  //       team: "away",
  //       player: "Podiman",
  //       minute: 15,
  //       assist: "Bram",
  //     },
  //   ] as MatchEvent[],
  //   competition: "cup",
  //   stage: "semifinal",
  // },

  // {
  //   homeTeamId: "dragonball",
  //   awayTeamId: "doraemon",
  //   score: "7 : 1",
  //   week: 4,

  //   date: "2026-04-2",
  //   time: "21:00",
  //   venue: "Lapangan B",
  //   events: [
  //     {
  //       type: "goal",
  //       team: "home",
  //       player: "Hendrik",
  //       minute: 12,
  //     },
  //     {
  //       type: "goal",
  //       team: "home",
  //       player: "Hendrik",
  //       minute: 20,
  //     },
  //     {
  //       type: "goal",
  //       team: "home",
  //       player: "Hendrik",
  //       minute: 30,
  //     },
  //     {
  //       type: "goal",
  //       team: "home",
  //       player: "Aguan",
  //       minute: 36,
  //     },
  //     {
  //       type: "goal",
  //       team: "home",
  //       player: "Swan",
  //       minute: 40,
  //     },
  //     {
  //       type: "goal",
  //       team: "home",
  //       player: "Uza",
  //       minute: 42,
  //     },
  //     {
  //       type: "goal",
  //       team: "home",
  //       player: "Uza",
  //       minute: 45,
  //     },

  //     {
  //       type: "goal",
  //       team: "away",
  //       player: "Rbonn",
  //       minute: 15,
  //       assist: "Desmond",
  //     },
  //   ] as MatchEvent[],
  //   competition: "cup",
  //   stage: "final",
  // },

  // {
  //   homeTeamId: "sinchan",
  //   awayTeamId: "conan",
  //   score: "6 : 1",
  //   week: 10,

  //   date: "2026-04-9",
  //   time: "20:00",
  //   venue: "Lapangan B",
  //   events: [
  //     {
  //       type: "goal",
  //       team: "home",
  //       player: "Raynaldo",
  //       minute: 3,
  //     },
  //     {
  //       type: "goal",
  //       team: "home",
  //       player: "Raynaldo",
  //       minute: 4,
  //     },
  //     {
  //       type: "goal",
  //       team: "home",
  //       player: "Raynaldo",
  //       minute: 27,
  //     },
  //     {
  //       type: "goal",
  //       team: "home",
  //       player: "Raynaldo",
  //       minute: 39,
  //     },
  //     {
  //       type: "goal",
  //       team: "home",
  //       player: "Tanado",
  //       minute: 24,
  //       assist: "Awen",
  //     },
  //     {
  //       type: "goal",
  //       team: "home",
  //       player: "Tanado",
  //       minute: 26,
  //     },
  //     {
  //       type: "goal",
  //       team: "away",
  //       player: "Jono",
  //       minute: 7,
  //       assist: "Dimas",
  //     },
  //   ] as MatchEvent[],
  //   competition: "league",
  //   stage: "semifinal",
  // },

  // {
  //   homeTeamId: "dragonball",
  //   awayTeamId: "naruto",
  //   score: "7 : 2",
  //   week: 10,

  //   date: "2026-04-9",
  //   time: "20:00",
  //   venue: "Lapangan C",
  //   events: [
  //     {
  //       type: "goal",
  //       team: "home",
  //       player: "Henry",
  //       minute: 3,
  //     },
  //     {
  //       type: "goal",
  //       team: "home",
  //       player: "Gunawan",
  //       minute: 4,
  //     },
  //     {
  //       type: "goal",
  //       team: "home",
  //       player: "Gunawan",
  //       minute: 27,
  //     },
  //     {
  //       type: "goal",
  //       team: "home",
  //       player: "Hendrik",
  //       minute: 35,
  //       assist: "Aguan",
  //     },
  //     {
  //       type: "goal",
  //       team: "away",
  //       player: "Faisal",
  //       minute: 37,
  //       assist: "Doni",
  //     },
  //     {
  //       type: "goal",
  //       team: "home",
  //       player: "Aguan",
  //       minute: 40,
  //       assist: "Hendrik",
  //     },
  //     {
  //       type: "goal",
  //       team: "away",
  //       player: "Ali Muis",
  //       minute: 42,
  //     },
  //     {
  //       type: "goal",
  //       team: "home",
  //       player: "Hendrik",
  //       minute: 44,
  //       assist: "Aguan",
  //     },
  //     {
  //       type: "goal",
  //       team: "home",
  //       player: "Aguan",
  //       minute: 46,
  //       assist: "Hendrik",
  //     },
  //   ] as MatchEvent[],
  //   competition: "league",
  //   stage: "semifinal",
  // },

  // {
  //   homeTeamId: "sinchan",
  //   awayTeamId: "dragonball",
  //   score: "2 : 2",
  //   week: 10,

  //   date: "2026-04-9",
  //   time: "21:00",
  //   venue: "Lapangan B",
  //   events: [
  //     {
  //       type: "goal",
  //       team: "away",
  //       player: "Henry",
  //       minute: 12,
  //     },
  //     {
  //       type: "goal",
  //       team: "away",
  //       player: "Ryuzi",
  //       minute: 20,
  //     },
  //     {
  //       type: "goal",
  //       team: "home",
  //       player: "Raynaldo",
  //       minute: 36,
  //     },
  //     {
  //       type: "goal",
  //       team: "home",
  //       player: "Daniel",
  //       minute: 40,
  //       assist: "Tanado"
  //     },
  //   ] as MatchEvent[],
  //   competition: "league",
  //   stage: "final",
  // },
];

type MatchEvent = {
  assist: string;
  playerId: any;
  type: "goal" | "assist" | "yellow" | "red";
  team: "home" | "away";
  player: string;
  minute: number;
};
