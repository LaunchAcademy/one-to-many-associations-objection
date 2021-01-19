const Model = require("./Model")

class EnchantedForest extends Model {
  static get tableName() {
    return "enchantedForests"
  }

  static get relationMappings() {
    const Unicorn = require("./Unicorn")

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
