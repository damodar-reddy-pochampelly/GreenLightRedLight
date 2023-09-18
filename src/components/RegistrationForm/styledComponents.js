import styled from 'styled-components'

export const BgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: black;
`

export const LoginBgContainer = styled.div`
  display: flex;
  width: 80%;
  height: 90%;
`

export const FormContainer = styled.div`
  width: 100%;
  padding: 25px;
  border-radius: 5px;
  background-image: url('https://i.ibb.co/myTtffM/1177232.jpg');
  background-size: cover;
  @media screen and (min-width: 768px) {
    width: 50%;
    border-bottom-left-radius: 0px;
    border-top-left-radius: 0px;
    background-image: none;
    background-color: #ffffff;
  }
  @media screen and (min-width: 992px) {
    width: 40%;
  }
`

export const ImageContainer = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    width: 50%;
    display: block;
  }
  @media screen and (min-width: 992px) {
    width: 60%;
  }
`

export const Image = styled.img`
  width: 100%;
  height: 100%;
`

export const Heading = styled.div`
  text-align: center;
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 20px;
  color: #ffffff;
  @media screen and (min-width: 768px) {
    color: #000000;
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`

export const InputFieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`

export const InputLabel = styled.label`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 13px;
  font-weight: 500;
  @media screen and (min-width: 768px) {
    color: #7e858e;
  }
`

export const InputField = styled.input`
  color: #475569;
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: normal;
  border: 1px solid #94a3b8;
  padding: 5px 10px;
  margin-top: 10px;
  outline: none;
  border-radius: 5px;
  @media screen and (min-width: 768px) {
    background-color: transparent;
  }
`

export const DropdownElement = styled.select`
  margin-top: 10px;
  padding: 5px 5px;
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 13px;
`

export const OptionElement = styled.option``

export const ErrorMessage = styled.span`
  font-family: 'Roboto';
  color: red;
  font-size: 13px;
`

export const EnterGameButton = styled.button`
  align-self: center;
  margin-top: 30px;
  padding: 8px 15px;
  border-radius: 5px;
  border: none;
  background-color: blue;
  color: #ffffff;
`
