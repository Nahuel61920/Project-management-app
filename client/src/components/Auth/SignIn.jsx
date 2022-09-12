import React, { useState } from 'react'
import { Link } from "react-router-dom";

function SignIn() {
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        confirm: ""
    })

    // extraer de user
    const { name, email, password, confirm } = user;

    function onChageLog(e) {
        setUser({
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
                <h1>SignIn</h1>

                <form onSubmit={onSubmitLog}>
                    <div className='campo-form'>
                        <label htmlFor='name'>Name</label>
                        <input
                            type="text"
                            id='name'
                            name='name'
                            placeholder='Name'
                            value={name}
                            onChange={onChageLog}
                        />
                    </div>
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
                        <label htmlFor='confirm'>Confirm Password</label>
                        <input
                            type="password"
                            id='confirm'
                            name='confirm'
                            placeholder='Confirm Password'
                            value={confirm}
                            onChange={onChageLog}
                        />
                    </div>
                    <div className='campo-form'>
                        <input
                            type="submit"
                            className="btn btn-primario btn-block"
                            value="SignIn"
                        />
                    </div>
                </form>
                <Link to={"/"} className="enlace-cuenta">
                    Login
                </Link>
            </div>
        </div >
    )
}

export default SignIn