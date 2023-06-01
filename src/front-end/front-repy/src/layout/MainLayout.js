import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import styles from './MainLayout.module.css';

function MainLayout() {
  return (
    <>
      <div className={styles.grid}>
          <Navbar />
          <Outlet className={styles.pageArea}/>
      </div>
    </>
  );
}

export default MainLayout;