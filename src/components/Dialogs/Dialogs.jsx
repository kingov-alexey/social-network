import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./Dialogs.module.css";

const Dialogs = () => {
  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsItems}>
        <div className={styles.dialog + " " + styles.active}>
          <NavLink to="/dialogs/1">Имя1</NavLink>
        </div>
        <div className={styles.dialog}>
          {" "}
          <NavLink to="/dialogs/2">Имя2</NavLink>
        </div>
        <div className={styles.dialog}>
          {" "}
          <NavLink to="/dialogs/3">Имя3</NavLink>
        </div>
        <div className={styles.dialog}>
          {" "}
          <NavLink to="/dialogs/4">Имя4</NavLink>
        </div>
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
