import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import { useMedia } from "react-use-media";

import theme, { desktopGraphConfig } from "../../theme";
import { getRecentReading } from "../../utils";

import {
  GraphContainer,
  Graph,
  PageTitle,
  PageContainer,
  MaxWidthContainer,
  RecentReadings,
  EcoPlantType,
} from "../commonStyled";
import EcoPlantReading from "../EcoPlantReading";
import SmallScreenGraphs from "../SmallScreenGraphs";

const StationView = ({ stationsReadings }) => {
  const isSmallScreen = useMedia({ maxWidth: theme.maxSmallScreenWidth });

  const [desktopModeGraphId, setDesktopModeGraphId] = useState("pressure");

  const recentReading = getRecentReading({ readings: stationsReadings });

  return (
    <MaxWidthContainer>
      <PageContainer>
        <PageTitle>
          Station View{" "}
          <EcoPlantType type={recentReading.device_type}>
            ({recentReading.device_type})
          </EcoPlantType>
        </PageTitle>

        <RecentReadings>
          <EcoPlantReading
            desktopConfig={
              !isSmallScreen && {
                setGraphId: () => setDesktopModeGraphId("pressure"),
                isSelected: desktopModeGraphId === "pressure",
              }
            }
            label="Pressure"
            value={stationsReadings[stationsReadings.length - 1].pressure}
          />
          <EcoPlantReading
            desktopConfig={
              !isSmallScreen && {
                setGraphId: () => setDesktopModeGraphId("temp"),
                isSelected: desktopModeGraphId === "temp",
              }
            }
            label="Temperature"
            value={stationsReadings[stationsReadings.length - 1].temp}
          />
          <EcoPlantReading
            desktopConfig={
              !isSmallScreen && {
                setGraphId: () => setDesktopModeGraphId("volume"),
                isSelected: desktopModeGraphId === "volume",
              }
            }
            label="Volume"
            value={stationsReadings[stationsReadings.length - 1].volume}
          />
        </RecentReadings>

        {isSmallScreen ? (
          <SmallScreenGraphs
            pressure={{
              label: "Pressure",
              graphColor: theme.colors.pressure,
              readings: stationsReadings.map((reading) => reading.pressure),
            }}
            temperature={{
              label: "Temperature",
              graphColor: theme.colors.temperature,
              readings: stationsReadings.map((reading) => reading.temp),
            }}
            volume={{
              label: "Volume",
              graphColor: theme.colors.volume,
              readings: stationsReadings.map((reading) => reading.volume),
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
                        stationsReadings
                      ),
                    },
                  ],
                }}
                height={600}
                width={800}
                options={{
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

export default StationView;
