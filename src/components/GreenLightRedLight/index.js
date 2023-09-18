/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import {useState, useEffect, useContext, useRef} from 'react'
import {GameContext} from '../../Context/UserContext'
import Dialog from '../Dialog'
import GameTimer from '../GameTimer'
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
  AudioElement,
  DifficultyDropDown,
  DifficultyOption,
  DifficultyLabel,
  DifficultyContainer,
} from './styledComponents'

const difficultySettings = {
  Easy: {n: 10, y: 40},
  Medium: {n: 15, y: 40},
  Hard: {n: 25, y: 40},
}

const GreenLightRedLight = () => {
  const {userData, setUserData, updateGameStats, sideBarStatus} = useContext(
    GameContext,
  )
  const [gameStarted, setGameStarted] = useState(false)
  const [boxColor, setBoxColor] = useState('red')
  const [score, setScore] = useState(0)
  const [showDialog, setShowDialog] = useState(false)
  const [gameResult, setGameResult] = useState('')
  const audioRef = useRef(null)
  const errorAudioRef = useRef(null)
  const successAudioRef = useRef(null)
  const levelRef = useRef(null)

  const currentPlayer = userData[userData.length - 1]

  const gameOver = () => {
    setGameStarted(false)
    setBoxColor('red')
    setGameResult('Lost')
    setShowDialog(true)
    updateGameStats(currentPlayer, 'Lost')
  }

  const handleClick = () => {
    if (boxColor === 'green') {
      audioRef.current.play()
      setScore(score + 1)
    } else if (gameStarted) {
      errorAudioRef.current.play()
      gameOver()
    }
  }

  const gameWon = () => {
    setGameStarted(false)
    setBoxColor('red')
    setGameResult('Won')
    setShowDialog(true)
    updateGameStats(currentPlayer, 'Won')
  }

  useEffect(() => {
    let timer

    if (gameStarted) {
      const timeLimit = difficultySettings[currentPlayer.difficultyLevel].y

      timer = setTimeout(() => {
        gameOver()
      }, timeLimit * 1000)
    }

    return () => {
      clearTimeout(timer)
    }
  }, [gameStarted, currentPlayer.difficultyLevel])

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
    if (score >= difficultySettings[currentPlayer.difficultyLevel].n) {
      successAudioRef.current.play()
      gameWon()
    }
  }, [score])

  const handlePlayAgain = () => {
    setShowDialog(false)
    setScore(0)
    setGameStarted(false)
    setBoxColor('red')
    levelRef.current.disabled = false
  }

  const handleChangeLevel = event => {
    let newObject = {
      name: currentPlayer.name,
      mobile: currentPlayer.mobile,
      email: currentPlayer.email,
      difficultyLevel: event.target.value,
    }
    const filteredData = userData.filter(eachData => {
      if (
        eachData.email === newObject.email &&
        eachData.difficultyLevel === newObject.difficultyLevel
      ) {
        newObject = {...eachData, ...newObject}
        return false
      }
      return true
    })
    setUserData([...filteredData, newObject])
  }

  return (
    <GameBgContainer>
      <Header />
      <BodyContainer>
        <Sidebar />
        <GameContainer show={sideBarStatus.toString()}>
          <DifficultyContainer>
            <DifficultyLabel htmlFor="gameDifficulty">Level</DifficultyLabel>
            <DifficultyDropDown
              id="gameDifficulty"
              onChange={handleChangeLevel}
              value={currentPlayer.difficultyLevel}
              ref={levelRef}
            >
              <DifficultyOption value="Easy">Easy</DifficultyOption>
              <DifficultyOption value="Medium">Medium</DifficultyOption>
              <DifficultyOption value="Hard">Hard</DifficultyOption>
            </DifficultyDropDown>
          </DifficultyContainer>
          {gameStarted && (
            <GameTimer
              timeLimit={difficultySettings[currentPlayer.difficultyLevel].y}
              onTimeout={gameOver}
              running={gameStarted}
            />
          )}

          <Box
            boxcolor={boxColor}
            onClick={handleClick}
            show={sideBarStatus.toString()}
          />
          <ScoreLabel show={sideBarStatus.toString()}>
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
            <StartButton
              onClick={() => {
                setGameStarted(true)
                levelRef.current.disabled = true
              }}
              type="button"
              show={sideBarStatus.toString()}
            >
              Start Game
            </StartButton>
          )}
          <AudioElement
            ref={audioRef}
            src="https://drive.google.com/uc?export=download&id=1BjQ8bhwGa0QqMibut4QXRPRoreXtGSHn"
            type="audio/mpeg"
          />
          <AudioElement
            ref={errorAudioRef}
            src="https://drive.google.com/uc?export=download&id=1jtHqA2Y8VlrzjsGFJf6JYVSRT6kzRs1o"
            type="audio/mpeg"
          />
          <AudioElement
            ref={successAudioRef}
            src="https://drive.google.com/uc?export=download&id=1Up8aI9BcvhAmzNEjXxsx2n_6W9wCqeFA"
            type="audio/mpeg"
          />
        </GameContainer>
      </BodyContainer>
    </GameBgContainer>
  )
}

export default GreenLightRedLight
