import { atom } from "recoil";
import { MODAL_ATOM_TOGGLE_KEY, MODAL_ATOM_VIEW_KEY } from "@/recoil/constants";

/**
 * This file is generated as an example of Recoil Atoms
 *
 * To learn more about Recoil and state management,
 * please visit https://recoiljs.org/
 */

export const openModal = atom({
	key: MODAL_ATOM_TOGGLE_KEY,
	default: false,
});

export const openConfirmModal = atom({
	key: "OPEN_MODAL_CONFIRM",
	default: false,
});

export const modalName = atom({
	key: MODAL_ATOM_VIEW_KEY,
	default: "",
});

export const linkQrApp = atom({
	key: "MODAL_ATOM_LINK_KEY",
	default: "/download",
});
