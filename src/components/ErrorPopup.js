import { useState } from "react";
import styles from "./ErrorPopup.module.css";

const ErrorPopup = (props) => {
  const [isValid, setIsValid] = useState(true);

  if (props.errorMessage !== undefined) {
    setIsValid(false);
  } else {
    return;
  }

  const hidePopup = () => {
    setIsValid(true);
  };

  return (
    <div className={isValid ? styles.hidden : undefined}>
      <div className={styles.overlay}></div>
      <div className={styles.popup}>
        <div className={styles.header}>Invalid input</div>
        <div className={styles.body}>
          <div>{props.errorMessage}</div>
          <button className={styles.button} onClick={hidePopup}>
            Okay
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPopup;
