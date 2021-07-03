import styles from './Projects.module.scss';
import Container from '../../components/Container/Container';
import { Project } from '../../types/Project';
import projectList from '../../data/projects';
import Card from '../../components/Card/Card';

const Projects: React.FC = () => {
  return (
    <Container customClass={styles.container}>
      {projectList.map((project) => (
        <div className={styles.card}>
          <Card project={project}></Card>
        </div>
      ))}
    </Container>
  );
};

export default Projects;
