declare global {
    interface Window {
        dataLayer: any;
    }
}
export const gtmId = "GTM-WFQZ886";

export const pageview = (url: string) => {
    window?.dataLayer?.push({
        event: "preview",
        page: url,
    });
};

export const event = (evt: string, data?: any) => {
    const dataObj = evt ? { event: evt, ecommerce: data } : { ecommerce: data };
    window?.dataLayer?.push(dataObj);
};
