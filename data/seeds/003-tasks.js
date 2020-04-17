exports.seed = function(knex) {
  // Inserts seed entries
  return knex("tasks").insert([
    {
      description: "Build homepage",
      notes: "Needs to be responsive and accessable to all",
      completed: false,
      project_id: 1
    },
    {
      description: "Build blog",
      notes: "Needs featured section and filter options",
      completed: false,
      project_id: 1
    },
    {
      description: "Build backend",
      notes: "4 tables (users, blog posts, comments, and junction table",
      completed: false,
      project_id: 2
    },
    {
      description: "Build front end",
      notes: "UI, UX, jwt, forms, etc.",
      completed: false,
      project_id: 2
    }
  ]);
};