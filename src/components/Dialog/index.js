import {withRouter} from 'react-router-dom'
import {
  DialogBgContainer,
  DialogBox,
  DialogMessage,
  TotalScore,
  PlayAgainButton,
  ViewLeaderBoardButton,
  DialogButtonsContainer,
  GameResult,
} from './styledComponents'

const Dialog = props => {
  const {gameResult, onPlayAgain, score} = props
  const labelColor = gameResult === 'Lost' ? 'red' : 'green'

  const onViewLeaderboard = () => {
    const {history} = props
    history.replace('/leaderboard')
  }

  return (
    <DialogBgContainer>
      <DialogBox>
        <DialogMessage>
          You <GameResult labelcolor={labelColor}>{gameResult}</GameResult>!
        </DialogMessage>
        <TotalScore>Score: {score}</TotalScore>
        <DialogButtonsContainer>
          <PlayAgainButton onClick={onPlayAgain} type="button">
            Play Again
          </PlayAgainButton>
          <ViewLeaderBoardButton onClick={onViewLeaderboard} type="button">
            View Leaderboard
          </ViewLeaderBoardButton>
        </DialogButtonsContainer>
      </DialogBox>
    </DialogBgContainer>
  )
}

export default withRouter(Dialog)
