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
      {modalIsShowing && <Welcome />}
      {showHeader && <Header />}
    </div>
  );
};

export default Landing;
