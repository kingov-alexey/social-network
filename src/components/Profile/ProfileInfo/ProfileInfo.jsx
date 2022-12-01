import React from "react";
import styles from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img src="https://vsekidki.ru/uploads/posts/2016-08/1472384704_polygonal-background13.jpg" />
      </div>
      <div className={styles.profileInfo}>ava+desc</div>
    </div>
  );
};

export default ProfileInfo;
