import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { getEcoPlantTypeColor, getRecentReading } from "../utils";
import theme from "../theme";

const OverviewTable = ({ deviceReadings }) => (
  <Container>
    <HeaderRow>
      <TextTitle>ID</TextTitle>
      <DigitsTitle>Pressure</DigitsTitle>
      <DigitsTitle>Temp.</DigitsTitle>
      <DigitsTitle>Volume</DigitsTitle>
      <TextTitle>Type</TextTitle>
      <TextTitle>Status</TextTitle>
    </HeaderRow>

    <Body>
      {Object.values(deviceReadings).map(({ id, readings }) => (
        <DeviceRow key={id} to={`/drilldown/${id}`}>
          <TextCell>{id}</TextCell>
          <DigitsCell>{getRecentReading({readings}).pressure}</DigitsCell>
          <DigitsCell>{getRecentReading({readings}).temp}</DigitsCell>
          <DigitsCell>{getRecentReading({readings}).volume}</DigitsCell>
          <TextCell deviceType={getRecentReading({readings}).deviceType}>
            {getRecentReading({readings}).deviceType}
          </TextCell>
          <TextCell>{getRecentReading({readings}).status}</TextCell>
        </DeviceRow>
      ))}
    </Body>
  </Container>
);

const Container = styled.div`
  padding: 5px;
`;

const DeviceRow = styled(Link)`
  text-decoration: none;
  display: flex;
  border-top: 1px solid ${theme.colors.border};
`;

const Body = styled.div`
  margin-top: 5px;
`;

const HeaderRow = styled.div`
  display: flex;
`;

const TextCell = styled.div`
  width: 23.33%;
  padding: 5px;
  text-align: center;
  color: ${({ deviceType }) =>
    deviceType
      ? getEcoPlantTypeColor({ type: deviceType, theme })
      : theme.colors.text};
`;

const DigitsCell = styled.div`
  width: 15%;
  text-align: center;
  padding: 5px;
  color: ${theme.colors.text};
`;

const TitleCell = styled.div`
  padding: 5px;
  text-align: center;
  color: ${theme.colors.label};
  font-weight: bold;
`;

const TextTitle = styled(TitleCell)`
  width: 23.33%;
`;

const DigitsTitle = styled(TitleCell)`
  width: 15%;
`;

export default OverviewTable;
