/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import {useState, useEffect, useContext} from 'react'
import {GameContext} from '../../Context/UserContext'
import Dialog from '../Dialog'
import GameTimer from '../GameTimer'
// import '../../App.css'
import Sidebar from '../Sidebar'
import Header from '../Header'

import {
  BodyContainer,
  GameContainer,
  GameBgContainer,
  Box,
  ScoreLabel,
  Score,
  StartButton,
} from './styledComponents'

const difficultySettings = {
  Easy: {n: 10, y: 40},
  Medium: {n: 15, y: 40},
  Hard: {n: 25, y: 40},
}

const GreenLightRedLight = () => {
  const {userData, updateGameStats} = useContext(GameContext)
  const [gameStarted, setGameStarted] = useState(false)
  const [boxColor, setBoxColor] = useState('red')
  const [score, setScore] = useState(0)
  const [showDialog, setShowDialog] = useState(false)
  const [gameResult, setGameResult] = useState('')

  const gameOver = () => {
    setGameStarted(false)
    setBoxColor('red')
    setGameResult('Lost')
    setShowDialog(true)
    if (userData && userData.email) {
      updateGameStats(userData.email, 'Lost')
    }
  }

  const handleClick = () => {
    if (boxColor === 'green') {
      setScore(score + 1)
    } else if (gameStarted) {
      gameOver()
    }
  }

  const gameWon = () => {
    setGameStarted(false)
    setBoxColor('red')
    setGameResult('Won')
    setShowDialog(true)
    if (userData && userData.email) {
      updateGameStats(userData.email, 'Won')
    }
  }

  useEffect(() => {
    let timer

    if (gameStarted) {
      const timeLimit = difficultySettings[userData.difficultyLevel].y

      timer = setTimeout(() => {
        gameOver()
      }, timeLimit * 1000)
    }

    return () => {
      clearTimeout(timer)
    }
  }, [gameStarted, userData.difficultyLevel])

  useEffect(() => {
    let interval

    if (gameStarted) {
      interval = setInterval(() => {
        setBoxColor(prevColor => (prevColor === 'green' ? 'red' : 'green'))
      }, Math.floor(Math.random() * 1000) + 1000)
    }

    return () => clearInterval(interval)
  }, [gameStarted])

  useEffect(() => {
    if (score >= difficultySettings[userData.difficultyLevel].n) {
      gameWon()
    }
  }, [score])

  const handlePlayAgain = () => {
    setShowDialog(false)
    setScore(0)
    setGameStarted(false) // Set gameStarted to false initially
    setBoxColor('red')
  }

  return (
    <GameBgContainer>
      <Header />
      <BodyContainer>
        <Sidebar />
        <GameContainer>
          {gameStarted && (
            <GameTimer
              timeLimit={difficultySettings[userData.difficultyLevel].y}
              onTimeout={gameOver}
              running={gameStarted}
            />
          )}

          <Box boxcolor={boxColor} onClick={handleClick} />
          <ScoreLabel>
            Score: <Score>{score}</Score>
          </ScoreLabel>
          {showDialog && (
            <Dialog
              gameResult={gameResult}
              onPlayAgain={handlePlayAgain}
              score={score}
            />
          )}

          {!gameStarted && !showDialog && (
            <StartButton onClick={() => setGameStarted(true)} type="button">
              Start Game
            </StartButton>
          )}
        </GameContainer>
      </BodyContainer>
    </GameBgContainer>
  )
}

export default GreenLightRedLight
