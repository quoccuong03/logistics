import { apiRoutes } from "@/config/apiRouters";
import axiosClient from "./axiosClient";

export async function getListSimilar(id: string, query: any): Promise<any> {
    try {
        const res = await axiosClient.get(
            `${apiRoutes.getStyleSimilar}/${id}`,
            {
                params: query,
            }
        );
        return res?.data;
    } catch (error: any) {
        console.log("error", error);
        // throw new Error(error);
    }
}
