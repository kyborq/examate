import { Logo } from "../Logo";

import styles from "./Header.module.css";

type Props = {
  children?: React.ReactNode;
};

export const Header = ({ children }: Props) => {
  return (
    <div className={styles.Header}>
      <Logo />
      {children}
    </div>
  );
};
