import httpApi from "../../services/httpApi";
import { IResponseWrapper } from "../../types/types";
import { IBrand, IDevice } from "../../types/ProductsTypes";

class DevicesService {
    async getAllDevices(params = {}) {
        return httpApi.get<IResponseWrapper<IDevice>>("/device", {
            params,
        });
    }

    async getAllBrands() {
        return httpApi.get<IBrand[]>("/brand");
    }
}

export default new DevicesService();
