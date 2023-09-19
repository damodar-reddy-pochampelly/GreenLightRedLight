/* eslint-disable jsx-a11y/label-has-associated-control */
import {useState, useContext} from 'react'
import {GameContext} from '../../Context/UserContext'

import {
  BgContainer,
  FormContainer,
  Heading,
  Form,
  InputFieldContainer,
  InputLabel,
  InputField,
  DropdownElement,
  OptionElement,
  ErrorMessage,
  EnterGameButton,
  ImageContainer,
  Image,
  LoginBgContainer,
} from './styledComponents'

const RegistrationForm = props => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    difficultyLevel: 'Easy',
  })

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    mobile: '',
  })

  const {userData, setUserData} = useContext(GameContext)

  const isValidEmail = email => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/ // Basic email validation regex
    return emailRegex.test(email)
  }

  const isValidMobile = mobile => {
    const mobileRegex = /^\d{10}$/ // Basic mobile number validation regex (10 digits)
    return mobileRegex.test(mobile)
  }

  const validateField = (name, value) => {
    let error = ''
    switch (name) {
      case 'name':
        if (!value.trim()) {
          error = 'Name is required'
        }
        break
      case 'email':
        if (!value.trim()) {
          error = 'Email is required'
        } else if (!isValidEmail(value)) {
          error = 'Invalid email address'
        }
        break
      case 'mobile':
        if (!value.trim()) {
          error = 'Mobile number is required'
        } else if (!isValidMobile(value)) {
          error = 'Invalid mobile number'
        }
        break
      default:
        break
    }
    setErrors({...errors, [name]: error})
  }

  const handleInputChange = e => {
    const {name, value} = e.target
    setFormData({...formData, [name]: value})
    validateField(name, value)
  }

  const validateForm = () => {
    errors.name = !formData.name.trim() ? 'Name is required' : errors.name
    errors.email = !formData.email.trim() ? 'Email is required' : errors.email
    errors.mobile = !formData.mobile.trim()
      ? 'Mobile number is required'
      : errors.mobile
    setErrors({...errors})
  }

  const handleSubmit = e => {
    e.preventDefault()

    validateForm()

    // Check if there are any validation errors
    if (Object.values(errors).every(error => error === '')) {
      //   setUserData(formData)
      const filteredData = userData.filter(
        data =>
          data.email !== formData.email ||
          data.difficultyLevel !== formData.difficultyLevel,
      )
      const commonData = userData.find(
        data =>
          data.email === formData.email &&
          data.difficultyLevel === formData.difficultyLevel,
      )
      let updatedUserData
      if (commonData !== undefined) {
        updatedUserData = [...filteredData, commonData]
      } else {
        updatedUserData = [...filteredData, formData]
      }
      setUserData(updatedUserData)
      localStorage.setItem('playerData', JSON.stringify(updatedUserData))
      const {history} = props
      history.replace('/play')
    }

    // Handle form submission (e.g., send data to a server)
  }

  return (
    <BgContainer>
      <LoginBgContainer>
        <ImageContainer>
          <Image src="https://i.ibb.co/myTtffM/1177232.jpg" />
        </ImageContainer>
        <FormContainer>
          <Heading>Ready to Play? Register Here!</Heading>
          <Form onSubmit={handleSubmit}>
            <InputFieldContainer>
              <InputLabel htmlFor="name">Name</InputLabel>
              <InputField
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />
              <ErrorMessage>{errors.name}</ErrorMessage>
            </InputFieldContainer>
            <InputFieldContainer>
              <InputLabel htmlFor="email">Email</InputLabel>
              <InputField
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
              <ErrorMessage>{errors.email}</ErrorMessage>
            </InputFieldContainer>
            <InputFieldContainer>
              <InputLabel htmlFor="mobile">Mobile Number</InputLabel>
              <InputField
                type="tel"
                id="mobile"
                name="mobile"
                value={formData.mobile}
                onChange={handleInputChange}
              />
              <ErrorMessage>{errors.mobile}</ErrorMessage>
            </InputFieldContainer>
            <InputFieldContainer>
              <InputLabel htmlFor="difficulty">
                Select Difficulty Level
              </InputLabel>
              <DropdownElement
                id="difficulty"
                name="difficultyLevel"
                value={formData.difficultyLevel}
                onChange={handleInputChange}
              >
                <OptionElement value="Easy">Easy</OptionElement>
                <OptionElement value="Medium">Medium</OptionElement>
                <OptionElement value="Hard">Hard</OptionElement>
              </DropdownElement>
            </InputFieldContainer>
            <EnterGameButton type="submit">Enter the Game</EnterGameButton>
          </Form>
        </FormContainer>
      </LoginBgContainer>
    </BgContainer>
  )
}

export default RegistrationForm
