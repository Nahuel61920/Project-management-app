import React, {useContext} from 'react'
import projectContext from '../../context/projects/projectsContext';
import TaskContext from '../../context/tasks/taskContext';

function Project({project}) {

    const projectsContext = useContext(projectContext);
    const { 
        projectActual
    } = projectsContext;

    const tasksContext = useContext(TaskContext);
    const {
        getTasks
    } = tasksContext;

    const selectProject = id => {
        projectActual(id);
        getTasks(id);
    }

    return (
        <li>
            <button
                type="button"
                className="btn btn-blank"
                onClick={() => selectProject(project.id)}
            >{project.name}</button>
        </li>
    )
}

export default Project