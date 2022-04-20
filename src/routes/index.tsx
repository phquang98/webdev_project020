import { Route, Routes } from "react-router-dom";

import MainPage from "../pages/MainPage";

const AppRoute = (): JSX.Element => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
      </Routes>
    </>
  );
};

export default AppRoute;
