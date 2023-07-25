import { Response, Request, NextFunction } from 'express'
import { Injectable, NestMiddleware } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { User } from '../schemas/user.schema'

@Injectable()
export class CreateUserMiddleware implements NestMiddleware {
  constructor(@InjectModel('Users') private readonly UserModel: Model<User>) {}

  async use(req: Request, res: Response, next: NextFunction) {
    const { email } = req.body

    const existValidation = this.UserModel.findOne({ email })
    if (await existValidation) {
      res.status(400).json({
        statusCode: 400,
        message: 'Email already exists',
      })
      return
    }

    next()
  }
}
