import React from "react";
import styles from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={styles.item}>
      <img src="https://bipbap.ru/wp-content/uploads/2021/07/9-1.jpeg" />
      {props.message}
      <div>
        <span>Like: {props.likeCount}</span>
      </div>
    </div>
  );
};

export default Post;
