import React, {useContext} from 'react'
import projectContext from '../../context/projects/projectsContext';

function FormTasks() {

    // Si un proyecto esta activo
    const projectsContext = useContext(projectContext);
    const { 
        actualProject
    } = projectsContext;

    if(!actualProject) return null;

    const [project] = actualProject;

    return (
        <div className="formulario">
            <form>
                <div className="contenedor-input">
                    <input
                        type="text"
                        className="input-text"
                        placeholder="Task Name"
                        name="name"
                    />
                </div>

                <div className="contenedor-input">
                    <input
                        type="submit"
                        className="btn btn-primario btn-submit btn-block"
                        value="Add Task"
                    />
                </div>
            </form>
        </div>
    )
}

export default FormTasks