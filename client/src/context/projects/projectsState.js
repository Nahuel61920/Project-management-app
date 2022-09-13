import React from 'react'

import projectsContext from './projectsContext'
import projectsReducer from './projectsReducer'

import {NEW_PROJECT, ALL_PROJECTS} from '../../types';



const ProjectsState = ({ children }) => {
    const projects = [
        {id: 1, name: 'Project 1'},
        {id: 2, name: 'Project 2'},
        {id: 3, name: 'Project 3'},
    ]
    
    const initialState = {
        projects: [],
        newProject: false,
    }
    
    const [state, dispatch] = React.useReducer(projectsReducer, initialState)
    
    const showNewProject = () => {
        dispatch({
            type: NEW_PROJECT,
        })
    }

    const allProjects = () => {
        dispatch({
            type: ALL_PROJECTS,
            payload: projects,
        })
    }

    return (
        <projectsContext.Provider 
            value={{ 
                projects: state.projects,
                newProject: state.newProject,

                allProjects,
                showNewProject
            }}
        >
        {children}
        </projectsContext.Provider>
    )
    
}

export default ProjectsState
    