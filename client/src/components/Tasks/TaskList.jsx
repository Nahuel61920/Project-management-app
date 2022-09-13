import React, {useContext} from 'react'
import projectContext from '../../context/projects/projectsContext';

import Task from './Task'

function TaskList() {

    const projectsContext = useContext(projectContext);
    const { 
        actualProject,
        deleteProject
    } = projectsContext;

    if(!actualProject) return <h2>Select a project</h2>

    const [project] = actualProject;

    const tasks = [
        {name: 'Choose Platform', state: true},
        {name: 'Choose Colors', state: false},
        {name: 'Choose Payment Platform', state: false},
        {name: 'Choose Hosting', state: true},
    ]

    // Eliminar un proyecto
    const onClickDelete = () => {
        deleteProject(project.id)
    }

    return (
        <>
            <h2>{project.name}</h2>

            <ul className="listado-tareas">
                {
                    tasks.length === 0 ? (
                        <li className="tarea">
                            <p>No Tasks</p>
                        </li>
                    ) : (
                        tasks.map(task => (
                            <Task
                                key={task.name}
                                task={task}
                            />
                        ))
                    )
                }
            </ul>

            <button
                type="button"
                className="btn btn-eliminar"
                onClick={onClickDelete}
            >Delete Project &times;</button>
            
        </>
    )
}

export default TaskList