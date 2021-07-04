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
          <h2 className="textTitle">Colour is important too</h2>
          <br />
          <p className="text">
            Super quick one here - colour contrast is important.
            <br />A lot of star rating systems use yellow stars with no border.
            This provides terrible contrast wit🎶h the background and can be an
            issue for people with low contrast perception.
            <br />
            As such I have a dark grey border around my stars so they stand out
            even for people with contrast perception impairments (or people
            trying to use the site in direct sunlight....I am sure you know how
            annoying that can be on low contrast sit👍🙌es!).
          </p>
        </div>
      </Container>
    </>
  );
};

export default Skills;
