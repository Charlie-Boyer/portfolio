import { useState } from 'react';
import styles from './MenuBurger.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AnimatePresence, motion } from 'framer-motion';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import Menu from '../Menu/Menu';

library.add(fas);
library.add(fab);

const MenuBurger = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        <div>
          <a href="https://github.com/Charlie-Boyer" target="_blank">
            <FontAwesomeIcon
              className={styles.socials}
              icon={['fab', 'github']}
              size="2x"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/charlie-boyer1
"
            target="_blank"
          >
            <FontAwesomeIcon
              className={styles.socials}
              icon={['fab', 'linkedin']}
              size="2x"
            />
          </a>
        </div>
        <div>
          <FontAwesomeIcon
            className={styles.toggle}
            onClick={() => setMenuOpen(!menuOpen)}
            icon={['fas', 'bars']}
            size="2x"
          />
        </div>
      </div>
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ top: '-100%', opacity: 0 }}
            animate={{ top: '0rem', opacity: 1 }}
            exit={{ top: '-100%', opacity: 0 }}
            className={styles.menu}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Menu customClass={styles.menu_elem} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MenuBurger;
