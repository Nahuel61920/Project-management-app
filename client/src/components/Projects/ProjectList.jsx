import React, {useEffect, useContext} from 'react'
import projectContext from '../../context/projects/projectsContext';
import Project from './Project'

function ProjectList() {

    const projectsContext = useContext(projectContext);
    const { projects, allProjects } = projectsContext;

    useEffect(() => {
        allProjects();
    }, [])

    if(projects.length === 0) return <p>There are no projects, start by creating one</p>

    return (
        <ul className="listado-proyectos">
            {
                projects.map(project => (
                    <Project
                        key={project.id}
                        project={project}
                    />
                ))
            }
        </ul>
    )
}

export default ProjectList