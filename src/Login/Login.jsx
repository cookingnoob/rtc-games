import { LoginProvider } from "./LoginContext"
import LoginWindow from "./components/LoginWindow"

const Login = () => {


  return (
    <>
    <LoginProvider>
    <LoginWindow/>
    </LoginProvider>
    </>
    
  )
}

export default Login