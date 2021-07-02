import React, { useState } from 'react';
import styles from './Menu.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Menu: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const Options = () => (
    <>
      <nav>
        <ul className={styles.ul}>
          <li>
            <a href="/cv.pdf" target="_blank">
              Mon CV
            </a>
          </li>
          <li>
            <a href="#section">Mes projets</a>
          </li>
          <li>A propos de moi</li>
          <li>Contact</li>
        </ul>
      </nav>
    </>
  );

  return (
    <>
      <div className={styles.mobile}>
        <div className={styles.menu_toggler}>
          <FontAwesomeIcon
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ cursor: 'pointer' }}
            icon={faBars}
            size="2x"
          />
        </div>

        {menuOpen && (
          <div className={styles.menu}>
            <div className={styles.menu_toggler}>
              <FontAwesomeIcon
                onClick={() => setMenuOpen(!menuOpen)}
                style={{ cursor: 'pointer' }}
                icon={faTimes}
                size="2x"
              />
            </div>
            <Options />
          </div>
        )}
      </div>

      <div className={styles.desktop}>
        <div className={styles.menu}>
          <Options />
        </div>
      </div>
    </>
  );
};

export default Menu;
