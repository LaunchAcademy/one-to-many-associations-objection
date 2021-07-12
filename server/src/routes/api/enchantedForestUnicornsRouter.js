import express from "express"
import objection from "objection"

const { ValidationError } = objection

import Unicorn from "../../models/Unicorn.js"
import cleanUserInput from "../../services/cleanUserInput.js"

const enchantedForestUnicornsRouter = new express.Router({ mergeParams: true })

enchantedForestUnicornsRouter.post("/", async (req, res) => {
  // originally had `use` here instead of `post` so it was not finding the endpoint!
  try {
    console.log(req.params);
    const { enchantedForestId } = req.params
    console.log(req.body)
    const { name, age, magicalAbility } = req.body
    const newUnicorn = await Unicorn.query().insertAndFetch({ name, age, magicalAbility, enchantedForestId })
    return res.status(201).json({ unicorn: newUnicorn})
  } catch(err) {
    return res.status(500).json({ errors: err })
  }
})

export default enchantedForestUnicornsRouter;