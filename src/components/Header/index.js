import {HeaderContainer, GameName, ColoredText} from './styledComponents'

const Header = () => (
  <HeaderContainer>
    <GameName>
      <ColoredText isGreen animate>
        Green Lights{' '}
      </ColoredText>
      <ColoredText animate>Red Lights</ColoredText>
    </GameName>
  </HeaderContainer>
)

export default Header
