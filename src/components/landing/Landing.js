import React, { useEffect } from 'react';
import styles from './landing.module.scss';
import Welcome from '../welcome/welcome';
import axios from 'axios';

const URL = 'http://localhost:5432';

const Landing = () => {
  // useEffect(() => {

  //   getAllPLants();
  // }, []);

  const getAllPLants = async () => {
    try {
      const response = await axios.get(`${URL}/api/getAll`);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.landing}>
      <div className={styles.upperContainer}>
        <div className={styles.left}>
          <div className={styles.header} onClick={getAllPLants}>
            Urban Jungle
          </div>
          <div></div>
        </div>
        <div className={styles.right}>
          <Welcome />
        </div>
      </div>
      <div className={styles.footer}></div>
    </div>
  );
};

export default Landing;
