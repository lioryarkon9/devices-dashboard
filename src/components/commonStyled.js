import styled from "styled-components";

import theme from "../theme";

export const PageContainer = styled.div`
  padding: 5px;
  min-height: 100%;
  background-color: ${theme.colors.pageBackground};
`;

export const PageTitle = styled.h2`
  color: ${theme.colors.pageTitle};
  text-align: center;
`;
