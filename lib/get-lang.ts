import "server-only";
import type { Locale } from "@config/i18n-config";
import { promises as fs } from "fs";
// We enumerate all dictionaries here for better linting and typescript support
// We also get the default import for cleaner types
// const dictionaries = {
//   en: () => import('./dictionaries/en.json').then((module) => module.default),
//   de: () => import('./dictionaries/de.json').then((module) => module.default),
//   cs: () => import('./dictionaries/cs.json').then((module) => module.default),
// }
async function getLangs() {
    const res = await fetch("/api/lang");
    console.log("res", res);
}
const dictionaries = {
    en: {
        menu: {
            home: "Home",
            suggest: "Suggest",
        },
    },
    vi: {
        menu: {
            home: "Home",
            suggest: "Suggest",
        },
    },
    kr: {
        menu: {
            home: "Home",
            suggest: "Suggest",
        },
    },
};

export const getDictionary = async (locale: Locale) => {
    const res = await fetch("http://localhost:3005/api/staticdata", {
        cache: "no-cache",
    });
    const data = await res.json();
    console.log("data", data);

    //  const fileContents = await fs.readFile(
    //      `${process.env.BASE_URL}/uploads/app/landingpage/config/master.json`,
    //      "utf8"
    //  );
    //  console.log("data", data);
};
//  dictionaries[locale]?.() ?? dictionaries.vi();
