import React, { useEffect } from "react";
import { observer } from "mobx-react";

import classes from "./Main.module.scss";
import devicesStore from "../../../store/devicesStore";
import DeviceItem from "../../Device";
import Filters from "../../Filters";

const Main: React.FC = observer(() => {
    const { devices } = devicesStore;
    useEffect(() => {
        const fetchData = async () => {
            await devicesStore.getAllDevices();
        };
        fetchData();
    }, []);
    if (!devices.length) {
        return (<div>Загрузка...</div>);
    }
    return (
        <main className={ classes.component }>
            <Filters />
            <div className={classes.list }>
                {
                    devices.map(device => <DeviceItem key={device.id} device={device} />)
                }
            </div>
        </main>
    );
});

export default Main;
