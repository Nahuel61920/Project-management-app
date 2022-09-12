import React from 'react'
import Bar from '../Layout/Bar'
import Sidebar from '../Layout/Sidebar'
import FormTasks from '../Tasks/FormTasks'
import TaskList from '../Tasks/TaskList'

function Projects() {
    return (
        <div className="contenedor-app">
            <Sidebar />
            <div className="seccion-principal">
                <Bar />
                <main>
                    <FormTasks/>

                    <div className="contenedor-tareas">
                        <TaskList/>
                    </div>
                </main>
            </div>
        </div>

    )
}

export default Projects