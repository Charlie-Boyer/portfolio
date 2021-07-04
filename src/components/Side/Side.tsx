import styles from './Side.module.scss';
import Menu from '../Menu/Menu';
import me from '../../images/me.jpg';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(fab);
function Side() {
  return (
    <div className={styles.container}>
      <div className={styles.picture}>
        <img src={me} alt="charlie_boyer" />
      </div>
      <div className={styles.menu}>
        <Menu customClass={styles.menu_elem} />
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
