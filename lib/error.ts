// import { toast } from "react-toastify";

import { Locale } from "@/config/i18n-config";

export const STATUS_FAILURE = "failure";

export type ErrorResponse = {
    error: string;
};

type Options = {
    alert?: boolean;
    lang?: Locale | string;
};

export function catchError(err: any, options?: Options): ErrorResponse {
    let message = "";
    const lang = options?.lang;
    if (err.response) {
        message = err.response.data.message;
    } else if (err.request) {
        message = "The request was made, but no response was received";
    } else {
        message = err.message;
    }
    const messages = err?.errors?.map((ms: any) =>
        lang ? ms.error?.[lang] : ms.error
    );
    const messageStr = messages?.toString() || message;
    // if (alert) {
    //     toast.error(messageStr)
    // }

    return messageStr;
}

export const errStatus = (error: any) => {
    const message = catchError(error);
    return {
        errorCode: error?.status || 404,
        message: error?.statusText || error?.message || message?.error,
    };
};
