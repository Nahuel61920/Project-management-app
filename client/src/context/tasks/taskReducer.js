import { TASK_PROJECT, ADD_TASK, DELETE_TASK, ERROR_TASK_FORM, STATE_TASK, ACTUAL_TASK, UPDATE_TASK } from "../../types";

export default (state, action) => {
    switch (action.type) {
        case TASK_PROJECT:
        return {
            ...state,
            taskProjects: state.tasks.filter( task => task.projectId === action.payload)
        };
        case ADD_TASK:
        return {
            ...state,
            tasks: [action.payload, ...state.tasks],
            errorTask: false
        };
        case DELETE_TASK:
        return {
            ...state,
            tasks: state.tasks.filter((task) => task.id !== action.payload),
        };
        case UPDATE_TASK:
        return {
            ...state,
            tasks: state.tasks.map((task) => task.id === action.payload.id ? action.payload : task),
            selectedTask: null
        };
        case STATE_TASK:
        return {
            ...state,
            tasks: state.tasks.map((task) =>
            task._id === action.payload.id ? action.payload : task
            ),
        };
        case ACTUAL_TASK:
        return {
            ...state,
            selectedTask: action.payload,
        };
        case ERROR_TASK_FORM:
        return {
            ...state,
            errorTask: true,
        };
        default:
        return state;
    }
}