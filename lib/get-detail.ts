import { apiRoutes } from "@/config/apiRouters";
import axiosClient from "./axiosClient";

export async function getDetail(id: string): Promise<any> {
    try {
        const res = await axiosClient.get(`${apiRoutes.getStyleDetail}/${id}`);
        return res?.data;
    } catch (error: any) {
        console.log("error", error);
        // throw new Error(error);
    }
}