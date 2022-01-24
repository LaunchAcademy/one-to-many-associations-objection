import express from "express"
import { Unicorn } from "../models/index.js"
import enchantedForestsRouter from "./api/v1/enchantedForestsRouter.js"
import enchantedForestUnicornsRouter from "./api/v1/enchantedForestUnicornsRouter.js"
import clientRouter from "./clientRouter.js"

const rootRouter = new express.Router()

rootRouter.use("/api/v1/enchanted-forests", enchantedForestsRouter)





// rootRouter.use("/api/v1/unicorns", enchantedForestsRouter)


// unicornsRouter (doesnt exist)
// unicornsRouter.post("/", async (res, response) => {
//   req.params.id 
//   // enchantedForestId


//   await Unicorn.query().insert({ name: "Denny", age: 999, magicalAbility: "song", enchantedForestId: ....})
// })

rootRouter.use("/", clientRouter)

export default rootRouter
