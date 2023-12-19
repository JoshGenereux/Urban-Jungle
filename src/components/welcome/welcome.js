import React from 'react';
import styles from './welcome.module.scss';

const Welcome = () => {
  return (
    <div className={styles.welcome}>
      <div className={styles.header}>Urban Jungle</div>
      <div className={styles.moto}>
        Explore Nature's Tapestry. Dive into the Lush World of Plants, Discover
        Their Secrets, and Cultivate Your Green Oasis. Knowledge Grows Here!
      </div>
      <button className={styles.start}>Get Started</button>
    </div>
  );
};

export default Welcome;
