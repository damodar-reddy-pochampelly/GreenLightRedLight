import styled from 'styled-components'
import {MdLeaderboard} from 'react-icons/md'

export const SidebarContainer = styled.div`
  //   background-color: #1e293b;
  //   background-color: #b3e0ff;
  //   background-color: #4a6172;
  background-color: #191919;
  width: 18vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  //   padding: 20px;
`

export const SidebarMenu = styled.ul`
  list-style-type: none;
  padding-left: 0px;
  display: flex;
  flex-direction: column;
  //   align-items: center;
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
  color: #001f3f;
  color: #f2f2f2;
  color: #ffffff;
  padding-left: 25px;
`

export const SidebarOption = styled.li`
  display: flex;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: #66c2ff; /* Lighter blue background color on hover */
    background-color: #4a90e2;
    color: #001f3f; /* Dark Gray text color on hover */
  }
  padding-left: 30px;
`

export const LeaderBoardIcon = styled(MdLeaderboard)`
  color: #001f3f;
  color: #ffffff;
  margin-right: 5px;
`

export const Option = styled.p`
  color: #001f3f;
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
  color: #001f3f;
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
  color: #001f3f;
  color: #ffffff;
`

export const SocialMediaImage = styled.img`
  width: 25px;
  margin-right: 20px;
`
