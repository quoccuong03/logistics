import { useStore } from "@/lib/store";

export const useQRCode = () => {
    return useStore((store) => ({
        linkQR: store.linkQR,
        setLinkQR: store.setLinkQR,
    }));
};
