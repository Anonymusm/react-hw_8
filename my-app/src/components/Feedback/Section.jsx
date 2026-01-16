import { Statistics } from "./Statistics";
import { FeedbackOptions } from "./FeedbackOptions";
import { useContext } from "react";
import { FeedbackContext } from "../FeedbackContext";

export const Section = () => {
  const { total } = useContext(FeedbackContext);
  return (
    <section>
      <h2>Please leave feedback</h2>
      <FeedbackOptions />

      <h2>Statistics</h2>

      {total === 0 ? <p>No feedback given</p> : <Statistics />}
    </section>
  );
};
