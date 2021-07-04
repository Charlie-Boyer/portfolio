import styles from './Menu.module.scss';
import { Link } from 'react-router-dom';

interface Props {
  customClass: string;
}

const Menu: React.FC<Props> = (Props) => {
  return (
    <div className={styles.container}>
      <nav>
        <Link to="/about">
          <div className={Props.customClass}>Qui je suis</div>
        </Link>
        <Link to="/projects">
          <div className={Props.customClass}>Des projets</div>
        </Link>
        <Link to="/contact">
          <div className={Props.customClass}>Me contacter</div>
        </Link>
      </nav>
    </div>
  );
};

export default Menu;
