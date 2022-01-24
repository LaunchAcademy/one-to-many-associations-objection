import express from "express"
import objection from "objection"
const { ValidationError } = objection

import Unicorn from "../../../models/Unicorn.js"
import cleanUserInput from "../../../services/cleanUserInput.js"

const enchantedForestUnicornsRouter = new express.Router({ mergeParams: true })

enchantedForestUnicornsRouter.post("/", async (req, res) => {
  const { body } = req
  const formInput = cleanUserInput(body)
  const { name, age, magicalAbility } = formInput
  const enchantedForestId = req.params.enchantedForestId

  try {
    const unicorn = await Unicorn.query().insertAndFetch({ name, age, magicalAbility, enchantedForestId })
 
    return res.status(201).json({ unicorn })
  } catch (error) {
    if (error instanceof ValidationError) {
        return res.status(422).json({ errors: error.data })
      }
    return res.status(500).json({ errors: error })
  }
})

export default enchantedForestUnicornsRouter