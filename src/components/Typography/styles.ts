import styled from "styled-components";

import Typography, { TypographyProps } from ".";

type TypographyStyledProps = {
  fontSize: number;
};

// export const StyledTypography = styled.div<TypographyStyledProps>`
//   background-color: ${(props) => props.bgClr};
//   color: ${(props) => props.clr};
// `;

export const StyledTypography = styled(Typography)<TypographyProps>`
  & p {
    color: blue;
    font-size: ${(props) => props.styledFontSize ?? "1rem"};
  }
`;
