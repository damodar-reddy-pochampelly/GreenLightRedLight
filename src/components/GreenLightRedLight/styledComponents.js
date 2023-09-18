import styled from 'styled-components'

export const GameBgContainer = styled.div`
  min-height: 100vh;
`

export const BodyContainer = styled.div`
  display: flex;
  height: 90vh;
  @media screen and (min-width: 992px) {
    height: 88vh;
  }
`
export const GameContainer = styled.div`
  width: ${props => {
    if (props.show === 'true') {
      return '50vw'
    }
    return '100vw'
  }};
  @media screen and (min-width: 768px) {
    width: 70vw;
  }
  @media screen and (min-width: 992px) {
    width: 82vw;
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #282828;
`

export const Box = styled.div`
  background-color: ${props => props.boxcolor};
  height: 180px;
  height: ${props => {
    if (props.show === 'true') {
      return '150px'
    }
    return '180px'
  }};
  width: 180px;
  width: ${props => {
    if (props.show === 'true') {
      return '150px'
    }
    return '180px'
  }};
  @media screen and (min-width: 768px) {
    height: 180px;
    width: 180px;
  }
  position: relative;
  cursor: pointer;
  transition: box-shadow 0.3s ease-in-out;
  &:hover {
    transform: scale(1.05);
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.5);
    transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  }
`

export const ScoreLabel = styled.p`
  color: #ffffff;
  font-weight: bold;
  background-color: #4a90e2;
  padding: 10px;
  border-radius: 8px;
  font-size: ${props => {
    if (props.show === 'true') {
      return '15px'
    }
    return '20px'
  }};
  margin-top: 20px;
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`

export const Score = styled.span``

export const StartButton = styled.button`
  margin-top: 20px;
  border-radius: 8px;
  background-color: #00ff00;
  border: none;
  color: #ffffff;
  font-size: 16px;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

  &:hover {
    background-color: #00cc00;
    box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.3);
  }
`
export const AudioElement = styled.audio``

export const DifficultyDropDown = styled.select`
  background-color: #33adff;
  color: #ffffff;
  padding: 5px;
  font-size: 14px;
  outline: none;
`

export const DifficultyOption = styled.option``

export const DifficultyLabel = styled.label`
  color: #ffffff;
  margin-right: 5px;
`

export const DifficultyContainer = styled.div`
  margin-bottom: 30px;
  align-self: flex-end;
  margin-right: 20px;
`
