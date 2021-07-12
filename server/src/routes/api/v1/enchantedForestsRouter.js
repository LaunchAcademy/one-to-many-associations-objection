import express from "express"
import { ValidationError } from "objection"

import EnchantedForest from "../../../models/EnchantedForest.js"

const enchantedForestsRouter = new express.Router()

import enchantedForestUnicornsRouter from "../enchantedForestUnicornsRouter.js"
enchantedForestsRouter.use("/:enchantedForestId/unicorns", enchantedForestUnicornsRouter)

enchantedForestsRouter.get("/", async (req, res) => {
  try {
    const enchantedForests = await EnchantedForest.query()
    return res.status(200).json({ enchantedForests: enchantedForests })
  } catch(error){
    return res.status(500).json({ errors: error })
  }
})

enchantedForestsRouter.get("/:id", async (req, res) => {
  const { id } = req.params
  try {
    const enchantedForest = await EnchantedForest.query().findById(id)
    enchantedForest.unicorns = await enchantedForest.$relatedQuery("unicorns")
    return res.status(200).json({ enchantedForest: enchantedForest })
  } catch(error){
    return res.status(500).json({ errors: error })
  }
})


export default enchantedForestsRouter