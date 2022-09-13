import React, {useContext} from 'react'
import projectContext from '../../context/projects/projectsContext';

function Project({project}) {

    const projectsContext = useContext(projectContext);
    const { 
        projectActual
    } = projectsContext;

    return (
        <li>
            <button
                type="button"
                className="btn btn-blank"
                onClick={() => projectActual(project.id)}
            >{project.name}</button>
        </li>
    )
}

export default Project