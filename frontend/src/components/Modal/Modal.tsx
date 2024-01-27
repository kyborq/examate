import { useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOnClickOutside } from "usehooks-ts";
import { ModalState } from "../../hooks/useModal";

import styles from "./Modal.module.css";

type Props = {
  state: ModalState;
  width?: number;
  children?: React.ReactNode;
};

export const Modal = ({ state, width, children }: Props) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useOnClickOutside(modalRef, state.close);

  return (
    <AnimatePresence>
      {state.visible && (
        <motion.div
          className={styles.Overlay}
          initial={{
            background: "rgba(0, 0, 0, 0)",
          }}
          animate={{
            background: "rgba(0, 0, 0, .2)",
          }}
          exit={{
            background: "rgba(0, 0, 0, 0)",
          }}
        >
          <motion.div
            ref={modalRef}
            className={styles.Modal}
            style={{ width }}
            initial={{
              opacity: 0,
              translateY: 50,
            }}
            animate={{
              opacity: 1,
              translateY: 0,
            }}
            exit={{
              opacity: 0,
              translateY: -50,
            }}
          >
            <div className={styles.Content}>{children}</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
