import { useContext } from "react";
import { FeedbackContext } from "../FeedbackContext";

export const FeedbackOptions = () => {
  const { goodFeedback, neutralFeedback, badFeedback } = useContext(FeedbackContext);
  
  return (
    <div>
      <button type="button" onClick={goodFeedback}>Good</button>
      <button type="button" onClick={neutralFeedback}>Neutral</button>
      <button type="button" onClick={badFeedback}>Bad</button>
    </div>
  );
};