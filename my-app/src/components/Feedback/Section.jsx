import React from "react";
import { Statistics } from "./Statistics";
import { FeedbackOptions } from "./FeedbackOptions";

export const Section = ({
  good,
  neutral,
  bad,
  onGood,
  onNeutral,
  onBad,
  total,
  positivePercentage,
}) => {
  return (
    <section>
      <h2>Please leave feedback</h2>
      <FeedbackOptions onGood={onGood} onNeutral={onNeutral} onBad={onBad} />

      <h2>Statistics</h2>

      {total === 0 ? (
        <p>No feedback given</p>
      ) : (
        <Statistics
          goodFeedback={good}
          neutralFeedback={neutral}
          badFeedback={bad}
          total={total}
          positivePercentage={positivePercentage}
        />
      )}
    </section>
  );
};
