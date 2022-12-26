import { useState } from 'react'

const Header = props => <h1>{props.name}</h1>

const Button = props => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Statistics = (props) => {
  return (
    <p>{props.name} {props.value}</p>
  )
}

const App = () => {
  const [clicks, setClicks] = useState({
    good: 0, neutral: 0, bad: 0
  })

  const handleGood = () =>
    setClicks({ ...clicks, good: clicks.good + 1 })
  console.log(clicks.good)

  const handleNeutral = () =>
    setClicks({ ...clicks, neutral: clicks.neutral + 1 })
  console.log(clicks.neutral)

  const handleBad = () =>
    setClicks({ ...clicks, bad: clicks.bad + 1 })
  console.log(clicks.bad)

  if (!clicks.good && !clicks.neutral && !clicks.bad) {
    return (
      <div>
        <Header name='give feedback' />
        <Button handleClick={handleGood} text='good' />
        <Button handleClick={handleNeutral} text='neutral' />
        <Button handleClick={handleBad} text='bad' />
        <Header name='statistics' />
        <p>No feedback given</p>
      </div>
    )
  } else {
    return (
      <div>
        <Header name='give feedback' />
        <Button handleClick={handleGood} text='good' />
        <Button handleClick={handleNeutral} text='neutral' />
        <Button handleClick={handleBad} text='bad' />
        <Header name='statistics' />
        <Statistics name='good' value={clicks.good} />
        <Statistics name='neutral' value={clicks.neutral} />
        <Statistics name='bad' value={clicks.bad} />
        <Statistics name='all' value={clicks.good + clicks.neutral + clicks.bad} />
        <Statistics name='average' value={(clicks.good + clicks.neutral + clicks.bad) / 3} />
        <Statistics name='positive ' value={clicks.good * (100 / (clicks.good + clicks.neutral + clicks.bad))} />
      </div>
    )
  }
}

export default App;

/* create component for button and for onClick

*/