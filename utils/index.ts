import { isObject } from "lodash";
interface ImageData {
    origin: {
        url: string;
        width: number;
        height: number;
    };
    large: {
        url: string;
        width: number;
        height: number;
    };
    medium: {
        url: string;
        width: number;
        height: number;
    };
    thumb: {
        url: string;
        width: number;
        height: number;
    };
}

export const getImageUrl = (
    imgData: ImageData | ImageData[],
    type?: "origin" | "large" | "medium" | "thumb"
) => {
    if (!imgData) {
        return null;
    }
    if (!type) {
        if (isObject(imgData)) {
            // @ts-ignore
            return imgData?.origin?.url;
        }
    }
};
