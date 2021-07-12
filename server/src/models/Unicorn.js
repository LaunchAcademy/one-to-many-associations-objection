const Model = require("./Model")

class Unicorn extends Model {
  static get tableName() {
    return "unicorns"
  }

  // $beforeInsert(inputs){
  //   const forest = await EnchantedForest.query().findById(inputs.enchantedForestId)
  //   await forest.query().update({numberOfUnicorns: forest.numberOfUnicorns + 1})
  // }

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

  static get relationMappings() {
    const EnchantedForest = require("./EnchantedForest.js")

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
}

module.exports = Unicorn
