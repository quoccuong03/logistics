import { useRecoilState } from "recoil";

import { currentStoreKey } from "@/recoil/atoms";

export const useStore: () => {
    onShowStore: (data: any) => void;
    currentStore: any;
} = () => {
    const [currentStore, setCurrentStore] = useRecoilState(currentStoreKey);
    const onShowStore = (data: any) => {
        setCurrentStore(data);
    };

    return { currentStore, onShowStore };
};
