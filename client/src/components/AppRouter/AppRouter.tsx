import React from "react";
import { Routes, Route } from "react-router-dom";

import Main from "../pages/Main";

const AppRouter: React.FC = () => (
  <Routes>
    <Route path="/" element={<Main />} />
    <Route />
    <Route />
  </Routes>
);

export default AppRouter;
