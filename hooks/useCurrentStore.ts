import { useStore } from "@/lib/store";
export const useCurrentStore = () => {
    return useStore((store) => ({
        currentStore: store.currentStore,
        setCurrentStore: store.setCurrentStore,
    }));
};
