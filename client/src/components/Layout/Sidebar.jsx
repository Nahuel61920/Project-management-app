import React, {useState} from 'react'
import NewProject from '../Projects/NewProject'
import ProjectList from '../Projects/ProjectList'

function Sidebar() {
    return (
        <aside>
            <h1>Project Management</h1>

            <NewProject/>

            <div className="proyectos">
                <h2>Your Projects</h2>

                <ProjectList/>
            </div>
        </aside>
    )
}

export default Sidebar