import styled from "styled-components";

import theme from "../theme";

export const PageContainer = styled.div`
  width: 100%;
  padding: 5px;
  min-height: 100%;
  background-color: ${theme.colors.pageBackground};
  max-width: 1600px;
`;

export const MaxWidthContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const PageTitle = styled.h2`
  color: ${theme.colors.pageTitle};
  text-align: center;
`;
