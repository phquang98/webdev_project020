import { StyledBanner } from "../../components/Banner/styles";
import { StyledTypography } from "../../components/Typography/styles";

const MainPage = (): JSX.Element => {
  return (
    <>
      <StyledBanner bannerText="Government of the Netherlands" />
      <StyledTypography textData="Testing" />
    </>
  );
};

export default MainPage;
