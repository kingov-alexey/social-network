import React from 'react';

import styles from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { updateNewMessageBodyCreator, sendMessageCreator } from './../../redux/dialogs-reducer';

const Dialogs = props => {
  let state = props.store.getState().dialogsPage;

  let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id} ava={d.ava} />);
  let messagesElements = state.messages.map(m => <Message message={m.message} />);
  let newMessageBody = state.newMessageBody;

  let onSendMessageClick = () => {
    props.store.dispatch(sendMessageCreator());
  };

  let onNewMessageChange = e => {
    let body = e.target.value;
    props.store.dispatch(updateNewMessageBodyCreator(body));
  };

  // let onSendMessageClick = () => {
  //   let text = newTextFromTextarea.current.value;
  //   props.store.dispatch(sendMessageCreator(text));
  //   alert(text);
  //   newTextFromTextarea.current.value = '';
  // };

  let newTextFromTextarea = React.createRef();

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsItems}>{dialogsElements}</div>
      <div className={styles.messages}>
        <div>{messagesElements}</div>
        <div>
          <div>
            <textarea
              value={newMessageBody}
              id=''
              ref={newTextFromTextarea}
              placeholder='Enter your message'
              onChange={onNewMessageChange}
            ></textarea>
          </div>
          <div>
            <button onClick={onSendMessageClick}>Send Message</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
