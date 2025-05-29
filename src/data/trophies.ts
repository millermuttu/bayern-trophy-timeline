
export const bayernTrophies = [
  // Bundesliga Titles
  { year: 1969, competition: "Bundesliga", type: "bundesliga" as const },
  { year: 1972, competition: "Bundesliga", type: "bundesliga" as const },
  { year: 1973, competition: "Bundesliga", type: "bundesliga" as const },
  { year: 1974, competition: "Bundesliga", type: "bundesliga" as const },
  { year: 1980, competition: "Bundesliga", type: "bundesliga" as const },
  { year: 1981, competition: "Bundesliga", type: "bundesliga" as const },
  { year: 1985, competition: "Bundesliga", type: "bundesliga" as const },
  { year: 1986, competition: "Bundesliga", type: "bundesliga" as const },
  { year: 1987, competition: "Bundesliga", type: "bundesliga" as const },
  { year: 1989, competition: "Bundesliga", type: "bundesliga" as const },
  { year: 1990, competition: "Bundesliga", type: "bundesliga" as const },
  { year: 1994, competition: "Bundesliga", type: "bundesliga" as const },
  { year: 1997, competition: "Bundesliga", type: "bundesliga" as const },
  { year: 1999, competition: "Bundesliga", type: "bundesliga" as const },
  { year: 2000, competition: "Bundesliga", type: "bundesliga" as const },
  { year: 2001, competition: "Bundesliga", type: "bundesliga" as const },
  { year: 2003, competition: "Bundesliga", type: "bundesliga" as const },
  { year: 2005, competition: "Bundesliga", type: "bundesliga" as const },
  { year: 2006, competition: "Bundesliga", type: "bundesliga" as const },
  { year: 2008, competition: "Bundesliga", type: "bundesliga" as const },
  { year: 2010, competition: "Bundesliga", type: "bundesliga" as const },
  { year: 2013, competition: "Bundesliga", type: "bundesliga" as const },
  { year: 2014, competition: "Bundesliga", type: "bundesliga" as const },
  { year: 2015, competition: "Bundesliga", type: "bundesliga" as const },
  { year: 2016, competition: "Bundesliga", type: "bundesliga" as const },
  { year: 2017, competition: "Bundesliga", type: "bundesliga" as const },
  { year: 2018, competition: "Bundesliga", type: "bundesliga" as const },
  { year: 2019, competition: "Bundesliga", type: "bundesliga" as const },
  { year: 2020, competition: "Bundesliga", type: "bundesliga" as const },
  { year: 2021, competition: "Bundesliga", type: "bundesliga" as const },
  { year: 2022, competition: "Bundesliga", type: "bundesliga" as const },
  { year: 2023, competition: "Bundesliga", type: "bundesliga" as const },

  // Champions League / European Cup Titles
  { year: 1974, competition: "European Cup", type: "champions-league" as const },
  { year: 1975, competition: "European Cup", type: "champions-league" as const },
  { year: 1976, competition: "European Cup", type: "champions-league" as const },
  { year: 2001, competition: "Champions League", type: "champions-league" as const },
  { year: 2013, competition: "Champions League", type: "champions-league" as const },
  { year: 2020, competition: "Champions League", type: "champions-league" as const },
];

export const bundesligaTrophies = bayernTrophies.filter(trophy => trophy.type === "bundesliga");
export const championsLeagueTrophies = bayernTrophies.filter(trophy => trophy.type === "champions-league");
