import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]

  const [selected, setSelected] = useState(0)
  const [voteArray, setVoteArray] = useState([0, 0, 0, 0, 0, 0, 0])

  const handleQuote = () => {
    const randomizer = Math.floor(Math.random() * (6 - 0 + 1) + 0)
    setSelected(randomizer)
    console.log(selected)
    Most()
  }

  const handleVote = () => {
    const copy = [...voteArray]
    copy[selected] += 1
    setVoteArray(copy)
    console.log(copy)
    Most()
  }

  const Most = () => {
    let most = 0;
    let index = 0;
    for(let i = 0; i < voteArray.length; i++) {
      if(most < voteArray[i]) {
        most = voteArray[i]
        index = i
      }
    }
    return (
      <>
        {anecdotes[index]}
        <br />has {most} votes
      </>
    )
  }


  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}
      <br/>has {voteArray[selected]} votes
      <br /><Button handleClick={handleQuote} text='next anecdote' />
      <br /><Button handleClick={handleVote} text='vote' />
      <h1>Anecdote with the most votes</h1>
      {Most()}
    </div>
  )
}

export default App;
