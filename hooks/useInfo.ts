import { apiRoutes } from "@config/apiRouters";
import axiosClient from "@lib/axiosClient";
import queryString from "query-string";
const baseAuthUrl = { baseURL: process.env.NEXT_PUBLIC_STATIC_API_SERVER };
export const getInfo = async (query?: any): Promise<any> => {
	return await axiosClient.get(`${apiRoutes.getInfo}?${queryString.stringify(query)}`, {
		...baseAuthUrl,
	});
};

export const getInfoDonwload = async (): Promise<any> => {
	return await fetch(
		`${baseAuthUrl.baseURL}${apiRoutes.getInfoDonwload}`,
		// , {
		// 	cache: "force-cache",
		// }
	).then((res) => res.json());
};
