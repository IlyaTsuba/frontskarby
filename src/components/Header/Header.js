import React from 'react';
import styles from './header.module.scss'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
                Галоуная
            </li>
            <li className={styles.navItem}>
                Рамяство
            </li>
            <li className={styles.navItem}>
                Увайсци
            </li>
          </ul>
        </nav>
      </header>
    );
};

export default Header;