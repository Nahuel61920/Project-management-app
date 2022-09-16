import React, { useContext } from "react";
import projectContext from '../../context/projects/projectsContext';
import TaskContext from "../../context/tasks/taskContext";

function Task({ task }) {

    const projectsContext = useContext(projectContext);
    const { 
        actualProject
    } = projectsContext;


  const tasksContext = useContext(TaskContext);
  const { deleteTask, getTasks, changeStateTask, saveActualTask } = tasksContext;

  const [project] = actualProject;
  const onClickDelete = (id) => {
    deleteTask(id);
    getTasks(project.id);
  };

    const changeState = (task) => {
        if(task.state) {
            task.state = false;
        } else {
            task.state = true;
        }
        changeStateTask(task);
    }

    const selectTask = (task) => {
        saveActualTask(task);
    }

  return (
    <li className="tarea sombra">
      <p>{task.name}</p>
      <div className="estado">
        {task.state ? (
          <button type="button" className="completo" onClick={() => changeState(task)}>
            Completed
          </button>
        ) : (
          <button type="button" className="incompleto" onClick={() => changeState(task)}>
            Incomplete
          </button>
        )}
      </div>
      <div className="acciones">
        <button type="button" className="btn btn-primario" onClick={() => selectTask(task)}>
          Edit
        </button>
        <button type="button" className="btn btn-secundario" onClick={() => onClickDelete(task.id)}>
          Delete
        </button>
      </div>
    </li>
  );
}

export default Task;
