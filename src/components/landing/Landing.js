import React from 'react';
import styles from './landing.module.scss';
import Header from '../header/Header';
import Welcome from '../welcome/welcome';

const Landing = () => {
  return (
    <div className={styles.landing}>
      <Welcome />
    </div>
  );
};

export default Landing;
