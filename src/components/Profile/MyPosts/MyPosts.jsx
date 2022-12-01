import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
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
      <div className="">
        <Post message="Hi? how are you?" likeCount="9" />
        <Post message="It's my first post " likeCount="15" />
      </div>
    </div>
  );
};

export default MyPosts;
