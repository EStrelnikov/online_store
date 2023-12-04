import React from "react";
import { Card } from "antd";
import { observer } from "mobx-react";

import classes from "./DeviceItem.module.scss";
import devicesStore from "../../store/devicesStore";
import { IDevice } from "../../types/ProductsTypes";

const { Meta } = Card;

type Props = {
    device: IDevice
};

const DeviceItem: React.FC<Props> = observer(({ device }: Props) => (
    <Card
        hoverable
        style={{ width: 240, height: "min-content" }}
        cover={<img alt="example" style={{ height: 200 }} src={`${"http://localhost:5000/"}${ device.img } `} />}
    >
        <Meta title={ device.name } description={ devicesStore.getBrand(device.brandId) } />
    </Card>
));

export default DeviceItem;
