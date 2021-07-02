import React from 'react';
import styles from './SideMenu.module.scss';
import { Link } from 'react-router-dom';

function SideMenu() {
  return (
    <div className={styles.container}>
      <nav>
        <Link to="/about">
          <div className={styles.menu_elem}>Qui je suis</div>
        </Link>
        <Link to="/projects">
          <div className={styles.menu_elem}>Des projets</div>
        </Link>
        <Link to="/contact">
          <div className={styles.menu_elem}>Me contacter</div>
        </Link>
      </nav>
    </div>
  );
}

export default SideMenu;
