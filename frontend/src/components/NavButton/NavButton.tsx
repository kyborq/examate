import { NavLink } from "react-router-dom";
import styles from "./NavButton.module.css";

type Props = {
  title: string;
  path: string;
  icon: React.ReactNode;
};

export const NavButton = ({ path, title, icon }: Props) => {
  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        `${styles.NavButton} ${isActive && styles.Current}`
      }
    >
      {icon}
      {title}
    </NavLink>
  );
};
