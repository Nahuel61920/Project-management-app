import React, { useState, useContext, useEffect } from 'react'
import { Link } from "react-router-dom";
import AlertContext from '../../context/alerts/alertContext';
import AuthContext from '../../context/auth/authContext';

function Login(props) {
    const alertContext = useContext(AlertContext);
    const { alert, showAlert } = alertContext;

    const authContext = useContext(AuthContext);
    const {
        message, 
        authenticated,

        login
    } = authContext;

    useEffect(() => {
        if (authenticated) {
            props.history.push('/projects');
        }

        if (message) {
            showAlert(message.msg, message.category);
        }
    }, [message, authenticated, props.history])

    const [user, setUser] = useState({
        email: "",
        password: ""
    })

    // extraer de user
    const { email, password } = user;

    function onChageLog(e) {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    function onSubmitLog(e) {
        e.preventDefault()

        // validar que no haya campos vacios
        if (email.trim() === "" || password.trim() === "") {
            showAlert("All fields are required", "alerta-error");
            return;
        }

        // pasarlo al action
        login({ email, password });
    }
    return (
        <div className='form-usuario'>
            {alert ? (<div className={`alerta ${alert.category}`}>{alert.msg}</div>) : null}
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
                <Link to={"/signin"} className="enlace-cuenta">
                    Sign In
                </Link>
            </div>
        </div >
    )
}

export default Login