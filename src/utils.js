import theme from "./theme";

export const getDeviceTypeColor = deviceType => theme.colors[deviceType.toLowerCase()];

export const getRecentReading = ({readings}) => readings[readings.length - 1];