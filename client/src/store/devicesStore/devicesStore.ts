import { makeAutoObservable } from "mobx";

import { IBrand, IDevice } from "../../types/ProductsTypes";
import devicesStoreService from "./devicesStore.service";

class DevicesStore {
    devices: IDevice[] = [];

    brands!: IBrand[];

    count!: number;

    selectedBrand!: IBrand;

    isLoading = true;

    isError = false;

    constructor() {
        makeAutoObservable(this, {}, { autoBind: true } );
    }

    async getAllDevices(params = {}) {
        debugger;
        this.isLoading = true;
        this.isError = false;
        try {
            const brands = await devicesStoreService.getAllBrands();
            this.brands = brands;
            const devices = await devicesStoreService.getAllDevices(params);
            this.devices = devices.rows;
            this.count = Number(devices.count);
        } catch (error) {
            this.isError = true;
        } finally {
            this.isLoading = false;
        }
    }

    getBrand(id: number) {
        if (!this.brands) return;
        const { name } = this.brands.find(brand => brand.id === id);
        return name;
    }

    selectBrand(id: number) {
        debugger;
        this.getAllDevices({ brandId: id });
    }
}

export default new DevicesStore();
