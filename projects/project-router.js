const express = require("express");

const db = require("../data/db-config.js");

const Projects = require("./project-model.js");

const router = express.Router();

router.get("/", (req, res) => {
    Projects.getProjects()
        .then(projects => {
            res.json(projects);
        })
    .catch(err => {
        res.status(500).json({ message: "Failed to get projects" });
    });
});
router.get("/resources", (req, res) => {
    Projects.getResources()
        .then(resources => {
            res.json(resources);
        })
    .catch(err => {
        res.status(500).json({ message: "Failed to get resources" });
    });
});
router.get("/:id/tasks", (req, res) => {
    const { id } = req.params;
    Projects.getTasks(id)
        .then(tasks => {
            res.status(200).json(tasks);
        })
    .catch(err => {
        res.status(500).json({ message: "Failed to get tasks" });
    });
});
router.post("/", (req, res) => {
    Projects.addProjects(req.body)
        .then(project => {
            res.status(201).json(project);
        })
    .catch(err => {
        res.status(500).json({ message: "Failed to add project" });
    });
});
router.post("/resources", (req, res) => {
    Projects.addResources(req.body)
        .then(resource => {
        res.status(201).json(resource);
        })
    .catch(err => {
        res.status(500).json({ message: "Failed to add a resource" });
    });
});
router.post("/tasks", (req, res) => {
    const task = req.body;
    Projects.addTasks(task)
        .then(task => {
            res.status(201).json(task);
    })
    .catch(err => {
        res
            .status(500)
            .json({ message: "Failed to add a task to your specified project" });
    });
});
module.exports = router;