import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import ProjectsState from './context/projects/projectsState';
import TaskState from './context/tasks/taskState';
import AlertState from './context/alerts/alertState';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ProjectsState>
      <TaskState>
        <AlertState>
          <App />
        </AlertState>
      </TaskState>
    </ProjectsState>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
