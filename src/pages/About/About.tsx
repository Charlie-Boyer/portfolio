import React from 'react';
import styles from './About.module.scss';
import { motion } from 'framer-motion';
import transition from '../../common/transition';

function About() {
  return (
    <motion.div
      initial="out"
      exit="out"
      animate="in"
      variants={transition}
      className={styles.container}
    >
      <p className="textTitle">Colour is important too</p>
      <br />
      <p className="text">
        Super quick one here - colour contrast is important.
        <br />A lot of star rating systems use yellow stars with no border. This
        provides terrible contrast wit🎶h the background and can be an issue for
        people with low contrast perception.
        <br />
        As such I have a dark grey border around my stars so they stand out even
        for people with contrast perception impairments (or people trying to use
        the site in direct sunlight....I am sure you know how annoying that can
        be on low contrast sit👍🙌es!).
      </p>
    </motion.div>
  );
}

export default About;
