"use client";
import { IconButton } from "@mui/material";
import { ChevronRightIcon } from "@/components/icons";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
// import { useStore } from "@/recoil/hooks";
import { useEffect, useState } from "react";
import LocaleSwitcher from "./locale-switcher";
import { useLocale } from "@/hooks/useLocale";
import { useCurrentStore } from "@/hooks/useCurrentStore";
import { BASE_PATH } from "@/config/constants";
const menus = [
    { key: "home", to: "" },
    { key: "info", to: "info" },
    { key: "about", to: "about" },
];
interface Props {
    lang: any;
}
export default function Navbar({ lang }: Props) {
    const router = useRouter();
    const pathname = usePathname();
    const locale = useLocale();
    const { currentStore } = useCurrentStore();
    const [hightLinght, setHightLinght] = useState(false);

    const pages = [
        `${BASE_PATH}/${locale}/info`,
        `${BASE_PATH}/${locale}/about`,
        `${BASE_PATH}/${locale}/seller`,
    ];

    const handleScroll = () => {
        window.addEventListener("scroll", () => {
            const scrollTop = window.pageYOffset;
            if (
                scrollTop > 40 &&
                (pages.includes(pathname) || pathname.endsWith(locale))
            ) {
                setHightLinght(true);
            } else {
                setHightLinght(false);
            }
        });
    };

    useEffect(() => {
        handleScroll();
    }, [pathname]);

    return (
        <header className="flex flex-col sticky z-[999] top-0 bg-white">
            <div className="flex justify-between items-start w-full px-5 h-8 mt-5">
                {pathname?.startsWith("/detail") ? (
                    <>
                        <IconButton
                            className="pl-0"
                            onClick={() => router.back()}
                        >
                            <ChevronRightIcon className="rotate-180 text-sm fill-black" />
                        </IconButton>
                        {currentStore ? (
                            <div className="flex items-center">
                                <Image
                                    src={currentStore?.avatar?.medium?.url}
                                    width={currentStore?.avatar?.medium?.width}
                                    height={
                                        currentStore?.avatar?.medium?.height
                                    }
                                    alt={currentStore?.name}
                                    className="max-w-[20px] h-auto rounded-full"
                                />
                                <h3 className="text-sm font-normal uppercase ml-2">
                                    {currentStore?.name}
                                </h3>
                            </div>
                        ) : null}
                    </>
                ) : (
                    <Link href={`/${locale}`}>
                        <Image src={require("@images/logo.svg")} alt="Logo" />
                    </Link>
                )}

                {/* <IconButton onClick={onOpenModal}>
                    <BellIcon sx={{ fill: "#000" }} />
                </IconButton> */}
                {!pathname.includes("detail") &&
                !pathname.includes("seller") ? (
                    <LocaleSwitcher locales={lang?.locales} />
                ) : (
                    <Link
                        href={`${`/${locale}/about`}`}
                        className={`flex items-center flex-col text-[12px] ${
                            pathname.includes("seller")
                                ? "text-[#000000]"
                                : "text-[#A0A0A0]"
                        } font-semibold leading-3 ${
                            pathname.includes("detail") ? "myTextLight" : ""
                        }`}
                    >
                        <Image
                            src={require("@images/store.svg")}
                            alt="strore"
                            style={{
                                maxWidth: 20,
                                height: "auto",
                            }}
                        />
                        {lang?.menu?.seller}
                    </Link>
                )}
            </div>
            <nav className="border-b-[1px] border-[#F5F5F5]">
                <ul className="flex items-center">
                    {locale
                        ? menus.map((item: any, idx: number) => (
                              <li
                                  className={`px-3 md:px-5 ${
                                      (pathname.includes(item.to) &&
                                          idx !== 0) ||
                                      (pathname.endsWith(locale) && idx === 0)
                                          ? "border-b-[3px] border-black"
                                          : ""
                                  } ${
                                      idx !== 0 && hightLinght
                                          ? "myLightBox"
                                          : ""
                                  }`}
                                  key={idx}
                              >
                                  <Link
                                      className={`block pb-1 md:pb-2 text-xs md:text-sm font-bold  active:text-[#000000] hover:text-[#000000] ${
                                          (pathname.includes(item.to) &&
                                              idx !== 0) ||
                                          (pathname.endsWith(locale) &&
                                              idx === 0)
                                              ? "text-[#000000]"
                                              : "text-[#A0A0A0]"
                                      }  ${
                                          idx !== 0 && hightLinght
                                              ? "myTextLight"
                                              : ""
                                      }`}
                                      href={`/${lang?.locale || ""}/${item.to}`}
                                  >
                                      {lang?.menu?.[item.key]}
                                  </Link>
                              </li>
                          ))
                        : null}
                </ul>
            </nav>
        </header>
    );
}
