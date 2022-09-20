import React, {useReducer} from "react";
import authContext from "./authContext";
import authReducer from "./authReducer";

import clientAxios from "../../config/axios";

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
        } catch (error) {
            console.log(error);

            dispatch({
                type: REGISTER_ERROR
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
                registerUser
            }}
        >
            {props.children}
        </authContext.Provider>
    )
}

export default AuthState;
