	/* eslint-disable no-console */
  import { connection } from "../boot.js"

  import EnchantedForestSeeder from "./seeders/EnchantedForestSeeder.js"
  
  class Seeder {
    static async seed() {
      console.log("seeding enchanted forests")
      await EnchantedForestSeeder.seed()

      console.log("Done!")
      await connection.destroy()
    }
  }
  export default Seeder