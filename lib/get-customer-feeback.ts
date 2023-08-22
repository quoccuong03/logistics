import { apiRoutes } from "@/config/apiRouters";
import axiosClient from "./axiosClient";

export async function getListCustomerFeeback(data: any): Promise<any> {
	try {
		const res = await axiosClient.post(apiRoutes.getListCustomerFeeback, data);
		return res?.data;
	} catch (error: any) {
		console.log("error", error);
		// throw new Error(error);
	}
}

export async function addCustomerFeeback(data: any): Promise<any> {
	try {
		const res = await axiosClient.post(apiRoutes.addCustomerFeeback, data);
		return res?.data;
	} catch (error: any) {
		console.log("error", error);
		// throw new Error(error);
	}
}
