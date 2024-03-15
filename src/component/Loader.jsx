import { motion } from "framer-motion";
import React from "react";
import { useLocation } from "react-router-dom";

const Loader = ({ loading }) => {
  const location = useLocation();

  const loaderAnimation = {
    initial: {
      opacity: 0,
      y: -100,
    },
    show: {
      opacity: 1,
      y: 0,
    },
    exit: {
      opacity: 0,
      y: -100,
    },
  };

  return (
    <>
      {/* {location.pathname != "/login" && ( */}
      <div className="fixed inset-0 w-screen h-screen flex justify-center   z-50">
        <motion.div
          variants={loaderAnimation}
          transition={{
            // duration: 0.2,
            // damping: 3,
            type: "spring",
            // stiffness: 50,
          }}
          initial="initial"
          animate="show"
          exit="exit"
          className=" absolute top-6 bg-white w-36 h-16 rounded-lg shadow-2xl flex items-center justify-center "
          // style={{
          //   animation: "editDoc .3s ease-out",
          // }}
        >
          <svg
            class="animate-spin border-2 border-black h-5 w-5 mr-3 "
            viewBox="0 0 24 24"
          />
          Loading...
        </motion.div>
      </div>
      {/* )} */}
    </>
  );
};

export default Loader;
