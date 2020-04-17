exports.seed = function(knex) {
  // Inserts seed entries
  return knex("projects").insert([
    {
      name: "Test Project 1",
      description: "Build a test project",
      completed: false
    },
    {
      name: "Test Project 2",
      description: "Build a another project",
      completed: false
    }
  ]);
};