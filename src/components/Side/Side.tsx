import styles from './Side.module.scss';
import SideMenu from './SideMenu';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

library.add(fab);
function Side() {
  return (
    <div className={styles.container}>
      <div className={styles.picture}>
        <img src="images/me.jpg" alt="" />
      </div>
      <div className={styles.menu}>
        <SideMenu />
      </div>
      <div className={styles.socials}>
        <a
          href="https://www.linkedin.com/in/charlie-boyer1
"
          target="_blank"
        >
          <FontAwesomeIcon icon={['fab', 'linkedin']} />
        </a>
        <a
          href="https://github.com/Charlie-Boyer
"
          target="_blank"
        >
          <FontAwesomeIcon icon={['fab', 'github']} />
        </a>
      </div>
    </div>
  );
}

export default Side;
