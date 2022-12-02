import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postsElements = props.posts.map((p) => {
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
      <div className="">{postsElements}</div>
    </div>
  );
};

export default MyPosts;
