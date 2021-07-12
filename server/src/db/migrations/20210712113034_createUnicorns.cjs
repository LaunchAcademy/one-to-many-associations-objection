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
    table.integer("age")
    table.string("magicalAbility")
    table.bigInteger("enchantedForestId").notNullable().unsigned().index().references("enchantedForests.id")
    // forgot to include `references()` which protects associated data when deleting records!
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
