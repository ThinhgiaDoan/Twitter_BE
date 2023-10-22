import usersService from '~/services/users.services'
import { ParamsDictionary } from 'express-serve-static-core'
import { Request, Response } from 'express'
import { RegisterReqBody } from '~/models/requests/User.requests'

export const loginController = (req: Request, res: Response) => {
  const { email, password } = req.body
  if (email === 'giathinhkg1@gmail.com' && password === 'giathinh123!') {
    return res.status(200).json({
      message: 'Login successful'
    })
  }
  return res.status(400).json({
    error: 'Login failed'
  })
}

export const registerController = async (req: Request<ParamsDictionary, any, RegisterReqBody>, res: Response) => {
  try {
    const result = await usersService.register(req.body)
    return res.json({
      message: 'Register success',
      result
    })
  } catch (error) {
    return res.status(400).json({
      message: 'Register failed',
      error
    })
  }
}
