import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { i18n } from "@/config/i18n-config";
// import { match as matchLocale } from "@formatjs/intl-localematcher";
// import Negotiator from "negotiator";

// function getLocale(request: NextRequest): string | undefined {
//     // Negotiator expects plain object so we need to transform headers
//     const negotiatorHeaders: Record<string, string> = {};
//     request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

//     // @ts-ignore locales are readonly
//     const locales: string[] = i18n.locales;

//     // Use negotiator and intl-localematcher to get best locale
//     let languages = new Negotiator({ headers: negotiatorHeaders }).languages(
//         locales
//     );

//     const locale = matchLocale(languages, locales, i18n.defaultLocale);
//     console.log("locales", locales);
//     console.log("languages", languages);
//     console.log("i18n.defaultLocale", i18n.defaultLocale);
//     console.log("locale", locale);

//     return locale;
// }

export function middleware(request: NextRequest) {
    const pathname = request.nextUrl.pathname;
    const newUrl = pathname.replace(process.env.BASE_PATH || "", "");
    // Check if there is any supported locale in the pathname
    const pathnameIsMissingLocale = i18n.locales.every(
        (locale) => !newUrl.startsWith(`/${locale}/`) && newUrl !== `/${locale}`
    );
    // Redirect if there is no locale
    if (pathnameIsMissingLocale) {
        // const locale = getLocale(request);
        // console.log("locale", locale);
        // e.g. incoming request is /products
        // The new URL is now /en-US/products
        return NextResponse.redirect(
            new URL(
                `${process.env.BASE_PATH}/${i18n.defaultLocale}${
                    newUrl.startsWith("/") ? "" : "/"
                }${newUrl}`,
                request.url
            )
        );
    }
}

export const config = {
    // Matcher ignoring `/_next/` and `/api/`
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
