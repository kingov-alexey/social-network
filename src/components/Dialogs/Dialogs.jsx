import React from "react";

import styles from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let dialogsElements = props.state.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} ava={d.ava} />
  ));
  let messagesElements = props.state.messages.map((m) => (
    <Message message={m.message} />
  ));

  let newTextFromTextarea = React.createRef();
  let addNewMessage = () => {
    let text = newTextFromTextarea.current.value;
    alert(text);
    newTextFromTextarea.current.value = '';
  }

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsItems}>{dialogsElements}</div>
      <div className={styles.messages}>{messagesElements}</div>
      <div>
        <textarea name="" id="" cols="30" rows="10" ref={newTextFromTextarea}></textarea>
        <button onClick={addNewMessage}>Добавить</button>
      </div>
    </div>
  );
};

export default Dialogs;
