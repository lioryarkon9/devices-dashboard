import React from "react";
import { useMedia } from "react-use-media";
import styled from "styled-components";
import { Link } from "react-router-dom";

import theme from "../../theme";
import { getRecentReading, getEcoPlantTypeColor } from "../../utils";

import { PageContainer, PageTitle, MaxWidthContainer } from "../commonStyled";
import OverviewTable from "../OverviewTable";

const OverviewPage = ({ deviceReadings }) => {
  const isSmallScreen = useMedia({ maxWidth: theme.maxSmallScreenWidth });

  return (
    <MaxWidthContainer>
      <PageContainer>
        <PageTitle>Overview</PageTitle>

        <GoToStationView to="/station-view">Station View</GoToStationView>

        {isSmallScreen ? (
          <OverviewList>
            {Object.values(deviceReadings).map((device) => (
              <Device to={`/drilldown/${device.id}`} key={device.id}>
                <TypeIndicator
                  deviceType={getRecentReading(device).deviceType}
                />
                <Id>{device.id}</Id>
                <Status>{getRecentReading(device).status}</Status>
              </Device>
            ))}
          </OverviewList>
        ) : (
          <OverviewTable deviceReadings={deviceReadings} />
        )}
      </PageContainer>
    </MaxWidthContainer>
  );
};

const OverviewList = styled.div`
  margin-top: 5px;
`;

const GoToStationView = styled(Link)`
  color: ${theme.colors.text};
  margin-left: 5px;
`;

const Status = styled.div`
  width: 30%;
`;

const Id = styled.div`
  flex-grow: 1;
`;

const Device = styled(Link)`
  display: flex;
  justify-content: space-between;
  text-decoration: none;
  color: ${theme.colors.text};
  padding: 8px 5px;
  border-top: 1px solid ${theme.colors.border};

  &:first-child {
    border-top: none;
  }
`;

const TypeIndicator = styled.div`
  width: 20px;
  background-color: ${({ deviceType }) =>
    getEcoPlantTypeColor({ type: deviceType, theme })};
  border-radius: 10px;
  margin-right: 8px;
  box-shadow: 0 0 2px 2px ${theme.colors.border};
`;

export default OverviewPage;
