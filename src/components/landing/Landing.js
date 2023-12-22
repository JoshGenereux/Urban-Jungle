import React from 'react';
import styles from './landing.module.scss';
import Header from '../header/Header';
import Welcome from '../welcome/welcome';
import { useSelector, useDispatch } from 'react-redux';
import { show, hide } from '../../redux/slices/landingModalSlice';

const Landing = () => {
  const modalIsShowing = useSelector((state) => state.landingModal.showModal);
  const showHeader = useSelector((state) => state.landingHeader.showHeader);

  return (
    <div className={styles.landing}>
      <div className={styles.upperContainer}>
        <div className={styles.left}></div>
        <div className={styles.right}></div>
      </div>
      <div className={styles.footer}></div>
    </div>
  );
};

export default Landing;
