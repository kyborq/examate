import { classNmes } from "../../utils/classNames";
import styles from "./Content.module.css";

type Props = {
  children?: React.ReactNode;
  isColumn?: boolean;
};

export const Content = ({ children, isColumn }: Props) => {
  return (
    <div className={classNmes(styles.Content, isColumn && styles.Column)}>
      {children}
    </div>
  );
};
