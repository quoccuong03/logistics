import { atom } from "recoil";
import { STORE_ATOM_KEY } from "@/recoil/constants";

/**
 * This file is generated as an example of Recoil Atoms
 *
 * To learn more about Recoil and state management,
 * please visit https://recoiljs.org/
 */

export const currentStoreKey = atom({
    key: STORE_ATOM_KEY,
    default: null,
});
