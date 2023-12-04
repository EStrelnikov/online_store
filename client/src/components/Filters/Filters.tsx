import React from "react";
import { Select } from "antd";
import { observer } from "mobx-react";

import devicesStore from "../../store/devicesStore";

// const items: MenuProps["items"] = [
//     {
//         label: "1st menu item",
//         key: "1",
//     },
//     {
//         label: "2nd menu item",
//         key: "2",
//     },
// ];

// const menuProps = {
//     items,
//     onClick: () => console.log("1223"),
// };

type Props = {
};

const Filters: React.FC<Props> = observer(() => {
    const { brands, selectBrand } = devicesStore;

    const handleChange = (id: string) => {
        selectBrand(+id);
    };

    const items = brands.map(brand => ({ label: brand.name, value: brand.id }));

    return (
        <div>Filters
            <Select
                defaultValue={items[0].label }
                style={{ width: 120 }}
                onChange={(value) => handleChange(value) }
                options={items}
            />
        </div>
    );
});

export default Filters;
