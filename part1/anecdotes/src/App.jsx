import { useState } from "react";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(
    Math.floor(Math.random() * anecdotes.length)
  );
  const [vote, setVote] = useState(Array(anecdotes.length).fill(0));

  function handleVote() {
    const copy = [...vote];
    copy[selected]++;
    setVote(copy);
  }

  function handleRandomAnecdote() {
    const currentRandomAnecdote = selected;
    let randomAnecdote = Math.floor(Math.random() * anecdotes.length);

    while (currentRandomAnecdote === randomAnecdote) {
      randomAnecdote = Math.floor(Math.random() * anecdotes.length);
    }

    setSelected(randomAnecdote);
  }

  const highestVote = Math.max(...vote);
  const highestVoteAnecdote = vote.indexOf(highestVote);

  return (
    <div>
      <h2>Anectode of the day</h2>
      <div>
        <p>{anecdotes[selected]}</p>
        <p>has {vote[selected]} votes</p>
      </div>

      <button onClick={handleVote}>vote</button>
      <button onClick={handleRandomAnecdote}>next anecdote</button>

      <h2>Anectode with most votes</h2>
      <p>{anecdotes[highestVoteAnecdote]}</p>
      <p>has {highestVote} votes</p>
    </div>
  );
};

export default App;
