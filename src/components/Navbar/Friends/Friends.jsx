import React from "react";
import styles from "./Friends.module.css";

const Friends = (props) => {
  return (
    <div className={styles.wrap}>
      <div className={styles.title}>Friends</div>
      <div>
        <div className={styles.ava}>
          <img
            src="https://sovietgames.su/wp-content/uploads/2016/07/%D0%90%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%BA%D0%B0.jpg"
            alt=""
          />
        </div>
        <div className={styles.ava}>
          <img
            src="https://sovietgames.su/wp-content/uploads/2016/07/%D0%90%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%BA%D0%B0.jpg"
            alt=""
          />
        </div>
        <div className={styles.ava}>
          <img
            src="https://sovietgames.su/wp-content/uploads/2016/07/%D0%90%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%BA%D0%B0.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Friends;
