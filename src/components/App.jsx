import { Component } from "react";
import PropTypes from 'prop-types';
import { Statistics } from "./Statistics/Statistics";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Section } from "./Section/Section";
import { Notification } from "./Notification/Notification";

export class App extends Component {

  static propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,

  };

  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad
  }

  countPositiveFeedbackPercentage = () => {
    return Math.round(this.state.good / this.countTotalFeedback() * 100)
  }

  goodFeed = () => {
    this.setState(state => ({ good: state.good + 1 }));
  }

  neutralFeed = () => {
    this.setState(state => ({ neutral: state.neutral + 1 }));
  }

  badFeed = () => {
    this.setState(state => ({ bad: state.bad + 1 }));
  }

  render() {
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.goodFeed}
            onLeaveFeedback="Good" />
          <FeedbackOptions
            options={this.neutralFeed}
            onLeaveFeedback="Neutral" />
          <FeedbackOptions
            options={this.badFeed}
            onLeaveFeedback="Bad" />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()} />)
              : (<Notification message="There is no feedback" />)}
        </Section>
      </div>
    );
  }
};