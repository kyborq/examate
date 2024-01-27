import { classNmes } from "../../utils/classNames";
import styles from "./Button.module.css";

type Props = {
  icon: React.ReactNode;
  title?: string;
  primary?: boolean;
  disabled?: boolean;
  onClick?: () => void;
};

export const Button = ({ title, icon, primary, disabled, onClick }: Props) => {
  return (
    <button
      className={classNmes(
        styles.Button,
        !title && styles.Small,
        primary && styles.Primary,
        disabled && styles.Disabled
      )}
      disabled={disabled}
      onClick={onClick}
    >
      {title}
      {icon}
    </button>
  );
};
