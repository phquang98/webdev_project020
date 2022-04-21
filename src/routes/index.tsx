import { Route, Routes } from "react-router-dom";

import { StyledMainPage } from "../pages/MainPage/styles";

const AppRoute = (): JSX.Element => {
  return (
    <>
      <Routes>
        <Route path="/" element={<StyledMainPage />}></Route>
      </Routes>
    </>
  );
};

export default AppRoute;
