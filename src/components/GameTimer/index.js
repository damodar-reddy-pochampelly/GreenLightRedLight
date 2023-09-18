import {useState, useEffect} from 'react'
import {TimeLeft, TimeRemaining, TimerContainer} from './styledComponents'

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
    return null
  }

  return <TimerContainer>{formatTime(timeRemaining)}</TimerContainer>
}

export default GameTimer
