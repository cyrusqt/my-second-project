import React, { useState, useEffect } from 'react';
import styles from '../styles/Loader.module.css';

const Loader = ({ loading }) => {
  const [visible, setVisible] = useState(loading);

  // when parent tells us to stop loading, trigger fade‑out before unmounting
  useEffect(() => {
    if (!loading) {
      const timer = setTimeout(() => setVisible(false), 600); // match CSS transition
      return () => clearTimeout(timer);
    }
  }, [loading]);

  if (!visible) return null;

  return (
    <div
      className={`${styles.loaderContainer} ${!loading ? styles.hide : ''}`}
    >
      <h1 className={styles.logo}>Cyrus</h1>
    </div>
  );
};

export default Loader;
