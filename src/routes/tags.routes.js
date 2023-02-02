const { Router } = require('express')

const TagsController = require('../constrollers/TagsController')

const tagsRoutes = Router()

const tagsController = new TagsController()

tagsRoutes.get("/:user_id", tagsController.index)


module.exports = tagsRoutes