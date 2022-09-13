import React from 'react'
import { v4 as uuid } from 'uuid';
import projectsContext from './projectsContext'
import projectsReducer from './projectsReducer'

import {NEW_PROJECT, ALL_PROJECTS, ADD_PROJECT, ACTUAL_PROJECT,DELETE_PROJECT, ERROR_FORM} from '../../types';



const ProjectsState = ({ children }) => {
    const projects = [
        {id: 1, name: 'Project 1'},
        {id: 2, name: 'Project 2'},
        {id: 3, name: 'Project 3'},
    ]
    
    const initialState = {
        projects: [],
        newProject: false,
        errorForm: false,
        actualProject: null,
    }
    
    const [state, dispatch] = React.useReducer(projectsReducer, initialState)
    
    // Functions

    // Show new project form
    const showNewProject = () => {
        dispatch({
            type: NEW_PROJECT,
        })
    }

    // Get all projects
    const allProjects = () => {
        dispatch({
            type: ALL_PROJECTS,
            payload: projects,
        })
    }

    // Add new project
    const addProject = (project) => {
        project.id = uuid()
        dispatch({
            type: ADD_PROJECT,
            payload: project,
        })
    }

    // Validate form
    const showError = () => {
        dispatch({
            type: ERROR_FORM,
        })
    }

    // Actual project
    const projectActual = (projectId) => {
        dispatch({
            type: ACTUAL_PROJECT,
            payload: projectId,
        })
    }

    // Delete project
    const deleteProject = (projectId) => {
        dispatch({
            type: DELETE_PROJECT,
            payload: projectId,
        })
    }

    return (
        <projectsContext.Provider 
            value={{ 
                projects: state.projects,
                newProject: state.newProject,
                errorForm: state.errorForm,
                actualProject: state.actualProject,

                allProjects,
                showNewProject,
                addProject,
                showError,
                projectActual,
                deleteProject,
            }}
        >
        {children}
        </projectsContext.Provider>
    )
    
}

export default ProjectsState
    