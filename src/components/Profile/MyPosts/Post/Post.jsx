import React from 'react';
import styles from './Post.module.css';

const Post = () => {
  return (
    <div className={styles.item}>
      <img src='https://bipbap.ru/wp-content/uploads/2021/07/9-1.jpeg' />
      post 1
      <div>
        <span>Like</span>
      </div>
    </div>
  );
};

export default Post;
