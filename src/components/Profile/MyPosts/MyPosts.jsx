import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  let posts = [
    { id: 1, message: 'post 1 test message1', likeCount: 11 },
    { id: 2, message: 'post 2 test message2', likeCount: 22 },
    { id: 3, message: 'post 3 test message3', likeCount: 33 },
    { id: 4, message: 'post 4 test message4', likeCount: 44 },
    { id: 5, message: 'post 5 test message5', likeCount: 55 },
    { id: 6, message: 'post 6 test message6', likeCount: 66 },
  ];

  let postsElements = posts.map(p => {
    return <Post message={p.message} likeCount={p.likeCount} />;
  });

  return (
    <div className={styles.postsBlock}>
      my posts
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div className=''>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
