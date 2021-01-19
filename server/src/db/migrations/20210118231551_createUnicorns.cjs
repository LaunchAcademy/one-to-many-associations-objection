/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
  return knex.schema.createTable("unicorns", (table) => {
    table.bigIncrements("id").primary()
    table.string("name").notNullable()
    table.string("magicalAbility")
    table.integer("age").notNullable()
    table.bigInteger("enchantedForestId").unsigned().index().references("enchantedForests.id").notNullable()
    table.timestamp("createdAt").notNullable().defaultTo(knex.fn.now())
    table.timestamp("updatedAt").notNullable().defaultTo(knex.fn.now())
  })
};

/**
 * @param {Knex} knex
 */
exports.down = async (knex) => {
  return knex.schema.dropTableIfExists("unicorns")
};
