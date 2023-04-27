import { apiRoutes } from "@config/apiRouters";
import axiosClient from "@lib/axiosClient";
import queryString from "query-string";

export const getRecomendationCall = async (query?: any): Promise<any> => {
	return await axiosClient.get(`${apiRoutes.getRecomendation}?${queryString.stringify(query)}`);
};
