import React, {useContext} from 'react';
import { CSSTransition, TransitionGroup } from "react-transition-group";
import projectContext from '../../context/projects/projectsContext';
import TaskContext from '../../context/tasks/taskContext';

import Task from './Task'

function TaskList() {

    const projectsContext = useContext(projectContext);
    const { 
        actualProject,
        deleteProject
    } = projectsContext;

    const tasksContext = useContext(TaskContext);
    const {
        taskProjects
    } = tasksContext;

    if(!actualProject) return <h2>Select a project</h2>

    const [project] = actualProject;


    // Eliminar un proyecto
    const onClickDelete = () => {
        deleteProject(project.id)
    }

    return (
        <>
            <h2>{project.name}</h2>

            <ul className="listado-tareas">
                {
                    taskProjects.length === 0 ? (
                        <li className="tarea">
                            <p>No task</p>
                        </li>
                    ) : <TransitionGroup>
                        {
                            (
                                taskProjects.map(task => (
                                    <CSSTransition
                                        key={task.id}
                                        timeout={200}
                                        classNames="tarea"
                                    >
                                        <Task
                                            task={task}
                                        />
                                    </CSSTransition>
                                ))
                            )
                        }
                        </TransitionGroup>
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