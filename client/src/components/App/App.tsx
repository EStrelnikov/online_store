import React from "react";
import { LaptopOutlined, NotificationOutlined, UserOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Breadcrumb, Layout, Menu, theme } from "antd";

const { Header, Content, Sider } = Layout;

// import Header from "../UI/Header";
// import Menu from "../Menu";
import AppRouter from "./../AppRouter/AppRouter";
import classes from "./App.module.scss";

const App: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const items1: MenuProps["items"] = ["1", "2", "3"].map((key) => ({
    key,
    label: `nav ${key}`,
  }));

  const items2: MenuProps["items"] = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
    (icon, index) => {
      const key = String(index + 1);

      return {
        key: `sub${key}`,
        icon: React.createElement(icon),
        label: `Пункт ${key}`,

        children: new Array(4).fill(null)
          .map((_, j) => {
            const subKey = index * 4 + j + 1;
            return {
              key: subKey,
              label: `option${subKey}`,
            };
          }),
      };
    },
  );

  return (
    <div className={classes.component}>
      {/* <Header />
      <main>
        <Menu />
        <AppRouter />
      </main> */}
      <Layout>
        <Header style={{ display: "flex", alignItems: "center" }}>
          <div className="demo-logo" />
        </Header>
        <Layout>
          <Sider width={200} style={{ background: colorBgContainer }}>
            <Menu
              mode="inline"
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              style={{ height: "100%", borderRight: 0 }}
              items={items2}
            />
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
            Content
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
};

export default App;
