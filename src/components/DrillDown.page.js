import React from "react";
import { Line } from "react-chartjs-2";

import { PageContainer } from "./commonStyled";

const DrillDown = ({ currentDevice }) => (
  <PageContainer>{currentDevice.id}</PageContainer>
);

export default DrillDown;
