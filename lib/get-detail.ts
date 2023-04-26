import axiosClient from "./axiosClient";

export async function getDetail(id: string): Promise<any> {
    try {
        return await axiosClient.get(`style/getDetail/${id}`);
    } catch (error: any) {
        console.log("error", error);

        // throw new Error(error);
    }
}
