const Project = require('../models/Projects');
const { validationResult } = require('express-validator');

exports.createProject = async (req, res) => {
    // Revisar si hay errores
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    try {
        // create a new project
        const project = new Project(req.body);

        // save the owner via JWT
        project.owner = req.user.id;

        // save the project
        project.save();
        res.json(project);
    } catch (error) {
        console.log(error);
        res.status(500).send('There was an error');
    }
}

exports.getProjects = async (req, res) => {
    try {
        const projects = await Project.find({ owner: req.user.id }).sort({ created: -1 });
        res.json({ projects });
    } catch (error) {
        console.log(error);
        res.status(500).send('There was an error');
    }
}

exports.updateProject = async (req, res) => {
    // Revisar si hay errores
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    // extract project info
    const { name } = req.body;
    const newProject = {};

    if (name) {
        newProject.name = name;
    }

    try {
        // check the id
        let project = await Project.findById(req.params.id);

        // if the project exists or not
        if (!project) {
            return res.status(404).json({ msg: 'Project not found' });
        }

        // verify the project owner
        if (project.owner.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'Not authorized' });
        }

        // update
        project = await Project.findByIdAndUpdate({ _id: req.params.id }, { $set: newProject }, { new: true });

        res.json({ project });

    } catch (error) {
        console.log(error);
        res.status(500).send('There was an error');
    }
}

exports.deleteProject = async (req, res) => {
    try {
        // check the id
        let project = await Project.findById(req.params.id);

        // if the project exists or not
        if (!project) {
            return res.status(404).json({ msg: 'Project not found' });
        }

        // verify the project owner
        if (project.owner.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'Not authorized' });
        }

        // delete the project
        await Project.findOneAndRemove({ _id: req.params.id });
        res.json({ msg: 'Project deleted' });

    } catch (error) {
        console.log(error);
        res.status(500).send('There was an error');
    }
}