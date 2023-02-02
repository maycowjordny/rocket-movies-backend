const { Router } = require('express')
const UsersController = require('../constrollers/users.Controller')

const usersRoutes = Router()

function myMiddleware(request, response, next) {

    next()
}





const usersController = new UsersController()


usersRoutes.post("/", myMiddleware, usersController.create)
usersRoutes.put("/:id", usersController.update)
module.exports = usersRoutes