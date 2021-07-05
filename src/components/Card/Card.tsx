import styles from './Card.module.scss';
import { Project } from '../../types/Project';

interface Props {
  project: Project;
}

const Projects: React.FC<Props> = ({ project }) => {
  return (
    <div
      className={styles.container}
      style={{
        background: `url(${project.imgUrl})`,
        backgroundSize: 'contain',
      }}
    >
      <div className={styles.title}>{project.title}</div>
    </div>
  );
};

export default Projects;
