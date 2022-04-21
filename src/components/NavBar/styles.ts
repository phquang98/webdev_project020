import styled from "styled-components";

import NavBar from ".";

export const StyledNavBar = styled(NavBar)`
  & {
    padding: 0 4rem;
    min-height: 3rem;
    background-color: ${(props) => props.theme.light.primary};
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .navigationWrapper {
    width: 50%;
    display: flex;
    justify-content: space-evenly;
  }
`;
