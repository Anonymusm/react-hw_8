import { useContext } from "react";
import { FeedbackContext } from "../FeedbackContext";

export const Statistics = () => {
// У Statistics.jsx діставайте значення, а не функції
const { good, neutral, bad, countPositiveFeedbackPercentage } = useContext(FeedbackContext);

// Виклик у JSX:
return (
    <div>
<p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      {/* <p>Total: {total}</p> */}
     <p>Positive feedback: {countPositiveFeedbackPercentage()}%</p> 
    </div>
  );
};
