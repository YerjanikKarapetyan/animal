import React, {useState} from "react";
import "./Login.css";

const Login = () => {
    const [login, setLogin] = useState('');
    const logFunc = (eventLogin) => setLogin(eventLogin.target.value);

    const [pass, setPass] = useState('');
    const passFunc = (eventPass) => setPass(eventPass.target.value);


    return(
        <div className={'main'}>
            <div className={'main-login'}>
                <h2>
                    Welcome
                </h2>
                 <div className={'input-login'}>
                <h4>
                    Login
                </h4>
                <input value={login} type={'text'} onChange={logFunc}/>
            </div>
            <div className={'input-login'}>
                <h4>
                    Password
                </h4>
                <input value ={pass} type={'password'} onChange={passFunc}/>
            </div>
            <div>
                <button>
                    Login
                </button>
            </div>
            </div>
           
        </div>
    )
}

export default Login;