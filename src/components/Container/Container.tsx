import React from 'react';
import { motion } from 'framer-motion';
import transition from '../../common/transition';

interface Props {
  customClass: string;
}

const Container: React.FC<Props> = (Props) => {
  return (
    <motion.div
      initial="out"
      exit="out"
      animate="in"
      variants={transition}
      className={Props.customClass}
    >
      {Props.children}
    </motion.div>
  );
};

export default Container;
