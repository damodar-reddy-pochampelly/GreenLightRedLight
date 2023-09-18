import {styled} from 'styled-components'

export const DialogBgContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
`
export const DialogBox = styled.div`
  background: #fff;
  border-radius: 10px;
  padding: 20px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 80%;
  @media screen and (min-width: 768px) {
    width: 410px;
  }
`

export const DialogMessage = styled.p`
  font-size: 1.5em;
  margin-bottom: 20px;
`

export const TotalScore = styled.p``

export const DialogButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
`
export const PlayAgainButton = styled.button`
  background: #4caf50;
  border: none;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
  font-size: 1em;
  margin: 0 10px;
  padding: 10px 20px;
  transition: background 0.3s;

  &:hover {
    background: #45a049;
  }
`
export const ViewLeaderBoardButton = styled(PlayAgainButton)``

export const GameResult = styled.span`
  color: ${props => props.labelcolor};
`
