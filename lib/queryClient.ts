import { QueryCache, QueryClient } from "@tanstack/react-query";
const queryCache = new QueryCache({
    onError: (error) => {
       return error
    },
});

export const queryClient = new QueryClient({
   defaultOptions: {
      queries: {
         retry: (
             _failureCount,
             error: any,
         ) => error.status >= 404,
         staleTime: 1000 * 60 * 5,// 5 minute
         cacheTime: 1000 * 60 * 5, // 5 minute
         refetchOnMount: true,
         refetchOnWindowFocus: false,
         refetchOnReconnect: true,
         refetchInterval: false, //30 seconds
         refetchIntervalInBackground: false,
         suspense: false,
      },
   },
   // queryCache: new QueryCache({
   //    onError: (error) => console.log('error-->', error)
   // }),
});
