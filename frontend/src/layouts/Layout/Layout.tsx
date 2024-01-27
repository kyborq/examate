import { classNmes } from "../../utils/classNames";
import styles from "./Layout.module.css";

type Props = {
  centered?: boolean;
  children?: React.ReactNode;
};

export const Layout = ({ centered, children }: Props) => {
  return (
    <div className={styles.Layout}>
      <div className={classNmes(styles.Content, centered && styles.Centered)}>
        {children}
      </div>
    </div>
  );
};
