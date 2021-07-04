import styles from './Cube3d.module.scss';
import { Ts, Njs, Ht5, Cs3, MgDb, Rjs } from '../../images/logos/logos';

const Cube3d = () => {
  return (
    <div className={styles.container}>
      <div className={styles.cube}>
        <div className={styles.front}>
          <Ts />
        </div>
        <div className={styles.back}>
          <MgDb />
        </div>
        <div className={styles.right}>
          <Njs />
        </div>
        <div className={styles.left}>
          <Ht5 />
        </div>
        <div className={styles.top}>
          <Cs3 />
        </div>
        <div className={styles.bottom}>
          <Rjs />
        </div>
      </div>
    </div>
  );
};

export default Cube3d;
