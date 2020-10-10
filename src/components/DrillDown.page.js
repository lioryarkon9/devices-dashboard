import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import styled from "styled-components";
import { useMedia } from "react-use-media";

import theme from "../theme";

import { PageContainer, MaxWidthContainer, PageTitle } from "./commonStyled";
import DeviceReading from "./DeviceReading";
import SmallScreenGraphs from "./SmallScreenGraphs";

const desktopGraphConfig = {
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

const DrillDown = ({ currentDevice }) => {
  const isSmallScreen = useMedia({ maxWidth: theme.maxSmallScreenWidth });

  const { readings } = currentDevice;

  const [desktopModeGraphId, setDesktopModeGraphId] = useState("pressure");

  return (
    <MaxWidthContainer>
      <PageContainer>
        <PageTitle>Device: {currentDevice.id}</PageTitle>

        <DeviceRecentReadings>
          <DeviceReading
            setGraphId={() => setDesktopModeGraphId("pressure")}
            isSelectedInWideScreen={desktopModeGraphId === "pressure"}
            label="Pressure"
            value={
              currentDevice.readings[currentDevice.readings.length - 1].pressure
            }
          />
          <DeviceReading
            setGraphId={() => setDesktopModeGraphId("temp")}
            isSelectedInWideScreen={desktopModeGraphId === "temp"}
            label="Temperature"
            value={
              currentDevice.readings[currentDevice.readings.length - 1].temp
            }
          />
          <DeviceReading
            setGraphId={() => setDesktopModeGraphId("volume")}
            isSelectedInWideScreen={desktopModeGraphId === "volume"}
            label="Volume"
            value={
              currentDevice.readings[currentDevice.readings.length - 1].volume
            }
          />
        </DeviceRecentReadings>

        {isSmallScreen ? (
          <SmallScreenGraphs
            pressure={{
              label: "Pressure",
              graphColor: theme.colors.pressure,
              readings: readings.map((reading) => reading.pressure),
            }}
            temperature={{
              label: "Temperature",
              graphColor: theme.colors.temperature,
              readings: readings.map((reading) => reading.temp),
            }}
            volume={{
              label: "Volume",
              graphColor: theme.colors.volume,
              readings: readings.map((reading) => reading.volume),
            }}
          />
        ) : (
          <GraphContainer>
            <Graph>
              <Line
                data={{
                  datasets: [
                    {
                      borderColor:
                        desktopGraphConfig[desktopModeGraphId].graphColor,
                      data: desktopGraphConfig.getReadings(
                        desktopModeGraphId,
                        readings
                      ),
                    },
                  ],
                }}
                height={600}
                width={800}
                options={{
                  maintainAspectRatio: false,
                  legend: { display: false },
                }}
              />
            </Graph>
          </GraphContainer>
        )}
      </PageContainer>
    </MaxWidthContainer>
  );
};

const GraphContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
`;

const Graph = styled.div`
  width: 800px;
  height: 600px;
`;

const DeviceRecentReadings = styled.div`
  display: flex;

  @media only screen and (max-width: ${theme.maxSmallScreenWidth}) {
    flex-wrap: wrap;
  }
`;

export default DrillDown;
