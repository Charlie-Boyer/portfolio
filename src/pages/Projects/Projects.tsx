import styles from './Projects.module.scss';
import Container from '../../components/Container/Container';
import { Project } from '../../types/Project';
import projectList from '../../data/projects';
import Card from '../../components/Card/Card';
import { Link } from 'react-router-dom';

const Projects: React.FC = () => {
  return (
    <Container customClass={styles.container}>
      {projectList.map((project) => (
        <a href={project.url} target="_blank">
          <div className={styles.card}>
            <Card project={project}></Card>
          </div>
        </a>
      ))}
    </Container>
  );
};

export default Projects;
