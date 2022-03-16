const Model = require("./Model")

class EnchantedForest extends Model {
  static get tableName() {
    return "enchantedForests"
  }

  static get relationMappings() {
    const Unicorn = require("./index.js")

    return {
      unicorns: {
        relation: Model.HasManyRelation,
        modelClass: Unicorn, 
        join: {
          from: "enchantedForests.id",
          to: "unicorns.enchantedForestId"
        }
      }
    }
  }

  // long form
  // const unicorns = await Unicorn.query().where({enchantedForestId: enchantedForestOne.id })

  // short form: what we want
  // const unicorns = await enchantedForestOne.$relatedQuery("unicorns")

  static get jsonSchema() {
    return {
      type: "object",
      required: ["name"],
      properties: {
        name: { type: "string", minLength: 2, maxLength: 20 },
        enchantment: { type: "string" },
        numberOfUnicorns: { type: ["string", "integer"]}
      }
    }
  }
}

module.exports = EnchantedForest
