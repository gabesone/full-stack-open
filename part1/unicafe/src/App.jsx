import { useState } from "react";

const StatisticLine = ({ text, count }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{count}</td>
    </tr>
  );
};

const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad;
  const average = all / 3;
  const positive = (good / all) * 100;

  if (!all) return <p>No feedback given</p>;

  return (
    <table>
      <tbody>
        <StatisticLine text="good" count={good} />
        <StatisticLine text="neutral" count={neutral} />
        <StatisticLine text="bad" count={bad} />
        <StatisticLine text="all" count={all} />
        <StatisticLine text="average" count={average} />
        <StatisticLine text="positive" count={`${positive} %`} />
      </tbody>
    </table>
  );
};

const Button = ({ onHandleClick, text }) => {
  return <button onClick={onHandleClick}>{text}</button>;
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  function handleGoodClick() {
    setGood((good) => good + 1);
  }

  function handleNeutralClick() {
    setNeutral((neutral) => neutral + 1);
  }

  function handleBadClick() {
    setBad((bad) => bad + 1);
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button text="good" onHandleClick={handleGoodClick} />
      <Button text="neutral" onHandleClick={handleNeutralClick} />
      <Button text="bad" onHandleClick={handleBadClick} />

      <h2>statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
