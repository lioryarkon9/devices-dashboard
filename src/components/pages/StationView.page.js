import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import { Link } from "react-router-dom";
import { useMedia } from "react-use-media";
import styled from "styled-components";

import theme, { desktopGraphConfig } from "../../theme";
import { getRecentReading } from "../../utils";

import {
  GraphContainer,
  WideScreenGraph,
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

        <GoToOverview to="/">Overview</GoToOverview>

        <RecentReadings>
          <EcoPlantReading
            desktopConfig={
              !isSmallScreen && {
                setGraphId: () => setDesktopModeGraphId("pressure"),
                isSelected: desktopModeGraphId === "pressure",
              }
            }
            label="Pressure"
            value={recentReading.pressure}
          />
          <EcoPlantReading
            desktopConfig={
              !isSmallScreen && {
                setGraphId: () => setDesktopModeGraphId("temp"),
                isSelected: desktopModeGraphId === "temp",
              }
            }
            label="Temperature"
            value={recentReading.temp}
          />
          <EcoPlantReading
            desktopConfig={
              !isSmallScreen && {
                setGraphId: () => setDesktopModeGraphId("volume"),
                isSelected: desktopModeGraphId === "volume",
              }
            }
            label="Volume"
            value={recentReading.volume}
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
            <WideScreenGraph>
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
                  maintainAspectRatio: true,
                  responsive: false,
                  legend: { display: false },
                }}
              />
            </WideScreenGraph>
          </GraphContainer>
        )}
      </PageContainer>
    </MaxWidthContainer>
  );
};

const GoToOverview = styled(Link)`
  color: ${theme.colors.text};
  margin-left: 10px;
`;

export default StationView;
