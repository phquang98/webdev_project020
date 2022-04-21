import styled from "styled-components";

import Typography, { TypographyProps } from ".";

export const StyledTypography = styled(Typography)<TypographyProps>`
  & p {
    color: blue;
    font-size: ${(props) => props.styledFontSize ?? "1rem"};
  }
`;
