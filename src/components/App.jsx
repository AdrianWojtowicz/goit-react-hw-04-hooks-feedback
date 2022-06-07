import { useState } from "react";
import PropTypes from 'prop-types';
import { Statistics } from "./Statistics/Statistics";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Section } from "./Section/Section";
import { Notification } from "./Notification/Notification";

export const App = ({ good, neutral, bad }) => {
  const [goodd, setGood] = useState(0);
  const [neutrall, setNeutral] = useState(0);
  const [badd, setBad] = useState(0);

  const countTotalFeedback = () => {
    return goodd + neutrall + badd
  }

  const countPositiveFeedbackPercentage = () => {
    return Math.round(goodd / countTotalFeedback() * 100)
  }

  const goodFeed = () => {
    setGood(goodd+1);
  }

  const neutralFeed = () => {
    setNeutral(neutrall+1);
  }

  const badFeed = () => {
    setBad(badd+1);
  }
  
  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={goodFeed}
          onLeaveFeedback="Good" />
        <FeedbackOptions
          options={neutralFeed}
          onLeaveFeedback="Neutral" />
        <FeedbackOptions
          options={badFeed}
          onLeaveFeedback="Bad" />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() ? (
          <Statistics
            good={goodd}
            neutral={neutrall}
            bad={badd}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()} />)
            : (<Notification message="There is no feedback" />)}
      </Section>
    </div>
  )
}

App.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
}