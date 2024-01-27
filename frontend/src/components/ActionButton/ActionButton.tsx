import styles from "./ActionButton.module.css";

type Props = {
  icon: React.ReactNode;
  title: string;
  onClick?: () => void;
};

export const ActionButton = ({ title, icon, onClick }: Props) => {
  return (
    <button className={styles.ActionButton} onClick={onClick}>
      {title}
      {icon}
    </button>
  );
};
