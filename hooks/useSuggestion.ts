import { apiRoutes } from "@config/apiRouters";
import axiosClient from "@lib/axiosClient";
import queryString from "query-string";
import { UseQueryOptions, useQuery } from "@tanstack/react-query";

export const getRecomendationCall = async (query?: any): Promise<any> => {
    return await axiosClient.get(
        `${apiRoutes.getRecomendation}?${queryString.stringify(query)}`
    );
};

export const getStyleCatalogCall = async (query?: any): Promise<any> => {
    return await axiosClient.get(
        `${apiRoutes.getStyleCatalog}?${queryString.stringify(query)}`
    );
};

export const useFetchRecomendation = (
    queryKey: any,
    query?: any,
    options?: any
) =>
    useQuery(
        queryKey,
        async () => {
            const { data } = await getRecomendationCall(query);
            return data;
        },
        options
    );
///

export const fetchStyleList = async (query?: any): Promise<any> => {
    return await axiosClient.get(`${apiRoutes.getStyleList}`, {
        params: query,
    });
};

export const useFetchStyleCatalog = (
    queryKey: any,
    query?: any,
    options?: UseQueryOptions
) =>
    useQuery(
        queryKey,
        async () => {
            const { data } = await getStyleCatalogCall(query);
            return data;
        },
        { ...options, keepPreviousData: true }
    );

export const useFetchStyleList = (
    queryKey: any,
    query?: any,
    options?: UseQueryOptions
) =>
    useQuery(
        queryKey,
        async () => {
            const { data } = await fetchStyleList(query);
            return data;
        },
        { ...options, keepPreviousData: true }
    );
