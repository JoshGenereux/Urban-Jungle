import React from 'react';
import styles from './welcome.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { show, hide } from '../../redux/slices/landingModalSlice';

const Welcome = () => {
  const modalIsShowing = useSelector((state) => state.landingModal.showModal);
  console.log(modalIsShowing);

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
