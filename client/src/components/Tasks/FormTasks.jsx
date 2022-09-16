import React, {useContext, useState, useEffect} from 'react'
import projectContext from '../../context/projects/projectsContext';
import TaskContext from '../../context/tasks/taskContext';

function FormTasks() {

    // Si un proyecto esta activo
    const projectsContext = useContext(projectContext);
    const { 
        actualProject
    } = projectsContext;

    const tasksContext = useContext(TaskContext);
    const {
        errorTask,
        selectedTask,

        addTask,
        validateTask,
        getTasks,
        updateTask
    } = tasksContext;

    // Effect que detecta si hay una tarea seleccionada
    useEffect(() => {
        if(selectedTask !== null) {
            setTask(selectedTask)
        } else {
            setTask({
                name: ''
            })
        }
    }, [selectedTask])

    // State del formulario
    const [task, setTask] = useState({
        name: ''
    });

    // Extraer el nombre del proyecto
    const {name} = task;

    if(!actualProject) return null;

    const [project] = actualProject;

    // Leer los valores del formulario
    const handleChange = (e) => {
        setTask({
            ...task,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault();

        // Validar
        if(name.trim() === '') {
            validateTask();
            return;
        }

        // Si es edicion o nueva tarea
        if(selectedTask === null) {
            // Agregar la nueva tarea al state de tareas
            task.projectId = project.id;
            task.state = false;
            addTask(task);
        } else {
            // Actualizar tarea existente
            updateTask(task);
        }

        

        // Obtener y filtrar las tareas del proyecto actual
        getTasks(project.id);

        // Reiniciar el form
        setTask({
            name: ''
        })

    }

    return (
        <div className="formulario">
            <form>
                <div className="contenedor-input">
                    <input
                        type="text"
                        className="input-text"
                        placeholder="Task Name"
                        name="name"
                        value={name}
                        onChange={handleChange}
                    />
                </div>

                <div className="contenedor-input">
                    <input
                        type="submit"
                        className="btn btn-primario btn-submit btn-block"
                        value={selectedTask ? 'Edit Task' : 'Add Task'}
                        onClick={onSubmit}
                    />
                </div>
            </form>

            {errorTask ? <p className="mensaje error">The task name is required</p> : null}
        </div>
    )
}

export default FormTasks