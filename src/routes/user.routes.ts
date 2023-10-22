import { Router } from 'express'
import { registerController } from '~/controllers/user.controllers'
import { registerValidator } from '~/middlewares/users.middlewares'

const usersRouter = Router()

usersRouter.post('/login')

usersRouter.post('/register', registerValidator, registerController)

export default usersRouter
