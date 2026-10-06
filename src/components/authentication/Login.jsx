import { useState } from "react"
import { signInWithGooglePopup, signInAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase"
import FormInput from "../shared/FormInput"
import Button from "../shared/Button"


const defaultFormFields = {
  email: '',
  password: '',
}

function Login() {

  const [formFields, setFormFields] = useState(defaultFormFields)
  const { email, password } = formFields



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

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();

  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      await signInAuthUserWithEmailAndPassword(email, password)
      resetFromFields()

    } catch (error) {
      if (error.code === 'auth/invalid-credential') {
        alert('incorrect password or email')
      }
    }
  }
  return (
    <div className="sign-up-container">
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput label='Email' type="email" required onChange={handleChange} name="email" value={email} />
        <FormInput label='Password' type="password" required onChange={handleChange} name="password" value={password} />
        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button type='button' buttonType='google' onClick={signInWithGoogle}>With Google</Button>
        </div>

      </form>
    </div>
  )
}

export default Login