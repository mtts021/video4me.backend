import { Response, NextFunction } from 'express'
import { Injectable, NestMiddleware } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { User } from '../interfaces/user.interface'
import { UserRequest } from './userRequest.interface'

@Injectable()
export class CreateUserMiddleware implements NestMiddleware {
  constructor(@InjectModel('Users') private readonly UserModel: Model<User>) {}

  use(req: UserRequest, res: Response, next: NextFunction) {
    const { name, email, password } = req.body

    if (!name || !email || !password) {
      res.status(400).json({
        statusCode: 400,
        message: 'Missing parameters',
      })
      return
    }

    const emailValidation = /\S+@\S+\.\S+/
    if (!emailValidation.test(email)) {
      res.status(400).json({
        statusCode: 400,
        message: 'Invalid email',
      })
      return
    }

    const existValidation = this.UserModel.findOne({ email })
    if (existValidation) {
      res.status(400).json({
        statusCode: 400,
        message: 'Email already registered',
      })
      return
    }

    if (name.length < 3) {
      res.status(400).json({
        statusCode: 400,
        message: 'Name must be at least 3 characters',
      })
      return
    }

    if (password.length < 6) {
      res.status(400).json({
        statusCode: 400,
        message: 'Password must be at least 6 characters',
      })
      return
    }

    next()
  }
}
