import Image from "next/image";
import { Inter } from "next/font/google";
// import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
const inter = Inter({ subsets: ["latin"] });
export const metadata = {
    title: "Tìm hiểu thêm",
};

export default function InfoPage() {
    // const [ref] = useKeenSlider<HTMLDivElement>();
    return (
        <div className="mt-5">
            INFO page
            {/* <PageSection /> */}
        </div>
    );
}
