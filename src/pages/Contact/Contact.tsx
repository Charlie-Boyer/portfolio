import React from 'react';
import { motion } from 'framer-motion';
import styles from './Contact.module.scss';
import transition from '../../common/transition';

function Contact() {
  return (
    <motion.div
      initial="out"
      exit="out"
      animate="in"
      variants={transition}
      className={styles.container}
    >
      Contact
    </motion.div>
  );
}

export default Contact;
