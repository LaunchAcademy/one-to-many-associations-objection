import { EnchantedForest } from "../../models/index.js"

class EnchantedForestSeeder {
  static async seed() {
    const enchantedForestsData = [
      {
        name: "100 Hundred Acre",
        enchantment: "Winnie the Pooh",
      },
      {
        name: "Sunshine Rainbows",
        enchantment: "Butterflies"
      }
    ]

    for (const singleEnchantedForestData of enchantedForestsData) {
      const currentEnchantedForest = await EnchantedForest.query().findOne({ name: singleEnchantedForestData.name })
      if (!currentEnchantedForest) {
        await EnchantedForest.query().insert(singleEnchantedForestData)
      }
    }
  }
}
export default EnchantedForestSeeder