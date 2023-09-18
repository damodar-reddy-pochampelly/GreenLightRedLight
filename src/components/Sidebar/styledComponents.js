import styled from 'styled-components'
import {MdLeaderboard} from 'react-icons/md'
import {IoLogoGameControllerB} from 'react-icons/io'
import {CgProfile} from 'react-icons/cg'

export const SidebarContainer = styled.div`
  background-color: #191919;
  @media screen and (max-width: 768px) {
    display: ${props => {
      if (props.show === 'true') {
        return 'flex'
      }
      return 'none'
    }};
    width: 50vw;
  }
  flex-direction: column;
  justify-content: space-between;
  @media screen and (min-width: 768px) {
    display: flex;
    width: 30vw;
  }
  @media screen and (min-width: 992px) {
    width: 18vw;
  }
`

export const SidebarMenu = styled.ul`
  list-style-type: none;
  padding-left: 0px;
  display: flex;
  flex-direction: column;
`

export const ProfileContainer = styled.li`
  display: flex;
  flex-direction: column;
  padding-left: 35px;
`

export const ProfileImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50px;
`

export const UserName = styled.p`
  color: #ffffff;
  padding-left: 10px;
`

export const SidebarOption = styled.li`
  display: flex;
  align-items: center;
  cursor: pointer;
  background-color: ${props => {
    if (props.active === 'true') {
      return '#4a90e2'
    }
    return '#191919'
  }};
  padding-left: 30px;
`

export const LeaderBoardIcon = styled(MdLeaderboard)`
  color: #ffffff;
  margin-right: 5px;
`

export const GameIcon = styled(IoLogoGameControllerB)`
  color: #ffffff;
  margin-right: 5px;
`
export const ProfileIcon = styled(CgProfile)`
  color: #ffffff;
  margin-right: 5px;
`

export const Option = styled.p`
  color: #ffffff;
  font-weight: bold;
  font-size: 16px;
`

export const ContactUsContainer = styled.div`
  padding-left: 40px;
`

export const ContactUsHeading = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 500;
  color: #ffffff;
`
export const SocialMediaIconsContainer = styled.div`
  display: flex;
  align-items: center;
`
export const ContactUsWishes = styled(ContactUsHeading)`
  font-size: 15px;
  font-family: 'Roboto';
  width: 70%;
  font-weight: 400;
  line-height: 1.25;
  color: #ffffff;
`

export const SocialMediaImage = styled.img`
  width: 25px;
  margin-right: 20px;
`
