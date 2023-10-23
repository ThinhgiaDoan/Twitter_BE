import { Router } from 'express'
import { registerController } from '~/controllers/user.controllers'
import { registerValidator } from '~/middlewares/users.middlewares'
import { wrapRequestHandler } from '~/utils/handlers'

const usersRouter = Router()

usersRouter.post('/login')

usersRouter.post('/register', registerValidator, wrapRequestHandler(registerController))

export default usersRouter
