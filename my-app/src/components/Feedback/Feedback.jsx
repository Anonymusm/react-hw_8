import { useState } from "react";
import { Section } from "./Section";

export default function Feedback() {
  const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  function goodFeedback() {
  setGood(prev => prev + 1)
  };

  function neutralFeedback() {
  setNeutral(prev => prev + 1)
  };

  function badFeedback() {
  setBad(prev => prev + 1)
  };

  function countTotalFeedbacks() {
    return good + neutral + bad;
  };

  function countPositiveFeedbackPercentage() {
    const total = countTotalFeedbacks();
    return total === 0 ? 0 : ((good / total) * 100).toFixed(0);
  };
    return (
      <div className="feedback">
        <Section
          good={good}
          neutral={neutral}
          bad={bad}
          onGood={goodFeedback}
          onNeutral={neutralFeedback}
          onBad={badFeedback}
          total={countTotalFeedbacks()}
          positivePercentage={countPositiveFeedbackPercentage()}
        />
      </div>
    );
}

