import styles from "./PageHeader.module.css";

type Props = {
  title: string;
  description?: string;
  children?: React.ReactNode;
};

export const PageHeader = ({ title, description, children }: Props) => {
  return (
    <div className={styles.PageHeader}>
      <div className={styles.Info}>
        <h2 className={styles.Title}>{title}</h2>
        {description && (
          <span className={styles.Description}>{description}</span>
        )}
      </div>
      <div className={styles.Actions}>{children}</div>
    </div>
  );
};
