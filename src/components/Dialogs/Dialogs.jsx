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
  
  
  let dialogsData = [
    {id: 1, name: "Имя1"},
    {id: 2, name: "Имя2"},
    {id: 3, name: "Имя3"},
    {id: 4, name: "Имя4"},
    {id: 5, name: "Имя5"},
    {id: 6, name: "Имя6 "},
  ];
  let messagesData = [
    {id: 1, message: "test message1"},
    {id: 2, message: "test message2"},
    {id: 3, message: "test message3"},
    {id: 4, message: "test message4"},
    {id: 5, message: "test message5"},
    {id: 6, message: "test message6"},
  ];
  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsItems}>
        <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
        <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />

      </div>
      <div className={styles.messages}>
        <Message message={messagesData[0].message}/>
        <Message message={messagesData[0].message}/>

      </div>
    </div>
  );
};

export default Dialogs;
