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
          <div className={Props.customClass}>A propos de moi</div>
        </Link>
        <Link to="/skills">
          <div className={Props.customClass}>Compétences</div>
        </Link>
        <Link to="/projects">
          <div className={Props.customClass}>Projets</div>
        </Link>
        <Link to="/contact">
          <div className={Props.customClass}>Contact</div>
        </Link>
      </nav>
    </div>
  );
};

export default Menu;
