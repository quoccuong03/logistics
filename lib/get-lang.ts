import "server-only";
import type { Locale } from "@config/i18n-config";
import { BASE_PATH_STATIC_LANDING_PAGE } from "@/config/constants";

export const getLangs = async (locale: Locale) => {
    const res = await fetch(
        // `${process.env.NEXT_PUBLIC_BASE_HOST}/api/staticdata?lang=${locale}`,
        `${BASE_PATH_STATIC_LANDING_PAGE}/language/${locale}.json`,
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
