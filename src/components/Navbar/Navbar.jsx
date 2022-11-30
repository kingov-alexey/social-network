import React from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className={`${styles.item} ${styles.active}`}>
        <a href="/profile">Profile</a>
      </div>
      <div className={styles.item}>
        <a href="/dialogs">Messages</a>
      </div>
      <div className={styles.item}>
        <a href="">News</a>
      </div>
      <div className={styles.item}>
        <a>Music</a>
      </div>
      <div className={styles.item}>
        <a>Settings</a>
      </div>
    </nav>
  );
};

export default Navbar;
