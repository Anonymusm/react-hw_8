import React from "react";
import { Section } from "./Section";

class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  goodFeedback = () => {
    this.setState((prevState) => ({ good: prevState.good + 1 }));
  };

  neutralFeedback = () => {
    this.setState((prevState) => ({ neutral: prevState.neutral + 1 }));
  };

  badFeedback = () => {
    this.setState((prevState) => ({ bad: prevState.bad + 1 }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return total === 0 ? 0 : ((good / total) * 100).toFixed(0);
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <div className="feedback">
        <Section
          good={good}
          neutral={neutral}
          bad={bad}
          onGood={this.goodFeedback}
          onNeutral={this.neutralFeedback}
          onBad={this.badFeedback}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        />
      </div>
    );
  }
}

export default Feedback;
