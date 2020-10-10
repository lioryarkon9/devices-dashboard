const theme = {
  colors: {
    pageBackground: "#fff",
    text: "#6f818c",
    pageTitle: "#359ef8",
    label: "#707070",
    border: "#dfe5e8",
    pressure: "#44ccf7",
    temperature: "#95c121",
    volume: "#fcd948",
    stationGraph: "#44ccf7",
  },
  maxSmallScreenWidth: "700px",
};

export const desktopGraphConfig = {
  getReadings: (graphId, readings) =>
    readings.map((reading) => reading[graphId]),
  pressure: {
    graphColor: theme.colors.pressure,
  },
  temp: {
    graphColor: theme.colors.temperature,
  },
  volume: {
    graphColor: theme.colors.volume,
  },
};

export default theme;
