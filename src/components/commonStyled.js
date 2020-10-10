import styled from "styled-components";

import theme from "../theme";
import {getDeviceTypeColor} from "../utils";

export const PageContainer = styled.div`
  width: 100%;
  padding: 5px;
  min-height: 100%;
  background-color: ${theme.colors.pageBackground};
  max-width: 1700px;
  color: ${theme.colors.text};
`;

export const MaxWidthContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const PageTitle = styled.h2`
  color: ${theme.colors.pageTitle};
  text-align: center;
`;

export const RecentReadings = styled.div`
  display: flex;

  @media only screen and (max-width: ${theme.maxSmallScreenWidth}) {
    flex-wrap: wrap;
  }
`;

export const GraphContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
`;

export const Graph = styled.div`
  width: 800px;
  height: 600px;
`;