exports.seed = function(knex) {
  // Inserts seed entries
  return knex("resources").insert([
    { name: "Developer", description: "Front-end Dev" },
    { name: "Software License", description: "Access to AWS" },
    { name: "Conference Room", description: "Daily Standups" }
  ]);
};