import styled from "styled-components";

import MainPage from ".";

export const StyledMainPage = styled(MainPage)`
  & .heroSection {
    padding: 2rem 3rem;
    background-image: url("https://www.afdb.org/sites/default/files/styles/1700x900/public/netherlands.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50% 50%;
  }

  .heroLinkWrapper {
    height: 100%;
    width: 100%;
    padding-left: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }

  .heroIcon {
    position: relative;
    top: 2px;
    right: 6px;
  }
`;
