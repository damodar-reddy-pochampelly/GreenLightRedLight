import {withRouter} from 'react-router-dom'

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
} from './styledComponents'

const Sidebar = props => {
  const handleLeaderBoardView = () => {
    const {history} = props
    history.replace('/leaderboard')
  }

  return (
    <SidebarContainer>
      <SidebarMenu>
        <ProfileContainer>
          <ProfileImage src="https://assets.ccbp.in/frontend/react-js/esther-howard-img.png" />
          <UserName>Name</UserName>
        </ProfileContainer>
        <SidebarOption onClick={handleLeaderBoardView}>
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
