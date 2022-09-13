import {NEW_PROJECT, ALL_PROJECTS, ADD_PROJECT, ACTUAL_PROJECT, DELETE_PROJECT, ERROR_FORM} from '../../types';

export default (state, action) => {
    switch (action.type) {
        case NEW_PROJECT:
        return {
            ...state,
            newProject: true,
        };
        case ALL_PROJECTS:
        return {
            ...state,
            projects: action.payload,
        };
        case ADD_PROJECT:
        return {
            ...state,
            projects: [...state.projects, action.payload],
            newProject: false,
            errorForm: false,
        };
        case ACTUAL_PROJECT:
        return {
            ...state,
            actualProject: state.projects.filter(project => project.id === action.payload),
        };
        case DELETE_PROJECT:
        return {
            ...state,
            projects: state.projects.filter(project => project.id !== action.payload),
            actualProject: null,
        };
        case ERROR_FORM:
        return {
            ...state,
            errorForm: true,
        };
        /* case "UPDATE_PROJECT":
        return {
            ...state,
            projects: state.projects.map((project) =>
            project._id === action.payload._id ? action.payload : project
            ),
            loading: false,
        };
        case "DELETE_PROJECT":
        return {
            ...state,
            projects: state.projects.filter(
            (project) => project._id !== action.payload
            ),
            loading: false,
        };
        case "PROJECT_ERROR":
        return {
            ...state,
            error: action.payload,
            loading: false,
        };
        case "SET_CURRENT":
        return {
            ...state,
            project: action.payload,
        };
        case "CLEAR_CURRENT":
        return {
            ...state,
            project: null,
        }; */
        default:
        return state;
    }
};