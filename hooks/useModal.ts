import { useStore } from "@/lib/store";

export const useModal = () => {
    return useStore((store) => ({
        open: store.open,
        onShow: store.onShow,
        onClose: store.onClose,
    }));
};
