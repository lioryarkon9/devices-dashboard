import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import { useMedia } from "react-use-media";

import theme, { desktopGraphConfig } from "../../theme";

import {
  GraphContainer,
  Graph,
  PageContainer,
  MaxWidthContainer,
  PageTitle,
  RecentReadings,
} from "../commonStyled";
import EcoPlantReading from "../EcoPlantReading";
import SmallScreenGraphs from "../SmallScreenGraphs";

const DrillDown = ({ currentDevice }) => {
  const isSmallScreen = useMedia({ maxWidth: theme.maxSmallScreenWidth });

  const { readings } = currentDevice;

  const [desktopModeGraphId, setDesktopModeGraphId] = useState("pressure");

  return (
    <MaxWidthContainer>
      <PageContainer>
        <PageTitle>Device: {currentDevice.id}</PageTitle>

        <RecentReadings>
          <EcoPlantReading
            desktopConfig={
              !isSmallScreen && {
                setGraphId: () => setDesktopModeGraphId("pressure"),
                isSelected: desktopModeGraphId === "pressure",
              }
            }
            label="Pressure"
            value={
              currentDevice.readings[currentDevice.readings.length - 1].pressure
            }
          />
          <EcoPlantReading
            desktopConfig={
              !isSmallScreen && {
                setGraphId: () => setDesktopModeGraphId("temp"),
                isSelected: desktopModeGraphId === "temp",
              }
            }
            label="Temperature"
            value={
              currentDevice.readings[currentDevice.readings.length - 1].temp
            }
          />
          <EcoPlantReading
            desktopConfig={
              !isSmallScreen && {
                setGraphId: () => setDesktopModeGraphId("volume"),
                isSelected: desktopModeGraphId === "volume",
              }
            }
            label="Volume"
            value={
              currentDevice.readings[currentDevice.readings.length - 1].volume
            }
          />
        </RecentReadings>

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

export default DrillDown;
