import React from 'react';
import styles from './Profile.module.css';

const Profile = () => {
  return (
    <main className={styles.content}>
      <div>
        <img src='https://vsekidki.ru/uploads/posts/2016-08/1472384704_polygonal-background13.jpg' />
      </div>
      <div>ava+desc</div>
      <div>
        my posts
        <div>New posts</div>
        <div className=''>
          <div className={styles.item}>post 1</div>
          <div className={styles.item}>post 2</div>
          <div className={styles.item}>post 3</div>
        </div>
      </div>
    </main>
  );
};

export default Profile;
