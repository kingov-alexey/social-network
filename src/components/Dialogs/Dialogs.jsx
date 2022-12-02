import React from 'react';

import styles from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';



const Dialogs = props => {

let dialogsElements = props.dialogsData.map(d => <DialogItem name={d.name} id={d.id} />);
let messagesElements = props.messagesData.map(m => <Message message={m.message} />);


console.log('asdfasdf'+props.dialogsData);

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsItems}>{dialogsElements}</div>
      <div className={styles.messages}>{messagesElements}</div>
    </div>
  );
};

export default Dialogs;
