import React from "react";

import { PageContainer } from "../commonStyled";

const StationView = ({ stationsReadings }) => (
  <PageContainer>
    {stationsReadings.map((reading, index) => (
      <div key={index}>{reading.device_id}</div>
    ))}
  </PageContainer>
);

export default StationView;
