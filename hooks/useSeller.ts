import { apiRoutes } from "@/config/apiRouters";
import axiosClient from "@/lib/axiosClient";

export const registerSeller = async (payload: any): Promise<any> => {
    return await axiosClient.post(apiRoutes.postRegisterSeller, payload);
};
