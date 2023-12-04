import React from "react";
import { Layout, theme } from "antd";

import AppRouter from "./../AppRouter/AppRouter";
import Menu from "./../Menu/Menu";
import classes from "./App.module.scss";
import Header from "../UI/Header";

const { Content, Sider } = Layout;

const App: React.FC = () => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <div className={classes.component}>
            <Layout>
                <Header />
                <Layout>
                    <Sider width={200} style={{ background: colorBgContainer }}>
                        <Menu />
                    </Sider>
                    <Layout style={{ padding: "0 24px 24px" }}>
                        <Content
                            style={{
                                padding: 24,
                                margin: 0,
                                minHeight: 280,
                                background: colorBgContainer,
                            }}
                        >
                            <AppRouter />
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
        </div>
    );
};

export default App;
