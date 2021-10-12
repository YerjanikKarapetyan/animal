import React, {useState} from "react";
import "./Login.css";

const Login = () => {
    const [login, setLogin] = useState('');

    const [pass, setPass] = useState('');


    return(
        <div>
            <div>
                <h1>
                    Login
                </h1>
                <input value={login} type={'text'}></input>
            </div>
            <div>
                <h1>
                    Password
                </h1>
                <input value ={pass} type={'password'}></input>
            </div>
        </div>
    )
}

export default Login;