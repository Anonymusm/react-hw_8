import React from "react";

export const Statistics = ({ goodFeedback, neutralFeedback, badFeedback, total, positivePercentage }) => {
  return (
    <div>
      <p>Good: {goodFeedback}</p>
      <p>Neutral: {neutralFeedback}</p>
      <p>Bad: {badFeedback}</p>
      <p>Total: {total}</p>
      <p>Positive feedback: {positivePercentage}%</p>
    </div>
  );
};
