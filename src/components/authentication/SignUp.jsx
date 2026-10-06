import { useState } from "react"
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase"
import FormInput from "../shared/FormInput"
import Button from "../shared/Button"

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: ''
}

function SignUp() {

  const [formFields, setFormFields] = useState(defaultFormFields)
  const { displayName, email, password, confirmPassword } = formFields

  const resetFromFields = () => {
    setFormFields(defaultFormFields)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormFields({
      ...formFields,
      [name]: value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      alert('passwords do not match')
      return
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(email, password)
      await createUserDocumentFromAuth(user, { displayName })
      resetFromFields()

    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        alert('Cannot create user or email already exist')
      } else {
        console.log('user creation ecounterd an error', error)
      }
    }
  }
  return (
    <div className="sign-up-container">
      <h2>You don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput label='Display Name' type="text" required onChange={handleChange} name="displayName" value={displayName} />
        <FormInput label='Email' type="email" required onChange={handleChange} name="email" value={email} />
        <FormInput label='Password' type="password" required onChange={handleChange} name="password" value={password} />
        <FormInput label='Confirm Password' type="password" required onChange={handleChange} name="confirmPassword" value={confirmPassword} />
        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  )
}

export default SignUp