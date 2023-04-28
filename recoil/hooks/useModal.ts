import { useRecoilState } from "recoil";

import { modalName, openConfirmModal, openModal, linkQrApp } from "@/recoil/atoms";

export function useModal() {
	const [showModal, setShowModal] = useRecoilState(openModal);
	const [modalView, setModalView] = useRecoilState(modalName);
	const [open, setOpen] = useRecoilState(openConfirmModal);
	const [linkQr, setLinkQr] = useRecoilState(linkQrApp);
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

	return { onShow, onClose, onOpenModal, open, showModal, modalView, linkQr, setLinkQr };
}
