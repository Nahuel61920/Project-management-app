import React, { useState } from 'react'
import { Link } from "react-router-dom";

function Login() {
    const [user, stateUser] = useState({
        email: "",
        password: ""
    })

    // extraer de user
    const { email, password } = user;

    function onChageLog(e) {
        stateUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    function onSubmitLog(e) {
        e.preventDefault()
    }
    return (
        <div className='form-usuario'>
            <div className='contenedor-form sombra-dark'>
                <h1>Login</h1>

                <form onSubmit={onSubmitLog}>
                    <div className='campo-form'>
                        <label htmlFor='email'>Email</label>
                        <input
                            type="email"
                            id='email'
                            name='email'
                            placeholder='Email'
                            value={email}
                            onChange={onChageLog}
                        />
                    </div>
                    <div className='campo-form'>
                        <label htmlFor='password'>Password</label>
                        <input
                            type="password"
                            id='password'
                            name='password'
                            placeholder='Password'
                            value={password}
                            onChange={onChageLog}
                        />
                    </div>
                    <div className='campo-form'>
                        <input
                            type="submit"
                            className="btn btn-primario btn-block"
                            value="Login"
                        />
                    </div>
                </form>
                <Link to={"/sign-in"} className="enlace-cuenta">
                    Sign In
                </Link>
            </div>
        </div >
    )
}

export default Login