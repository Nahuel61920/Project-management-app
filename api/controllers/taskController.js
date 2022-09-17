const Task = require('../models/Task');
const Project = require('../models/Project');
const { validationResult } = require('express-validator');

exports.createTask = async (req, res) => {
    // Revisar si hay errores
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    try {
        // extract the project and check if it exists
        const { project } = req.body;

        const projectExists = await Project.findById(project);
        if (!projectExists) {
            return res.status(404).json({ msg: 'Project not found' });
        }

        // check if the project belongs to the authenticated user
        if (projectExists.owner.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'Not authorized' });
        }

        // create the task
        const task = new Task(req.body);
        await task.save();
        res.json({ task });

    } catch (error) {
        console.log(error);
        res.status(500).send('There was an error');
    }
}

exports.getTasks = async (req, res) => {
    try {
        // extract the project and check if it exists
        const { project } = req.body;

        const exitsProject = await Project.findById(project);
        if (!exitsProject) {
            return res.status(404).json({ msg: 'Project not found' });
        }

        // check if the project belongs to the authenticated user
        if (exitsProject.owner.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'Not authorized' });
        }

        // get tasks by project
        const tasks = await Task.find({ project }).sort({ created: -1 });
        res.json({ tasks });

    } catch (error) {
        console.log(error);
        res.status(500).send('There was an error');
    }
}

exports.updateTask = async (req, res) => {
    try {
        // extract the project and check if it exists
        const { project, name, state } = req.body;

        // check if the task exists or not
        let task = await Task.findById(req.params.id);
        if (!task) {
            return res.status(404).json({ msg: 'Task not found' });
        }

        // extract project
        const exitsProject = await Project.findById(project);

        // check if the project belongs to the authenticated user
        if (exitsProject.owner.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'Not authorized' });
        }

        // create an object with the new info
        const newTask = {};
        newTask.name = name;
        newTask.state = state;

        // save the task
        task = await Task.findOneAndUpdate({ _id: req.params.id }, newTask, { new: true });

        res.json({ task });

    } catch (error) {
        console.log(error);
        res.status(500).send('There was an error');
    }
}

exports.deleteTask = async (req, res) => {
    try {
        // extract the project and check if it exists
        const { project } = req.body;

        // check if the task exists or not
        let task = await Task.findById(req.params.id);
        if (!task) {
            return res.status(404).json({ msg: 'Task not found' });
        }

        // extract project
        const exitsProject = await Project.findById(project);

        // check if the project belongs to the authenticated user
        if (exitsProject.owner.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'Not authorized' });
        }

        // delete
        await Task.findOneAndRemove({ _id: req.params.id });
        res.json({ msg: 'Task deleted' });

    } catch (error) {
        console.log(error);
        res.status(500).send('There was an error');
    }
}

