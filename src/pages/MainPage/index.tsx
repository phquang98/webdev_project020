import { BiRightArrow } from "react-icons/bi";
import { IconContext } from "react-icons";

import { StyledBanner } from "../../components/Banner/styles";
import { StyledCard } from "../../components/Card/styles";
import Anchor from "../../components/Link";
import { StyledAnchor } from "../../components/Link/styles";
import { StyledNavBar } from "../../components/NavBar/styles";
import { customTheme } from "../../styles";

type MainPageProps = {
  className?: string;
};

const heroLinkWrapperData = [
  "Information about coronavirus COVID-19",
  "Rules for entering Netherlands",
  "Checklist for transit or short stay in the Netherlands",
  "War in Ukraine",
  "Reception of refugees in Ukraine",
  "Which day are official public holidays in the Netherlands"
];

const MainPage = (props: MainPageProps): JSX.Element => {
  const { className } = props;

  return (
    <>
      <div className={className}>
        <StyledBanner bannerText="Government of the Netherlands" />
        <StyledNavBar />

        <section className="heroSection">
          <StyledCard styledHeight="10rem" styledWidth="24rem">
            <div className="heroLinkWrapper">
              {heroLinkWrapperData.map((ele, index) => {
                return (
                  <div key={index.toString()}>
                    <IconContext.Provider value={{ color: customTheme.light.primary, size: "0.75rem" }}>
                      <BiRightArrow className="heroIcon" />
                      <StyledAnchor
                        anchorArrival="/"
                        styledTextColor={customTheme.light.primary}
                        styledFontSize="0.75rem"
                        textData={ele}
                      />
                    </IconContext.Provider>
                  </div>
                );
              })}
            </div>
          </StyledCard>
        </section>
      </div>
    </>
  );
};

export default MainPage;

// https://developer.mozilla.org/en-US/docs/Web/CSS/position
