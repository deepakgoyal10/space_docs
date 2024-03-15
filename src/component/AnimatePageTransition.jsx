import { motion } from "framer-motion";
import React from "react";

const animation = {
  initial: {
    opacity: 0,
    y: 300,
  },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -300 },
};

const AnimatePageTransition = ({ children }) => {
  return (
    <motion.div
      variants={animation}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.75, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatePageTransition;
