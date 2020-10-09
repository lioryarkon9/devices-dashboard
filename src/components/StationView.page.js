import React from "react";
import { Line } from "react-chartjs-2";

import { PageContainer } from "./commonStyled";

const StationView = ({ stationsReadings }) => (
  <PageContainer>
    {stationsReadings.map((reading, index) => (
      <div key={index}>{reading.device_id}</div>
    ))}
  </PageContainer>
);

export default StationView;
