export const getEcoPlantTypeColor = ({ type, theme }) =>
  theme.colors[type.toLowerCase()];

export const getRecentReading = ({ readings }) => readings[readings.length - 1];
