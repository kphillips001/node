exports.up = function(knex) {
  return knex.schema
      .createTable("projects", tbl => {
          tbl.increments();
          tbl.string("name", 128).notNullable();
          tbl.string("description", 255);
          tbl.boolean("completed").notNullable();
      })
      .createTable("resources", tbl => {
          tbl.increments();
          tbl.integer("name").notNullable();
          tbl.string("description", 255);
      })
      .createTable("tasks", tbl => {
          tbl.increments();
          tbl.string("description", 255);
          tbl.string("notes", 255);
          tbl.boolean("completed").notNullable();
          tbl
              .integer("project_id")
              .unsigned()
              .notNullable()
              .references("id")
              .inTable("projects")
              .onUpdate("CASCADE")
              .onDelete("CASCADE");
      })
      .createTable("junction", tbl => {
          tbl.increments();
          tbl
              .integer("project_id")
              .notNullable()
              .unsigned()
              .references("id")
              .inTable("projects")
              .onUpdate("CASCADE")
              .onDelete("CASCADE");
          tbl
              .integer("resource_id")
              .notNullable()
              .unsigned()
              .references("id")
              .inTable("resources")
              .onUpdate("CASCADE")
              .onDelete("CASCADE");
      });
  };
  exports.down = function(knex) {
  return knex.schema
      .dropTableIfExists("junction")
      .dropTableIfExists("tasks")
      .dropTableIfExists("resources")
      .dropTableIfExists("projects");
  };