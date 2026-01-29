import { createContext, useRef, useReducer } from "react";

export const FeedbackContext = createContext();

function reducer(state, action) {
  switch (action.type) {
    case "GOOD": {
      return {
        ...state,
        good: state.good + 1,
      };
    }
    case "BAD": {
      return {
        ...state,
        bad: state.bad + 1,
      };
    }
    case "NEUTRAL": {
      return {
        ...state,
        neutral: state.neutral + 1,
      };
    }
    default:
      return state;
  }
}

export function Context({ children }) {
  const initialState = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  const [feedback, dispatch] = useReducer(reducer, initialState);

  const refGood = useRef(0);
  const refNeutral = useRef(0);
  const refBad = useRef(0);

  const total = feedback.good + feedback.neutral + feedback.bad;

  function goodFeedback() {
    dispatch({ type: "GOOD" });
    refGood.current += 1;
    console.log(`Good: ${refGood.current}`);
  }

  function neutralFeedback() {
    dispatch({ type: "NEUTRAL" });
    refNeutral.current += 1;
    console.log(`Neutral: ${refNeutral.current}`);
  }

  function badFeedback() {
    dispatch({ type: "BAD" });
    refBad.current += 1;
    console.log(`Bad: ${refBad.current}`);
  }

  function countTotalFeedbacks() {
    console.log(
      `Total Feedbacks: ${
        refBad.current + refGood.current + refNeutral.current
      }`,
    );
    return total;
  }

  function countPositiveFeedbackPercentage() {
    return total === 0 ? 0 : ((feedback.good / total) * 100).toFixed(0);
  }

  const { good, bad, neutral } = feedback;

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
