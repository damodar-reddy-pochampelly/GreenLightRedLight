import styled, {keyframes, css} from 'styled-components'

export const HeaderContainer = styled.header`
  //   background-color: #000000;
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  //   background-color: #001f3f;
  //background-color: #36454f;
  background-color: #1a1a1d;
`

export const GameName = styled.h1`
  color: #ffffff;
  margin-top: 0px;
  margin-bottom: 0px;
`

// Define keyframe animations for pulse effect
const greenPulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`

const redPulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`

export const ColoredText = styled.span`
  font-weight: bold; /* Make the text bold */
  font-size: 24px;
  margin: 0 10px; /* Add spacing between the text */
  text-transform: uppercase; /* Convert text to uppercase */
  letter-spacing: 2px; /* Add letter spacing */
  transition: color 0.3s ease-in-out; /* Smooth color transition on hover */

  /* Apply color based on props */
  color: ${props => (props.isGreen ? '#00FF00' : '#FF0000')};

  /* Add hover effect for text color */
  &:hover {
    color: ${props => (props.isGreen ? 'lightgreen' : 'tomato')};
  }

  /* Add animation effect */
  ${props =>
    props.animate &&
    css`
      animation: ${props.isGreen ? greenPulse : redPulse} 1s infinite;
    `}
`
