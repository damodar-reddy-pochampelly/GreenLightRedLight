import {useState, useEffect} from 'react'
import {TimeLeft, TimeRemaining} from './styledComponents'
// import '../../App.css'

const GameTimer = ({timeLimit, onTimeout, running}) => {
  const [timeRemaining, setTimeRemaining] = useState(timeLimit)

  useEffect(() => {
    let timer
    if (running && timeRemaining > 0) {
      timer = setInterval(() => {
        setTimeRemaining(prevTime => prevTime - 1)
      }, 1000)
    }

    return () => {
      clearInterval(timer)
    }
  }, [running, timeRemaining])

  useEffect(() => {
    if (timeRemaining === 0) {
      onTimeout()
    }
  }, [timeRemaining, onTimeout])

  const formatTime = seconds => {
    // const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60

    let color
    if (seconds > timeLimit / 2) {
      color = 'green'
    } else if (seconds > timeLimit / 4) {
      color = 'blue'
    } else {
      color = 'red'
    }

    return (
      <TimeLeft>
        Time Left:{` `}
        <TimeRemaining color={color}>
          {remainingSeconds.toString().padStart(2, '0')}
        </TimeRemaining>
        {` `}seconds
      </TimeLeft>
    )
  }

  if (!running) {
    return null // or return an empty fragment <> </>;
  }

  return <div className="timer">{formatTime(timeRemaining)}</div>
}

export default GameTimer
