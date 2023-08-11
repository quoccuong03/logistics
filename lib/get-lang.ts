import "server-only";
import type { Locale } from "@config/i18n-config";

export const getLangs = async (locale: Locale) => {
    console.log(
        "api url",
        `${process.env.NEXT_PUBLIC_BASE_HOST}/api/staticdata?lang=${locale}`
    );

    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_HOST}/api/staticdata?lang=${locale}`,
        {
            cache: "no-cache",
        }
    );
    if (!res.ok) {
        throw new Error("Không tìm thấy dữ liệu");
    }
    const data = await res.json();
    const result = { ...data, locale };

    return result;
    //  const fileContents = await fs.readFile(
    //      `${process.env.BASE_URL}/uploads/app/landingpage/config/master.json`,
    //      "utf8"
    //  );
    //  console.log("data", data);
};
//  dictionaries[locale]?.() ?? dictionaries.vi();
