import {useContext} from 'react'
import {GameContext} from '../../Context/UserContext'

import {
  HeaderContainer,
  GameName,
  ColoredText,
  MenuIcon,
} from './styledComponents'

const Header = () => {
  const {sideBarStatus, setSideBarStatus} = useContext(GameContext)

  const handleMenuToggle = () => {
    setSideBarStatus(prevStatus => !prevStatus)
  }

  return (
    <HeaderContainer>
      <MenuIcon onClick={handleMenuToggle} />
      <GameName>
        <ColoredText isgreen="true" animate="true">
          Green Lights{' '}
        </ColoredText>
        <ColoredText animate="true">Red Lights</ColoredText>
      </GameName>
    </HeaderContainer>
  )
}

export default Header
