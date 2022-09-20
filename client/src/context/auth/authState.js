import React, {useReducer} from "react";
import authContext from "./authContext";
import authReducer from "./authReducer";

import clientAxios from "../../config/axios";
import tokenAuth from "../../config/token";

import { REGISTER_SUCCESS, REGISTER_ERROR, GET_USER, LOGIN_SUCCESS, LOGIN_ERROR, LOGOUT } from "../../types";

const AuthState = props => {
    const initialState = {
        token: localStorage.getItem("token"),
        authenticated: null,
        user: null,
        message: null,
        loading: true
    }

    const [state, dispatch] = useReducer(authReducer, initialState);

    // Functions
    const registerUser = async data => {
        try {
            const response = await clientAxios.post("/users", data);
            console.log(response);

            dispatch({
                type: REGISTER_SUCCESS,
                payload: response.data
            });

            // Get the user
            authenticatedUser();
        } catch (error) {
            console.log(error);

            const alert = {
                msg: error.response.data.msg,
                category: "alerta-error"
            }

            dispatch({
                type: REGISTER_ERROR,
                payload: alert
            });
        }
    }

    // Return provider
    const authenticatedUser = async () => {
        const token = localStorage.getItem("token");
        if(token) {
            // Token in headers
            tokenAuth(token);
        }

        try {
            const response = await clientAxios.get("/auth");
            console.log(response.data);

            dispatch({
                type: GET_USER,
                payload: response.data.user
            });
            
        } catch (error) {
            console.log(error.response);
            
            dispatch({
                type: LOGIN_ERROR
            });
        }
    }

    // When the user logs in
    const login = async data => {
        try {
            const response = await clientAxios.post("/auth", data);
            console.log(response);
            
            dispatch({
                type: LOGIN_SUCCESS,
                payload: response.data
            });

            // Get the user
            authenticatedUser();
        } catch (error) {
            console.log(error.response.data.msg);

            const alert = {
                msg: error.response.data.msg,
                category: "alerta-error"
            }

            dispatch({
                type: LOGIN_ERROR,
                payload: alert
            });
        }
    }

    return (
        <authContext.Provider
            value={{
                token: state.token,
                authenticated: state.authenticated,
                user: state.user,
                message: state.message,
                loading: state.loading,

                registerUser,
                login,
                authenticatedUser
            }}
        >
            {props.children}
        </authContext.Provider>
    )
}

export default AuthState;
