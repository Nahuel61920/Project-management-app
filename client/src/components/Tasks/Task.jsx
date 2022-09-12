import React from 'react'

function Task({task}) {
    return (    
        <li className="tarea sombra">
            <p>{task.name}</p>
            <div className="estado">
                {task.state ? (
                    <button
                        type="button"
                        className="completo"
                    >Completed</button>
                ) : (
                    <button
                        type="button"
                        className="incompleto"
                    >Incomplete</button>
                )}
            </div>
            <div className="acciones">
                <button
                    type="button"
                    className="btn btn-primario"
                >Edit</button>
                <button
                    type="button"
                    className="btn btn-secundario"
                >Delete</button>
            </div>
        </li>
        
    )
}

export default Task