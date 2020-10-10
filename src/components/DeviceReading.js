import React from "react";
import styled from "styled-components";

import theme from "../theme";

const DeviceReading = ({label, value}) => (
  <Container>
    <Label>{label}</Label>
    <Value>{value}</Value>
  </Container>
);

const Label = styled.div`
  color: ${theme.colors.label};
  margin-bottom: 8px;

  @media only screen and (max-width: ${theme.maxSmallScreenWidth}) {
    width: 60%;
    margin-bottom: 0;
  }
`;

const Value = styled.div`
  @media only screen and (max-width: ${theme.maxSmallScreenWidth}) {
    width: 40%;
    text-align: right;
  }
`;

const Container = styled.div`
  flex-grow: 1;

  border: 1px solid;
  margin: 5px;
  padding: 20px;
  border-radius: 10px;

  @media only screen and (max-width: ${theme.maxSmallScreenWidth}) {
    width: 100%;
    display: flex;
  }
`;

export default DeviceReading;