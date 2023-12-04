import React from "react";
import { Layout, Button, Row } from "antd";

import classes from "./Header.module.scss";

const { Header: HeaderA } = Layout;

const Header: React.FC = () => (
    <HeaderA style={{ display: "flex", justifyContent: "space-between", alignItems: "center", background: "green" }}>
        <div className="demo-logo" />HeaderA
        <Row>
            <Button className={classes.btn_admin} onClick={() => console.log("Админ панель")}>Админ панель</Button>
            <Button onClick={() => console.log("Войти")}>Войти</Button>
        </Row>
    </HeaderA>
);

export default Header;
