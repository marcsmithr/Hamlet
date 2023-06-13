import { useState } from "react"
import LoginForm from "../auth/LoginForm"
import SignUpForm from "../auth/SignUpForm"
import './index.css'

function AuthPage(){
    const [isLogin, setIsLogin] = useState(true)

    const loginFormId = isLogin? "" : "hidden"
    const signUpFormId = !isLogin? "" : "hidden"

    return(
        <div className="auth-page">
            <div>
                <div className='home-icon-container'>
                    <img className='home-icon' src='https://i.ibb.co/bPPwj59/hamlet-home.png' alt='A home icon featuring a colorful hamlet'/>
                    <span>Hamlet</span>
                </div>
            </div>
            <div className="login-form-container" id={loginFormId}>
                <LoginForm/>
                <span>New to Hamlet?</span>
                <span onClick={()=>setIsLogin(false)}>Sign Up</span>
            </div>
            <div className="signup-form-container" id={signUpFormId}>
                <SignUpForm/>
                <span>Already have an account?</span>
                <span onClick={()=>setIsLogin(true)}>Log In</span>
            </div>
        </div>
    )
};

export default AuthPage
