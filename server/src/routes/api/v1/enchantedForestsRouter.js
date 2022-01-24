import express from "express"
import { ValidationError } from "objection"

const enchantedForestsRouter = new express.Router()

import EnchantedForest from "../../../models/EnchantedForest.js"
import enchantedForestUnicornsRouter from "./enchantedForestUnicornsRouter.js"

enchantedForestsRouter.get("/", async (req, res) => {
  try {
    const enchantedForests = await EnchantedForest.query()
    return res.status(200).json({ enchantedForests: enchantedForests })
  } catch(error){
    console.log()
    return res.status(500).json({ errors: error })
  }
})

enchantedForestsRouter.get("/:id", async (req, res) => {
  const enchantedForestId = req.params.id

  try {
    const enchantedForest = await EnchantedForest.query().findById(enchantedForestId)
    enchantedForest.unicorns = await enchantedForest.$relatedQuery("unicorns")

    return res.status(200).json({ enchantedForest: enchantedForest })
  } catch(error){
    console.log(error)
    return res.status(500).json({ errors: error })
  }
})

enchantedForestsRouter.use("/:enchantedForestId/unicorns", enchantedForestUnicornsRouter)





export default enchantedForestsRouter