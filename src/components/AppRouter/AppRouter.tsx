import React from "react";
import { Route, Routes } from "react-router-dom";
import { APP_ROUTES } from "../../const/const";

const AppRouter = () => {
  return (
    <Routes>
      {APP_ROUTES.map((route) => (
        <Route path={route.path} element={route.element} key={route.path} />
      ))}
    </Routes>
  );
};

export default AppRouter;
