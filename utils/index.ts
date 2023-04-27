import { map } from "lodash";
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
        // @ts-ignore
        return imgData?.origin?.url;
    }
    if (Array.isArray(imgData)) {
        return map(imgData, (item) => {
            return item?.[type]?.url;
        });
    } else {
        // @ts-ignore
        return imgData?.origin?.url;
    }
};

export const getImages = (
    imgData: ImageData | ImageData[],
    type?: "origin" | "large" | "medium" | "thumb"
) => {
    if (!imgData) {
        return null;
    }
    if (!type) {
        // @ts-ignore
        return imgData?.origin;
    }
    if (Array.isArray(imgData)) {
        return map(imgData, (item) => {
            return item?.[type];
        });
    } else {
        // @ts-ignore
        return imgData?.origin;
    }
};
