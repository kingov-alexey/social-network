import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';

import { updateNewPostTextActionCreator, addPostActionCreator } from '../../../redux/state';

const MyPosts = props => {
  let postsElements = props.posts.map(p => {
    return <Post message={p.message} likeCount={p.likeCount} />;
  });

  let newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch(addPostActionCreator());
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    //let action = { type: 'UPDATE-NEW-POST-TEXT', newText: text };
    let action = updateNewPostTextActionCreator(text);

    props.dispatch(action);
  };

  return (
    <div className={styles.postsBlock}>
      my posts
      <div>
        <div>
          <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      <div className=''>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
