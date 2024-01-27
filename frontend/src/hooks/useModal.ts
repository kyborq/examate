import { useState } from "react";

export type ModalState = {
  visible: boolean;
  close: () => void;
  open: () => void;
};

export const useModal = (initialValue?: boolean): ModalState => {
  const [visible, setVisible] = useState(initialValue || false);

  const close = () => setVisible(false);
  const open = () => setVisible(true);

  return {
    visible,
    close,
    open,
  };
};
