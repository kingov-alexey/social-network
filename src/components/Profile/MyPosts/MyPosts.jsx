import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div className={styles.test}>
      my posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div className=''>
        <Post message="Hi? how are you?" likeCount="9"/>
        <Post message="It's my first post " likeCount="15"/>
      </div>
    </div>
  );
};

export default MyPosts;
