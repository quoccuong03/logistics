import { apiRoutes } from "@/config/apiRouters";
import axiosClient from "./axiosClient";

export async function getListOrder(data: any): Promise<any> {
	try {
		const res = await axiosClient.post(apiRoutes.getListOrder, data);
		return res?.data;
	} catch (error: any) {
		console.log("error", error);
		// throw new Error(error);
	}
}

export async function addOrder(data: any): Promise<any> {
	try {
		const res = await axiosClient.post(apiRoutes.addOrder, data);
		return res?.data;
	} catch (error: any) {
		console.log("error", error);
		// throw new Error(error);
	}
}
