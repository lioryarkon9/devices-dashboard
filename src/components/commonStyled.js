import styled from "styled-components";

import { getEcoPlantTypeColor } from "../utils";
import theme from "../theme";

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
  margin-top: 5px;
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

export const WideScreenGraph = styled.div`
  width: 800px;
  height: 600px;
`;

export const EcoPlantType = styled.span`
  font-size: 14px;
  color: ${({ type }) => getEcoPlantTypeColor({ type, theme })};
`;
