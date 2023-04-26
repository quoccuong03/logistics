// import { toast } from "react-toastify";

export const STATUS_FAILURE = "failure";
export type ErrorResponse = {
    error: string;
};

export function catchError(err: any, alert?: boolean): ErrorResponse {
    let message = "";

    if (err.response) {
        message = err.response.data.message;
    } else if (err.request) {
        message = "The request was made, but no response was received";
    } else {
        message = err.message;
    }
    const messages = err?.errors?.map((ms: any) => ms.error);
    const messageStr = messages?.toString() || message;
    // if (alert) {
    //     toast.error(messageStr)
    // }

    return { error: messageStr };
}

export const errStatus = (error: any) => {
    const message = catchError(error);
    return {
        errorCode: error?.status || 404,
        message:
            error?.statusText ||
            error?.message ||
            message?.error ||
            "Mong bạn thông cảm và mua sắm tại cửa hàng nếu Website đang quá tải! <br />Quý khách có thể ghé cửa hàng để mua sắm trực tiếp.",
    };
};
