const Model = require("./Model")

class Unicorn extends Model {
  static get tableName() {
    return "unicorns"
  }

  static get relationMappings() {
    const { EnchantedForest } = require("./index.js")

    return {
      enchantedForest: {
        relation: Model.BelongsToOneRelation,
        modelClass: EnchantedForest,
        join: {
          from: "unicorns.enchantedForestId",
          to: "enchantedForests.id"
        }
      }
    }
  }

  // unicornOne.$relatedQuery("enchantedForest")

  static get jsonSchema() {
    return {
      type: "object",
      required: ["name"],
      properties: {
        name: { type: "string", minLength: 2, maxLength: 20 },
        magicalAbility: { type: "string" },
        age: { type: ["string", "integer"]}
      }
    }
  }
}

module.exports = Unicorn
