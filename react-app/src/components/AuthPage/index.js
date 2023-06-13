import LoginForm from "../auth/LoginForm"

function AuthPage(){

    return(
        <>
            <div>
                <div className='home-icon-container'>
                    <img className='home-icon' src='https://i.ibb.co/bPPwj59/hamlet-home.png' alt='A home icon featuring a colorful hamlet'/>
                    <span>Hamlet</span>
                </div>
            </div>
            <div>
                <LoginForm/>
            </div>
        </>
    )
};

export default AuthPage
