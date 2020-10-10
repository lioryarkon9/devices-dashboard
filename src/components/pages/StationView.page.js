import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import { useMedia } from "react-use-media";

import theme, { desktopGraphConfig } from "../../theme";

import {
  GraphContainer,
  Graph,
  PageTitle,
  PageContainer,
  MaxWidthContainer,
  RecentReadings,
} from "../commonStyled";
import EcoPlantReading from "../EcoPlantReading";
import SmallScreenGraphs from "../SmallScreenGraphs";

const StationView = ({ stationsReadings }) => {
  const isSmallScreen = useMedia({ maxWidth: theme.maxSmallScreenWidth });

  const [desktopModeGraphId, setDesktopModeGraphId] = useState("pressure");

  return (
    <MaxWidthContainer>
      <PageContainer>
        <PageTitle>Station View</PageTitle>

        <RecentReadings>
          <EcoPlantReading
            setGraphId={() => setDesktopModeGraphId("pressure")}
            isSelectedInWideScreen={desktopModeGraphId === "pressure"}
            label="Pressure"
            value={stationsReadings[stationsReadings.length - 1].pressure}
          />
          <EcoPlantReading
            setGraphId={() => setDesktopModeGraphId("temp")}
            isSelectedInWideScreen={desktopModeGraphId === "temp"}
            label="Temperature"
            value={stationsReadings[stationsReadings.length - 1].temp}
          />
          <EcoPlantReading
            setGraphId={() => setDesktopModeGraphId("volume")}
            isSelectedInWideScreen={desktopModeGraphId === "volume"}
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

export default StationView;
