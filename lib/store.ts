import { createContext, useContext } from "react";
import { createStore, useStore as useZustandStore } from "zustand";

interface StoreInterface {
    currentStore: any;
    open: boolean;
    linkQR: string;
    setLinkQR: (link: string) => void;
    onShow: () => void;
    onClose: () => void;
    setCurrentStore: (store: any) => void;
}

const getDefaultInitialState = () => ({
    open: false,
    currentStore: undefined,
    linkQR: "",
});

export type StoreType = ReturnType<typeof initializeStore>;

const zustandContext = createContext<StoreType | null>(null);

export const Provider = zustandContext.Provider;

export const useStore = <T>(selector: (state: StoreInterface) => T) => {
    const store = useContext(zustandContext);

    if (!store) throw new Error("Store is missing the provider");

    return useZustandStore(store, selector);
};

export const initializeStore = (
    preloadedState: Partial<StoreInterface> = {}
) => {
    return createStore<StoreInterface>((set, get) => ({
        ...getDefaultInitialState(),
        ...preloadedState,
        onShow: () => {
            set({
                open: true,
            });
        },
        onClose: () => {
            set({
                open: false,
            });
        },
        setCurrentStore: (store) => {
            set({
                currentStore: store,
            });
        },
        setLinkQR: (link) => {
            set({
                linkQR: link,
            });
        },
    }));
};
