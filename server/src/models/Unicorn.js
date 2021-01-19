const Model = require("./Model")

class Unicorn extends Model {
  static get tableName() {
    return "unicorns"
  }

  // $beforeInsert(inputs){
  //   const forest = await EnchantedForest.query().findById(inputs.enchantedForestId)
  //   await forest.query().update({numberOfUnicorns: forest.numberOfUnicorns + 1})
  // }

  static get relationMappings() {
    const Unicorn = require("./Unicorn")

    return {
      enchantedForests: {
        relation: Model.HasManyRelation,
        modelClass: Unicorn,
        join: {
          from: "unicorns.enchantedForestId",
          to: "enchantedForests.id"
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
        magicalAbility: { type: "string" },
        age: { type: ["string", "integer"]}
      }
    }
  }
}

module.exports = Unicorn
