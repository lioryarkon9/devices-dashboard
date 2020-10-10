import React from "react";
import { useMedia } from "react-use-media";
import styled from "styled-components";
import { Link } from "react-router-dom";

import theme from "../../theme";

import { PageContainer, PageTitle, MaxWidthContainer } from "../commonStyled";
import OverviewTable from "../OverviewTable";

const OverviewPage = ({ deviceReadings }) => {
  const isSmallScreen = useMedia({ maxWidth: theme.maxSmallScreenWidth });

  return (
    <MaxWidthContainer>
      <PageContainer>
        <PageTitle>Overview</PageTitle>

        {isSmallScreen ? (
          <div>
            {Object.values(deviceReadings).map((device) => (
              <Device to={`/drilldown/${device.id}`} key={device.id}>
                <Id>{device.id}</Id>
                <Status>
                  {device.readings[device.readings.length - 1].status}
                </Status>
              </Device>
            ))}
          </div>
        ) : (
          <OverviewTable deviceReadings={deviceReadings} />
        )}
      </PageContainer>
    </MaxWidthContainer>
  );
};

const Status = styled.div`
  width: 35%;
`;

const Id = styled.div`
  width: 65%;
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

export default OverviewPage;
