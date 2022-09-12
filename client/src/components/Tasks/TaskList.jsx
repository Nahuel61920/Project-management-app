import React from 'react'
import Task from './Task'

function TaskList() {

    const tasks = [
        {name: 'Choose Platform', state: true},
        {name: 'Choose Colors', state: false},
        {name: 'Choose Payment Platform', state: false},
        {name: 'Choose Hosting', state: true},
    ]

    return (
        <>
            <h2>Project 1</h2>

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
            >Delete Project &times;</button>
            
        </>
    )
}

export default TaskList