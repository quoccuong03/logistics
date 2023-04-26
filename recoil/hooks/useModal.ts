import { useRecoilState } from "recoil";

import { modalName, openConfirmModal, openModal } from "@/recoil/atoms";

export const useModal: () => {
    onShow: (id: string) => void;
    onClose: () => void;
    onOpenModal: () => void;
    open: boolean;
    showModal: boolean;
    modalView: string;
} = () => {
    const [showModal, setShowModal] = useRecoilState(openModal);
    const [modalView, setModalView] = useRecoilState(modalName);
    const [open, setOpen] = useRecoilState(openConfirmModal);

    const onShow = (modalView: string) => {
        setModalView(modalView);
        setShowModal(!!modalView);
    };

    const onOpenModal = () => {
        setOpen(true);
    };

    const onClose = () => {
        setShowModal(false);
        setModalView("");
        setOpen(false);
    };

    return { onShow, onClose, onOpenModal, open, showModal, modalView };
};
