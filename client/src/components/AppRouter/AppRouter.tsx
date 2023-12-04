import React from "react";
import { Routes, Route } from "react-router-dom";

import Main from "../pages/Main";

const AppRouter: React.FC = () => (
    <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/basket" element={<div>Basket</div>} />
        <Route path="/device/:id" element={<div>DevicePage</div>} />
    </Routes>
);

export default AppRouter;
