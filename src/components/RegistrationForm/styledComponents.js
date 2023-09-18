import styled from 'styled-components'

export const BgContainer = styled.div`
  display: flex;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-image: url('');
  background-size: cover;
  background-color: black;
`

export const LoginBgContainer = styled.div`
  display: flex;
  width: 80%;
  height: 90%;
`

export const FormContainer = styled.div`
  background-color: #ffffff;
  width: 40%;
  padding: 25px;
  border-bottom-right-radius: 5px;
  border-top-right-radius: 5px;
`

export const ImageContainer = styled.div`
  width: 60%;
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
  color: #7e858e;
  font-family: 'Roboto';
  font-size: 13px;
  font-weight: 500;
`

export const InputField = styled.input`
  color: #475569;
  background-color: transparent;
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: normal;
  border: 1px solid #94a3b8;
  padding: 5px 10px;
  margin-top: 10px;
  outline: none;
  border-radius: 5px;
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
