import React from 'react'
import Project from './Project'

function ProjectList() {

    const projects = [
        {id: 1, name: 'Project 1'},
        {id: 2, name: 'Project 2'},
        {id: 3, name: 'Project 3'},
    ]
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