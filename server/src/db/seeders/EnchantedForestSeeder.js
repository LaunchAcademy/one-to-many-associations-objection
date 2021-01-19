import { EnchantedForest } from "../../models/index.js"

class EnchantedForestSeeder {
  static async seed() {
    const enchantedForestsData = [
      {
        title: "50th Birthday",
        location: "Italy",
        length: 9
      },
      {
        title: "Joe's Bachelor Party",
        location: "New Hampshire"
      }
    ]

    for (const singleEnchantedForestData of enchantedForestsData) {
      const currentEnchantedForest = await EnchantedForest.query().findOne({ title: singleEnchantedForestData.title })
      if (!currentEnchantedForest) {
        await EnchantedForest.query().insert(singleEnchantedForestData)
      }
    }
  }
}
export default EnchantedForestSeeder