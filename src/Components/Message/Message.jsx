import React, { useEffect, useState } from "react";
import classes from "./Message.module.css";
import { motion, AnimatePresence } from "framer-motion";

const Message = ({ message }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div initial={{ y: "-100%", x: "-50%" }} animate={{ y: "0", x: "-50%" }} exit={{ y: "-200%", x: "-50%" }} className={classes.container}>
          {message}
          <div className={classes.timer}></div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Message;
