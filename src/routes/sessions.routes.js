const { Router } = require("express")

const SessionsController = require("../constrollers/SessionsController")


const sessionsController = new SessionsController()

const sessionRoutes = Router()
sessionRoutes.post("/", sessionsController.create)

module.exports = sessionRoutes