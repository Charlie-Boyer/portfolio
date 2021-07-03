import { useLayoutEffect, useRef } from 'react';
import styles from './Contact.module.scss';
import Container from '../../components/Container/Container';
import { MutableRefObject } from 'react';

const Contact: React.FC = () => {
  const formRef = useRef() as MutableRefObject<HTMLFormElement>;
  useLayoutEffect(() => {
    formRef.current.action = 'https://formspree.io';
    formRef.current.method = 'POST';
  }, []);

  return (
    <Container customClass={styles.container}>
      <div className={styles.head}>
        <h2 className="textTitle">Contact</h2>
        <p className="text">
          Vous avez des questions ou des commentaires, ou simplement pour dire
          bonjour, n'hésitez pas à me contacter!
        </p>
      </div>

      <div className={styles.form}>
        <h3 className="textTitle">Utilisez le formulaire...</h3>
        <form ref={formRef} id="contactform">
          <input type="hidden" name="_subject" value="Frozen Fractal inquiry" />
          <input type="text" name="_gotcha" />

          <p className="text">Adresse email (pour pouvoir vous répondre):</p>
          <input
            type="email"
            name="_replyto"
            placeholder="you@example.com"
            required
          />
          <p className="text">Message:</p>
          <textarea name="body" required></textarea>
          <p className="text"></p>
          <button type="submit">Envoyer</button>
        </form>
      </div>

      <div className={styles.mail}>
        <h3 className="textTitle">... ou envoyez moi un mail</h3>

        <a className="text" href="mailto:charlie.josuas@gmail.com">
          charlie.josuas@gmail.com
        </a>
      </div>
    </Container>
  );
};

export default Contact;
