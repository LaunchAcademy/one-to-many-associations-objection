import express from "express"
import enchantedForestsRouter from "./api/v1/enchantedForestsRouter.js"
import clientRouter from "./clientRouter.js"

const rootRouter = new express.Router()

rootRouter.use("/api/v1/enchanted-forests", enchantedForestsRouter)

rootRouter.use("/", clientRouter)

export default rootRouter
