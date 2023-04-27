import { apiRoutes } from "@/config/apiRouters";
import axiosClient from "./axiosClient";

export async function getEnums(params: string[]): Promise<any> {
    try {
        const res = await axiosClient.get(`${apiRoutes.getStyleEnum}`, {
            params: {
                params,
            },
        });
        return res?.data;
    } catch (error: any) {
        console.log("error", error);
        // throw new Error(error);
    }
}
