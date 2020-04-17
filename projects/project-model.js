const db = require("../data/db-config.js");

module.exports = {
    getProjects,
    getResources,
    getTasks,
    addProjects,
    addResources,
    addTasks
};

function getProjects() {
    return db("projects");
}
function getResources() {
    return db("resources");
}
function getTasks(project_id) {
    return db("tasks")
        .select("tasks.description", "projects.name")
        .join("projects", "tasks.project_id", "=", "projects.id")
        .where({ project_id });
}
function addProjects(project) {
    return db("projects").insert(project);
}
function addResources(resource) {
    return db("resources").insert(resource);
}
function addTasks(task) {
    return db("tasks").insert(task);
}