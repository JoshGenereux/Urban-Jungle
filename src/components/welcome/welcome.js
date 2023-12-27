import React, { useEffect } from 'react';
import styles from './welcome.module.scss';
import { useSelector, useDispatch } from 'react-redux';

const Welcome = () => {
  const dispatch = useDispatch();

  return (
    <div className={styles.welcome}>
      <div className={styles.urban}>Urban Jungle</div>
      <div className={styles.mainText}>Plant Name</div>
      <div className={styles.infoText}>
        Sample text here to show what it will look like. Im not sure how much
        info there will be but I guess we will see
      </div>
    </div>
  );
};

export default Welcome;
