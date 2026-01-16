import { createContext, useState, useRef } from "react";

export const FeedbackContext = createContext();

export function Context({ children }) {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const refGood = useRef(0);
  const refNeutral = useRef(0);
  const refBad = useRef(0);

  const total = good + neutral + bad;

  function goodFeedback() {
    setGood((prev) => prev + 1);
    refGood.current += 1;
    console.log(`Good: ${refGood.current}`);
  }

  function neutralFeedback() {
    setNeutral((prev) => prev + 1);
    refNeutral.current += 1;
    console.log(`Neutral: ${refNeutral.current}`);
  }

  function badFeedback() {
    setBad((prev) => prev + 1);
    refBad.current += 1;
    console.log(`Bad: ${refBad.current}`);
  }

  function countTotalFeedbacks() {
    console.log(
      `Total Feedbacks: ${
        refBad.current + refGood.current + refNeutral.current
      }`,
    );
    return total; // використовуємо вже порахований total
  }

  function countPositiveFeedbackPercentage() {
    return total === 0 ? 0 : ((good / total) * 100).toFixed(0);
  }

  return (
    <FeedbackContext.Provider
      value={{
        good,
        neutral,
        bad,
        total, 
        goodFeedback,
        neutralFeedback,
        badFeedback,
        countTotalFeedbacks,
        countPositiveFeedbackPercentage,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
}
