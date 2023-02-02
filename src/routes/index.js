const { Router } = require("express")

const usersRoutes = require("../routes/users.routes")
const moviesRoutes = require("../routes/movies.routes")
const tagsRoutes = require('../routes/tags.routes')

const routes = Router()
routes.use("/users", usersRoutes)
routes.use("/movies", moviesRoutes)
routes.use("/tags", tagsRoutes)


module.exports = routes