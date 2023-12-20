import React, { useEffect } from 'react';
import styles from './welcome.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { show, hide } from '../../redux/slices/landingModalSlice';
import { toggleheader } from '../../redux/slices/landingHeaderSlice';

const Welcome = () => {
  const dispatch = useDispatch();

  const handleModal = () => {
    dispatch(hide());
    dispatch(toggleheader());
  };

  return (
    <div className={styles.welcome}>
      <div className={styles.header}>Urban Jungle</div>
      <div className={styles.moto}>
        Explore Nature's Tapestry. Dive into the Lush World of Plants, Discover
        Their Secrets, and Cultivate Your Green Oasis. Knowledge Grows Here!
      </div>
      <button className={styles.start} onClick={handleModal}>
        Get Started
      </button>
    </div>
  );
};

export default Welcome;
