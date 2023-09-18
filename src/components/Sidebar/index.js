import {useContext} from 'react'
import {withRouter} from 'react-router-dom'
import {GameContext} from '../../Context/UserContext'

import {
  SidebarContainer,
  SidebarMenu,
  SidebarOption,
  LeaderBoardIcon,
  Option,
  ContactUsContainer,
  ContactUsHeading,
  SocialMediaIconsContainer,
  ContactUsWishes,
  SocialMediaImage,
  ProfileContainer,
  ProfileImage,
  UserName,
  GameIcon,
  ProfileIcon,
} from './styledComponents'

const Sidebar = props => {
  const {userData, sideBarStatus} = useContext(GameContext)

  const currentUser = userData[userData.length - 1]

  const handleLeaderBoardView = () => {
    const {history} = props
    history.replace('/leaderboard')
  }

  const handleNewUser = () => {
    const {history} = props
    history.replace('/')
  }

  const handleNewGame = () => {
    const {history} = props
    history.replace('/play')
  }

  const page = window.location.href.split('/')
  const pathOfPage = page[page.length - 1]

  return (
    <SidebarContainer show={sideBarStatus.toString()}>
      <SidebarMenu>
        <ProfileContainer>
          <ProfileImage src="https://xsgames.co/randomusers/avatar.php?g=male" />
          <UserName>{currentUser.name}</UserName>
        </ProfileContainer>
        <SidebarOption onClick={handleNewUser}>
          <ProfileIcon />
          <Option>New Player</Option>
        </SidebarOption>
        <SidebarOption
          active={(pathOfPage === 'play').toString()}
          onClick={handleNewGame}
        >
          <GameIcon />
          <Option>
            {pathOfPage === 'leaderboard' ? 'Playground' : 'In Game'}
          </Option>
        </SidebarOption>
        <SidebarOption
          onClick={handleLeaderBoardView}
          active={(pathOfPage === 'leaderboard').toString()}
        >
          <LeaderBoardIcon />
          <Option>Leader Board</Option>
        </SidebarOption>
      </SidebarMenu>
      <ContactUsContainer>
        <ContactUsHeading>CONTACT US</ContactUsHeading>
        <SocialMediaIconsContainer>
          <SocialMediaImage
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
            alt="facebook logo"
          />
          <SocialMediaImage
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
            alt="twitter logo"
          />
          <SocialMediaImage
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
            alt="linked in logo"
          />
        </SocialMediaIconsContainer>
        <ContactUsWishes>
          Enjoy! Now to see your channels and recommendations!
        </ContactUsWishes>
      </ContactUsContainer>
    </SidebarContainer>
  )
}

export default withRouter(Sidebar)
