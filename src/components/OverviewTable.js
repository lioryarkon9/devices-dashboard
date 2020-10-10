import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import {getDeviceTypeColor} from "../utils";
import theme from "../theme";

const OverviewTable = ({ deviceReadings }) => (
  <Container>
    <HeaderRow>
      <TextTitle>Device ID</TextTitle>
      <DigitsTitle>Pressure</DigitsTitle>
      <DigitsTitle>Temp.</DigitsTitle>
      <DigitsTitle>Volume</DigitsTitle>
      <TextTitle>Status</TextTitle>
    </HeaderRow>

    <Body>
      {Object.values(deviceReadings).map(({ id, readings }) => (
        <DeviceRow key={id} to={`/drilldown/${id}`}>
          <TextCell deviceType={readings[readings.length - 1].deviceType}>{id}</TextCell>
          <DigitsCell>{readings[readings.length - 1].pressure}</DigitsCell>
          <DigitsCell>{readings[readings.length - 1].temp}</DigitsCell>
          <DigitsCell>{readings[readings.length - 1].volume}</DigitsCell>
          <TextCell>{readings[readings.length - 1].status}</TextCell>
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
  width: 35%;
  padding: 5px;
  text-align: center;
  color: ${({deviceType}) => deviceType ? getDeviceTypeColor(deviceType) : theme.colors.text};
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
  width: 35%;
`;

const DigitsTitle = styled(TitleCell)`
  width: 15%;
`;

export default OverviewTable;