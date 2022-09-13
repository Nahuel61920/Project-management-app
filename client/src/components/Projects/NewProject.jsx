import React, {useState, useContext} from 'react'
import projectContext from '../../context/projects/projectsContext';

function NewProject() {

    const projectsContext = useContext(projectContext);
    const { 
        newProject,
        errorForm,
        
        showNewProject, 
        addProject,
        showError
    } = projectsContext;

    const [project, setProject] = useState({
        name: ''
    });

    const {name} = project;

    // leer los valores del formulario
    const onChangeProject = (e) => {
        setProject({
            ...project,
            [e.target.name]: e.target.value
        })
    }

    const onSubmitProject = (e) => {
        e.preventDefault();

        // validar el proyecto
        if(name === '') {
            showError();
            return;
        }

        // agregar al state
        addProject(project);

        // reiniciar el form
        setProject({
            name: ''
        })
    }

    return (
        <>
            <button type="button" className="btn btn-block btn-primario" onClick={() => showNewProject()}>New Project</button>

            {
                newProject ? (
                    <form className="formulario-nuevo-proyecto">
                        <input
                            type="text"
                            className="input-text"
                            placeholder="Project Name"
                            name="name"
                            value={name}
                            onChange={onChangeProject}
                        />

                        <input
                            type="submit"
                            className="btn btn-primario btn-block"
                            value="Add Project"
                            onClick={onSubmitProject}
                        />
                    </form>
                ) : null
            }
            {
                errorForm ? <p className="mensaje error">The project name is required</p> : null
            }
        </>
    )
}

export default NewProject