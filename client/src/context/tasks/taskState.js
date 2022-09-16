import React, { useReducer } from "react";
import { v4 as uuid } from 'uuid';
import taskReducer from "./taskReducer";
import TaskContext from "./taskContext";

import { 
    TASK_PROJECT, 
    ADD_TASK, 
    ERROR_TASK_FORM, 
    DELETE_TASK, 
    STATE_TASK,
    ACTUAL_TASK,
    UPDATE_TASK
} from "../../types";

const TaskState = (props) => {
    const initialState = {
        tasks: [
        { id: 1, name: "Choose Platform", state: true, projectId: 1 },
        { id: 2, name: "Choose Colors", state: false, projectId: 2 },
        { id: 3, name: "Choose Payment Platform", state: false, projectId: 3 },
        { id: 4, name: "Choose Hosting", state: false, projectId: 4 },
        { id: 5, name: "Choose Platform", state: true, projectId: 4 },
        { id: 6, name: "Choose Colors", state: false, projectId: 3 },
        { id: 7, name: "Choose Payment Platform", state: false, projectId: 2 },
        { id: 8, name: "Choose Hosting", state: false, projectId: 2 },
        ],
        taskProjects: null,
        errorTask: false,
        selectedTask: null,
    };
    
    // Create dispatch and state
    const [state, dispatch] = useReducer(taskReducer, initialState);
    
    // Create the functions
    
    // Get the tasks of a project
    const getTasks = (projectId) => {
        dispatch({
            type: TASK_PROJECT,
            payload: projectId,
        });
    };

    // Add a task to the selected project
    const addTask = (task) => {
        task.id = uuid();
        dispatch({
            type: ADD_TASK,
            payload: task,
        });
    };

    // Validate and show an error if necessary
    const validateTask = () => {
        dispatch({
            type: ERROR_TASK_FORM,
        });
    };

    // Delete a task by its ID
    const deleteTask = (taskId) => {
        dispatch({
            type: DELETE_TASK,
            payload: taskId,
        });
    };

    // Change the state of a task
    const changeStateTask = (task) => {
        dispatch({
            type: STATE_TASK,
            payload: task,
        });
    };

    // Extract a task for edition
    const saveActualTask = (task) => {
        dispatch({
            type: ACTUAL_TASK,
            payload: task,
        });
    };

    // Edit and update a task
    const updateTask = (task) => {
        dispatch({
            type: UPDATE_TASK,
            payload: task,
        });
    };


    // Return provider
    return (
        <TaskContext.Provider
        value={{
            tasks: state.tasks,
            taskProjects: state.taskProjects,
            errorTask: state.errorTask,
            selectedTask: state.selectedTask,

            getTasks,
            addTask,
            validateTask,
            deleteTask,
            changeStateTask,
            saveActualTask,
            updateTask,
        }}
        >
        {props.children}
        </TaskContext.Provider>
    );
}

export default TaskState;