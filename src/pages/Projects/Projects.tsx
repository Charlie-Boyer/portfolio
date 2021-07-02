import React from 'react';
import styles from './Projects.module.scss';
import transition from '../../common/transition';
import { motion } from 'framer-motion';

function Projects() {
  return (
    <motion.div
      initial="out"
      exit="out"
      animate="in"
      variants={transition}
      className={styles.container}
    >
      Projects
    </motion.div>
  );
}

export default Projects;
