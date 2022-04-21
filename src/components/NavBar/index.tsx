import { useState } from "react";
import Anchor from "../Link";
import { StyledAnchor } from "../Link/styles";

const navBarData = [
  {
    textData: "Latest",
    anchorArrival: "/"
  },
  {
    textData: "Topic",
    anchorArrival: "/"
  },
  {
    textData: "Ministries",
    anchorArrival: "/"
  },
  {
    textData: "Government",
    anchorArrival: "/"
  },
  {
    textData: "Documents",
    anchorArrival: "/"
  }
];

type NavBarProps = {
  className?: string;
};

const NavBar = (prop: NavBarProps): JSX.Element => {
  const { className } = prop;

  return (
    <>
      <div className={className}>
        <StyledAnchor anchorArrival="/" textData="Home" />

        <div className="navigationWrapper">
          {navBarData.map((ele, index) => {
            return (
              <StyledAnchor
                anchorArrival={ele.anchorArrival}
                textData={ele.textData}
                styledFontSize="0.75rem"
                key={index.toString()}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default NavBar;
