import { useLayoutEffect, useRef } from 'react';
import styles from './Contact.module.scss';
import Container from '../../components/Container/Container';

const Contact: React.FC = () => {
  return (
    <Container customClass={styles.container}>
      <div className={styles.head}>
        <h2 className="textTitle">Contact</h2>
        <p className="text">
          Vous avez des questions ou des commentaires, ou simplement pour dire
          bonjour, n'hésitez pas à me contacter!
        </p>
        <a className="text" href="mailto:charlie.josuas@gmail.com">
          charlie.josuas@gmail.com
        </a>
      </div>
    </Container>
  );
};

export default Contact;
