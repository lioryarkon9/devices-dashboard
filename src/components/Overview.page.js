import React from "react";
import { useMedia } from "react-use-media";
import styled from "styled-components";

import { PageContainer, PageTitle } from "./commonStyled";

import OverviewTable from "./OverviewTable";

const OverviewPage = ({ deviceReadings }) => {
  const isSmallScreen = useMedia({ maxWidth: 700 });

  return (
    <PageContainer>
      <PageTitle>Overview</PageTitle>

      {isSmallScreen ? (
        <DevicesList>
          {Object.values(deviceReadings).map((device) => (
            <Device key={device.id}>
              <div>{device.id}</div>
              <div>{device.readings[device.readings.length - 1].status}</div>
            </Device>
          ))}
        </DevicesList>
      ) : (
        <OverviewTable deviceReadings={deviceReadings} />
      )}
    </PageContainer>
  );
};

const DevicesList = styled.div``;

const Device = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default OverviewPage;
