import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

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
        <DeviceRecord key={id} to={`/drilldown/${id}`}>
          <TextCell>{id}</TextCell>
          <DigitsCell>{readings[readings.length - 1].pressure}</DigitsCell>
          <DigitsCell>{readings[readings.length - 1].temp}</DigitsCell>
          <DigitsCell>{readings[readings.length - 1].volume}</DigitsCell>
          <TextCell>{readings[readings.length - 1].status}</TextCell>
        </DeviceRecord>
      ))}
    </Body>
  </Container>
);

const Container = styled.div`
  padding: 5px;
`;

const DeviceRecord = styled(Link)`
  display: flex;
  border-top: 1px solid ${theme.colors.border};
  text-decoration: none;
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
  color: ${theme.colors.text};
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
