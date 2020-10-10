import React from "react";
import { Line } from "react-chartjs-2";
import styled from "styled-components";

import theme from "../theme";

import { PageContainer, MaxWidthContainer, PageTitle } from "./commonStyled";
import DeviceReading from "./DeviceReading";

const DrillDown = ({ currentDevice }) => (
  <MaxWidthContainer>
    <PageContainer>
      <PageTitle>Drilldown View</PageTitle>

      <DeviceRecentReadings>
        <DeviceReading
          label="Prassure"
          value={currentDevice.readings[currentDevice.readings.length - 1].pressure}
        />
        <DeviceReading
          label="Temperature"
          value={currentDevice.readings[currentDevice.readings.length - 1].temp}
        />
        <DeviceReading
          label="Volume"
          value={currentDevice.readings[currentDevice.readings.length - 1].volume}
        />
      </DeviceRecentReadings>
    </PageContainer>
  </MaxWidthContainer>
);

const DeviceRecentReadings = styled.div`
  display: flex;

  @media only screen and (max-width: 700px) {
    flex-wrap: wrap;
  }
`;

export default DrillDown;
