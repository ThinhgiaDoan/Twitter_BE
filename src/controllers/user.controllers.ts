import usersService from '~/services/users.services'
import { Request, Response } from 'express'

export const registerController = async (req: Request, res: Response) => {
  const { email, password } = req.body

  try {
    const result = await usersService.register({ email, password })
    return res.json({
      message: 'Register success',
      result
    })
  } catch (error) {
    return res.status(400).json({
      error: 'Register failed'
    })
  }
}
