import Image from "next/image";
import { Inter } from "next/font/google";
// import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });
export const metadata = {
    title: "Gợi ý outfits",
};

export default function SuggestPage() {
    // const [ref] = useKeenSlider<HTMLDivElement>();
    return (
        <div className="mt-5">
            SUGGEST page
            <Link
                className="border border-lime-400 px-3 py-1 ml-2 inline-block bg-cyan-500"
                href={"/detail/1"}
            >
                Xem chi tiết
            </Link>
            {/* <PageSection /> */}
        </div>
    );
}
