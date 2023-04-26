import { apiRoutes } from "@config/apiRouters";
import axiosClient from "@lib/axiosClient";
import queryString from "query-string";
import { useQuery } from "@tanstack/react-query";

export const getRecomendationCall = async (query?: any): Promise<any> => {
	console.log(`${apiRoutes.getRecomendation}?${queryString.stringify(query)}`);
	return await axiosClient.get(`${apiRoutes.getRecomendation}?${queryString.stringify(query)}`);
};

export const getRecomendation = (queryKey: any, query?: any, options?: any) =>
	useQuery(
		queryKey,
		async () => {
			const { data } = await getRecomendationCall(query);
			return data;
		},
		options,
	);
