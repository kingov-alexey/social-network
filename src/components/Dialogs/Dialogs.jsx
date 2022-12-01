import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./Dialogs.module.css";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <div className={styles.dialog}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

const Message = (props) => {
  return (
    <div className={styles.message}>{props.message}</div>
  )
}

const Dialogs = () => {
  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsItems}>
        <DialogItem name="Name1" id="888" />
        <DialogItem name="Name2" id="777" />
        <DialogItem name="Name3" id="666" />
        <DialogItem name="Name4" id="555" />
        <DialogItem name="Name5" id="444" />
      </div>
      <div className={styles.messages}>
        <Message message='test message'/>
        <Message message='test message2'/>
        <Message message='test message3'/>
      </div>
    </div>
  );
};

export default Dialogs;
