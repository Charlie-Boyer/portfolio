import styles from './Skills.module.scss';
import Container from '../../components/Container/Container';
import Cube3d from '../../components/Cube3d/Cube3d';
import me from '../../images/me.jpg';

const Skills: React.FC = () => {
  return (
    <>
      <Container customClass={styles.container}>
        <div className={styles.img_container}>
          <Cube3d />
        </div>
        <div className={styles.about}>
          <h2 className="textTitle">Mes compétences</h2>
          <p className="text">
            La plupart du temps je développe en Javascript (React, Nodejs) mais
            suis capable d'intervenir sur d'autre langages comme php/symfony ou
            bien java/spring.
          </p>
          <p className="text">
            J'apprecie aussi bien le développement back que front.
          </p>
          <p className="text">
            J'aime tout ce qui est architecture micro-services, single page
            application, et accorde beaucoup d'importance à l'expérience
            utilisateur et à la robustesse des applications en général.
          </p>
        </div>
      </Container>
    </>
  );
};

export default Skills;
