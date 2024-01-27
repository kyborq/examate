import { LeftIcon } from "../../../../assets/icons";
import { Button } from "../../../../components";
import styles from "./InviteField.module.css";

export const InviteField = () => {
  return (
    <label className={styles.Field}>
      <span className={styles.Label}>https://examate.ru/</span>
      <input className={styles.Input} placeholder="000000" />
      <Button icon={<LeftIcon />} />
    </label>
  );
};
