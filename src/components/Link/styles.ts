import { Link } from "react-router-dom";
import styled from "styled-components";

import Anchor from ".";

export const StyledAnchor = styled(Anchor)`
  & {
    text-decoration: none;
    color: ${(props) => props.styledTextColor ?? "white"};
    font-size: ${(props) => props.styledFontSize ?? props.theme.defaultFontSize};
  }

  &:hover {
    text-decoration: underline;
  }
`;
