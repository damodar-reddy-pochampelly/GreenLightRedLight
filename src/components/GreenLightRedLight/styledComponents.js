import styled from 'styled-components'

export const GameBgContainer = styled.div`
  min-height: 100vh;
`

export const BodyContainer = styled.div`
  display: flex;
  height: 90vh;
`
export const GameContainer = styled.div`
  width: 82vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  //   background-image: linear-gradient(to bottom, #94c5e9, #fdfdfd); ;
  background-color: #ffffff;
  background-color: #f2f2f2;
  background-color: #282828;
`

export const Box = styled.div`
  background-color: ${props => props.boxcolor};
  height: 180px;
  width: 180px;
  position: relative;
  cursor: pointer;
  transition: box-shadow 0.3s ease-in-out;
  &:hover {
    // box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.3);
    // height: 200px;
    // width: 200px;
    transform: scale(1.05); /* Slightly scale up the Box */
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.5); /* Change the box-shadow on hover */
    transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out; /* Add a smooth transition */
  }
`

export const ScoreLabel = styled.p`
  color: #ffffff;
  font-weight: bold;
  background-color: #4a90e2;
  padding: 10px;
  border-radius: 8px;
  font-size: 20px;
  margin-top: 20px;
`

export const Score = styled.span``

export const StartButton = styled.button`
  margin-top: 20px;
  border-radius: 8px;
  background-color: #4caf50;
  background-color: #00ff00;
  border: none;
  color: #ffffff;
  font-size: 16px;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

  &:hover {
    background-color: #00cc00; /* Slightly darker green on hover */
    box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.3); /* Add a subtle shadow on hover */
  }
`
