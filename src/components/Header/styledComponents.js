import styled, {keyframes, css} from 'styled-components'
import {GiHamburgerMenu} from 'react-icons/gi'

export const HeaderContainer = styled.header`
  height: 10vh;
  display: flex;
  align-items: center;
  background-color: #1a1a1d;
  @media screen and (min-width: 992px) {
    height: 12vh;
  }
`

export const GameName = styled.h1`
  color: #ffffff;
  margin-top: 0px;
  margin-bottom: 0px;
  display: flex;
  align-items: center;
  flex-grow: 1;
  justify-content: center;
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
  font-weight: bold;
  font-size: 15px;
  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
  margin: 0 10px;
  text-transform: uppercase;
  letter-spacing: 2px;
  transition: color 0.3s ease-in-out;

  color: ${props => (props.isgreen === 'true' ? '#00FF00' : '#FF0000')};

  &:hover {
    color: ${props => (props.isgreen === 'true' ? 'lightgreen' : 'tomato')};
  }

  ${props =>
    props.animate === 'true' &&
    css`
      animation: ${props.isGreen ? greenPulse : redPulse} 1s infinite;
    `}
`

export const MenuIcon = styled(GiHamburgerMenu)`
  color: #ffffff;
  margin-left: 20px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
