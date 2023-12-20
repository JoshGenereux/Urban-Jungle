import React from 'react';
import styles from './header.module.scss';

const Header = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('search');
  };

  return (
    <div className={styles.header}>
      <div className={styles.urban}>Urban Jungle</div>
      <div></div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input className={styles.input} />
        <button className={styles.search}>search</button>
      </form>
    </div>
  );
};

export default Header;
