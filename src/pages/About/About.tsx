import styles from './About.module.scss';
import Container from '../../components/Container/Container';
import me from '../../images/me.jpg';

const About: React.FC = () => {
  return (
    <>
      <Container customClass={styles.container}>
        <div className={styles.img_container}>
          <img src={me} alt="charlie_boyer" />
        </div>
        <div className={styles.about}>
          <h2 className="textTitle">Qui je suis ?</h2>
          <p className="text">
            <span>Nom:</span> Boyer
          </p>
          <p className="text">
            <span>Prénom:</span> Charlie
          </p>
          <p className="text">
            <span>Age:</span> 35 ans
          </p>
          <p className="text">
            <span>Métier:</span> Développeur Web
          </p>
          <p className="text">
            <span>Langages:</span> React, Nodejs, Typescript, Php, Java
          </p>
          <p className="text">
            <span>Ville:</span> Quimper
          </p>
          <p className="text">
            <span>Centre d'intérêts:</span> Piano 🎹, Fitness 🏋🏾‍♀️, Jeux Vidéos 🕹
          </p>
          <p className="text">
            <span>Qualités:</span> Curieux, Optimiste, Logique
          </p>
          <p className="text">
            <span>Défauts:</span> Indécis, Distrait, Impatient
          </p>
        </div>
      </Container>
    </>
  );
};

export default About;
