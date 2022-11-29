import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import styles from './Profile.module.css';

const Profile = () => {
  return (
    <main className={styles.content}>
      <div>
        <img src='https://vsekidki.ru/uploads/posts/2016-08/1472384704_polygonal-background13.jpg' />
      </div>
      <div>ava+desc</div>
      <MyPosts />
    </main>
  );
};

export default Profile;
