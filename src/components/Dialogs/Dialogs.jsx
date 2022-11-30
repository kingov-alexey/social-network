import React from 'react';
import styles from './Dialogs.module.css';

const Dialogs = () => {
  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsItems}>
        <div className={styles.dialog + ' ' + styles.active}>Имя1</div>
        <div className={styles.dialog}>Имя2</div>
        <div className={styles.dialog}>Имя3</div>
        <div className={styles.dialog}>Имя4</div>
      </div>
      <div className={styles.messages}>
        <div className={styles.message}>Hi</div>
        <div className={styles.message}>How is your learn?</div>
        <div className={styles.message}>Yo</div>
      </div>
    </div>
  );
};

export default Dialogs;
