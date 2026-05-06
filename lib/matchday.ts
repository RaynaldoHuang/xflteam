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
    score: "2 : 2",
    week: 1,
    date: "2026-04-23",
    time: "20:00",
    venue: "Lapangan B",
    events: [
      {
        type: "goal",
        team: "home",
        player: "Calvin",
        minute: 2,
        assist: "Agung",
      },
      {
        type: "goal",
        team: "home",
        player: "William J",
        minute: 13,
        assist: "Hendrik",
      },

      {
        type: "goal",
        team: "away",
        player: "YHM",
        minute: 11,
      },
      {
        type: "goal",
        team: "away",
        player: "YHM",
        minute: 29,
        assist: "Doni",
      },
    ] as unknown as MatchEvent[],
    competition: "league",
    stage: "group",
  },
  {
    homeTeamId: "paraguay",
    awayTeamId: "arabsaudi",
    score: "4 : 7",
    week: 1,

    date: "2026-04-23",
    time: "20:00",
    venue: "Lapangan C",
    events: [
      {
        type: "goal",
        team: "home",
        player: "Sandy",
        minute: 29,
      },
      {
        type: "goal",
        team: "home",
        player: "Tanado",
        minute: 30,
      },

      {
        type: "goal",
        team: "home",
        player: "Rbon",
        minute: 36,
        assist: "Riko",
      },
      {
        type: "goal",
        team: "home",
        player: "Wendy",
        minute: 39,
        assist: "Rbon",
      },

      {
        type: "goal",
        team: "away",
        player: "Henry",
        minute: 19,
        assist: "Ferry",
      },
      {
        type: "goal",
        team: "away",
        player: "Ali muis",
        minute: 21,
        assist: "Desmond",
      },
      {
        type: "goal",
        team: "away",
        player: "Gil",
        minute: 24,
        assist: "Ferry",
      },
      {
        type: "goal",
        team: "away",
        player: "Titus",
        minute: 25,
      },
      {
        type: "goal",
        team: "away",
        player: "Titus",
        minute: 33,
        assist: "Iman",
      },
      {
        type: "goal",
        team: "away",
        player: "Henry",
        minute: 45,
        assist: "Titus",
      },
      {
        type: "goal",
        team: "away",
        player: "Gil",
        minute: 47,
        assist: "Titus",
      },
    ] as unknown as MatchEvent[],
    competition: "league",
    stage: "group",
  },
  {
    homeTeamId: "skotlandia",
    awayTeamId: "qatar",
    score: "3 : 1",
    week: 1,

    date: "2026-04-23",
    time: "21:00",
    venue: "Lapangan B",
    events: [
      {
        type: "goal",
        team: "home",
        player: "Awai",
        minute: 3,
        assist: "Will",
      },
      {
        type: "goal",
        team: "home",
        player: "Awai",
        minute: 33,
      },
      {
        type: "goal",
        team: "home",
        player: "Awai",
        minute: 35,
      },
      {
        type: "goal",
        team: "away",
        player: "Budju",
        minute: 32,
        assist: "Devian",
      },
    ] as unknown as MatchEvent[],
    competition: "league",
    stage: "group",
  },

  {
    homeTeamId: "uzbekistan",
    awayTeamId: "afsel",
    score: "5 : 1",
    week: 1,

    date: "2026-04-23",
    time: "21:00",
    venue: "Lapangan C",
    events: [
      {
        type: "goal",
        team: "home",
        player: "Ceking",
        minute: 11,
        assist: "Darent",
      },
      {
        type: "goal",
        team: "home",
        player: "Jervis",
        minute: 16,
      },
      {
        type: "goal",
        team: "home",
        player: "Ceking",
        minute: 36,
        assist: "H Simon",
      },
      {
        type: "goal",
        team: "home",
        player: "H Simon",
        minute: 42,
        assist: "Jervis",
      },
      {
        type: "goal",
        team: "home",
        player: "H Simon",
        minute: 44,
        assist: "Ceking",
      },{
        type: "goal",
        team: "away",
        player: "Podiman",
        minute: 8,
      },
    ] as unknown as MatchEvent[],
    competition: "league",
    stage: "group",
  },

  //week2
  {
    homeTeamId: "skotlandia",
    awayTeamId: "arabsaudi",
    score: "4 : 3",
    week: 2,
    date: "2026-04-30",
    time: "20:00",
    venue: "Lapangan B",
    events: [
      {
        type: "goal",
        team: "home",
        player: "Awai",
        minute: 8,
      },
      {
        type: "goal",
        team: "home",
        player: "Fauzi",
        minute: 32,
      },
      {
        type: "goal",
        team: "home",
        player: "Winsen Jr",
        minute: 41,
        assist: "Awai",
      },
      {
        type: "goal",
        team: "home",
        player: "Awai",
        minute: 43,
        assist: "Bejo",
      },

      {
        type: "goal",
        team: "away",
        player: "Erik",
        minute: 11,
        assist: "Titus",
      },
      {
        type: "goal",
        team: "away",
        player: "Fico",
        minute: 16,
      },
      {
        type: "goal",
        team: "away",
        player: "Iman",
        minute: 31,
      },

      {
        type: "yellow",
        team: "away",
        player: "Ferry",
        minute: 11,
      },
    ] as MatchEvent[],
    competition: "league",
    stage: "group",
  },

  {
    homeTeamId: "uzbekistan",
    awayTeamId: "norway",
    score: "3 : 3",
    week: 2,
    date: "2026-04-30",
    time: "20:00",
    venue: "Lapangan C",
    events: [
      {
        type: "goal",
        team: "home",
        player: "H Simon",
        minute: 4,
        assist: "Ceking"
      },
      {
        type: "goal",
        team: "home",
        player: "Darent",
        minute: 10,
      },
      {
        type: "goal",
        team: "home",
        player: "Ceking",
        minute: 35,
        assist: "Fendy"
      },

      {
        type: "goal",
        team: "away",
        player: "Agust",
        minute: 7,
        assist: "Zhong Yen"
      },
      {
        type: "goal",
        team: "away",
        player: "Awen",
        minute: 23,
        assist: "Dimas"
      },
      {
        type: "goal",
        team: "away",
        player: "Awen",
        minute: 46,
        assist: "Dimas"
      },

      {
        type: "yellow",
        team: "home",
        player: "Wisnu",
        minute: 25,
      },
    ] as MatchEvent[],
    competition: "league",
    stage: "group",
  },

  {
    homeTeamId: "pantaigading",
    awayTeamId: "afsel",
    score: "2 : 3",
    week: 2,

    date: "2026-04-30",
    time: "21:00",
    venue: "Lapangan B",
    events: [
      {
        type: "goal",
        team: "away",
        player: "Stevie",
        minute: 16,
        assist :"Nino"
      },
      {
        type: "goal",
        team: "away",
        player: "Johanes",
        minute: 24,
      },
      {
        type: "goal",
        team: "away",
        player: "Johanes",
        minute: 30,
        assist :"Podiman"
      },
      {
        type: "yellow",
        team: "away",
        player: "Cipta",
        minute: 35,
      },

      {
        type: "goal",
        team: "home",
        player: "Agung",
        minute: 18,
        assist :"Calvin"
      },
      {
        type: "goal",
        team: "home",
        player: "Hendrik",
        minute: 21,
      },
    ] as MatchEvent[],
    competition: "league",
    stage: "group",
  },

  {
    homeTeamId: "qatar",
    awayTeamId: "paraguay",
    score: "2 : 3",
    week: 2,

    date: "2026-04-30",
    time: "21:00",
    venue: "Lapangan C",
    events: [
      {
        type: "goal",
        team: "home",
        player: "Mitra",
        minute: 8,
      },
      {
        type: "goal",
        team: "home",
        player: "Devian",
        minute: 20,
        assist : "Budju"
      },

      {
        type: "goal",
        team: "away",
        player: "Rbon",
        minute: 8,
        assist : "Riko"
      },
      {
        type: "goal",
        team: "away",
        player: "Rbon",
        minute: 12,
      },
      {
        type: "goal",
        team: "away",
        player: "Bayu",
        minute: 15,
      },
      {
        type: "yellow",
        team: "away",
        player: "Riko",
        minute: 40,
      },
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
    events: [] as MatchEvent[],
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
    events: [] as MatchEvent[],
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
    events: [] as MatchEvent[],
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
    events: [] as MatchEvent[],
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
    events: [] as MatchEvent[],
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
    events: [] as MatchEvent[],
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
    events: [] as MatchEvent[],
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
    events: [] as MatchEvent[],
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
    events: [] as MatchEvent[],
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
    events: [] as MatchEvent[],
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
    events: [] as MatchEvent[],
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
    events: [] as MatchEvent[],
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
    events: [] as MatchEvent[],
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
    events: [] as MatchEvent[],
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
    events: [] as MatchEvent[],
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
    events: [] as MatchEvent[],
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
    events: [] as MatchEvent[],
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
    events: [] as MatchEvent[],
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
    events: [] as MatchEvent[],
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
    events: [] as MatchEvent[],
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
    events: [] as MatchEvent[],
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
    events: [] as MatchEvent[],
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
    events: [] as MatchEvent[],
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
    events: [] as MatchEvent[],
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
    events: [] as MatchEvent[],
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
    events: [] as MatchEvent[],
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
    events: [] as MatchEvent[],
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
    events: [] as MatchEvent[],
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
    events: [] as MatchEvent[],
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
    events: [] as MatchEvent[],
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
    events: [] as MatchEvent[],
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
    events: [] as MatchEvent[],
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
