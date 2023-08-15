import { get, map } from "lodash";
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

export const getDataDetail = (
    data: any,
    lang: string,
    refType: string,
    myUrl: string
) => {
    const attributesTitle = get(
        data,
        `attributes[0].title${lang ? lang.toUpperCase() : "VI"}`,
        ""
    );

    const title = refType === "STYLE" ? attributesTitle : data?.name;
    const urlImage = get(data, "image[0].large.url", "");

    return {
        urlImage,
        title: title + " | SHOWNIQ.AI",
        description: data?.description,
        url: myUrl,
        openGraph: {
            title: title + " | SHOWNIQ.AI",
            description: data?.description,
            url: myUrl,
            site_name: "AI Fashion Matching Platform",
            type: "website",
            images: [
                {
                    url: urlImage,
                    width: 800,
                    height: 600,
                    alt: title,
                },
                {
                    url: urlImage,
                    width: 850,
                    height: 650,
                    alt: title,
                },
                {
                    url: urlImage,
                    width: 1200,
                    height: 630,
                    alt: title,
                },
                {
                    url: urlImage,
                    width: 600,
                    height: 315,
                    alt: title,
                },
                {
                    url: urlImage,
                    width: 200,
                    height: 200,
                    alt: title,
                },
                {
                    url: urlImage,
                    width: 50,
                    height: 50,
                    alt: title,
                },
                {
                    url: urlImage,

                    alt: title,
                },
            ],
            twitter: {
                handle: "@myhandle",
                site: "@mysite",
                cardType: "summary_large_image",
            },
        },
    };
};
