import React from 'react';
import styles from './header.module.scss'
import { Link } from 'react-router-dom';
import user_image  from '../../assets/image/ph_user.svg'

const Header = () => {
    return (
        <header className={styles.header}>

          <h1>Skarby</h1>

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
                <img src={user_image} alt="Изображение" />
            </li>
          </ul>
        </nav>
      </header>
    );
};

export default Header;