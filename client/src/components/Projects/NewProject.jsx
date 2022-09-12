import React, {useState} from 'react'

function NewProject() {

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
    }

    return (
        <>
            <button type="button" className="btn btn-block btn-primario">New Project</button>

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
        </>
    )
}

export default NewProject