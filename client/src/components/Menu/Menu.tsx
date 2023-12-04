import React, { useState } from "react";
import { AppstoreOutlined, MailOutlined, SettingOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu as MenuAnt } from "antd";

import classes from "./Menu.module.scss";
import { IType } from "../../types";

const types: IType[] = [
    { id: 1, name: "Телефоны" },
    { id: 2, name: "Телевизоры" },
    { id: 3, name: "Холодильники" },
    { id: 4, name: "Ноутбуки" },
    { id: 5, name: "Планшеты" },
];

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    onClick: () => void,
    type?: "group",
): MenuItem {
    return {
        key,
        label,
        type,
        onClick,
    } as MenuItem;
}

const items: MenuItem[] = types.map(({ name, id }) => getItem(name, id, () => console.log(id)));
// getItem("Navigation One", "sub1", () => console.log("1")),
// getItem("Navigation Two", "sub2", () => console.log("2")),
// getItem("Navigation Three", "sub4", () => console.log("3")),

// submenu keys of first level
const rootSubmenuKeys = ["sub1", "sub2", "sub4"];

const Menu: React.FC = () => (
    <MenuAnt
        mode="inline"
        style={{ width: 200 }}
        items={items}
    />
);

export default Menu;
