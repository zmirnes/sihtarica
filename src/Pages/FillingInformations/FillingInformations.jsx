import React, { useState } from "react";
import classes from "./FillingInformations.module.css";
import { AnimatePresence, motion } from "framer-motion";

const questions = ["What is your current company?", "What is your current position in that company?", "Where is you company based?"];

const FillingInformations = () => {
  const [currQuestion, setCurrQuestion] = useState(0);

  const changeQuestions = (action) => {
    if (action === "next") {
      if (currQuestion < questions.length - 1) {
        setCurrQuestion((prev) => prev + 1);
      }
    } else if (action === "prev") {
      if (currQuestion > 0) {
        setCurrQuestion((prev) => prev - 1);
      }
    }
  };

  return (
    <div className={classes.container}>
      <div className={classes.overlay}>
        <div className={classes.heading}>
          <span>Let's add more informations about you...</span>
        </div>
        <div className={classes.questionBlock} style={{ overflow: "hidden" }}>
          <span className={classes.question}>
            {
              <AnimatePresence>
                <motion.div key={currQuestion} initial={{ x: "100%" }} animate={{ x: "0" }} exit={{ x: "-100%" }} transition={{ type: "spring" }}>
                  {questions[currQuestion]}
                </motion.div>
              </AnimatePresence>
            }
          </span>
          <input type="text" className={classes.answer} />
        </div>
        <div className={classes.actions}>
          <button className={classes.prevBtn} onClick={() => changeQuestions("prev")}>
            Previous
          </button>
          <button className={classes.nextBtn} onClick={() => changeQuestions("next")}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default FillingInformations;
