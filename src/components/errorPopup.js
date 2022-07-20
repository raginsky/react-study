import {useState} from 'react';
import styles from './errorPopup.module.css';

const errorPopup = (props) => {

    if(props.errorMessage === undefined) {
        return;
    }

    return (
        <div>
            <div className={styles.overlay}></div>
            <div className={styles.popup}>
                <div className={styles.header}>Invalid input</div>
                <div className={styles.body}>
                    <div>{props.errorMessage}</div>
                    <button className={styles.button}>Okay</button>
                </div>
            </div>

        </div>
    );
};

export default errorPopup;