import { Router } from 'express'
import { registerController } from '~/controllers/user.controllers'

const usersRouter = Router()

usersRouter.post('/login')

usersRouter.post('/register', registerController)

export default usersRouter
