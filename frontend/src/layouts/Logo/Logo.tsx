import { NavLink } from "react-router-dom";
import LogoIcon from "../../assets/logo.svg?react";

import styles from "./Logo.module.css";

type Props = {
  counter?: number;
};

export const Logo = ({ counter }: Props) => {
  return (
    <div className={styles.Logo}>
      <LogoIcon />
      {!!counter && <span className={styles.Counter}>{counter}</span>}
      <NavLink to="/" className={styles.Link} />
    </div>
  );
};
