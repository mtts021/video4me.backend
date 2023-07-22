import { Request } from 'express'
import { User } from '../interfaces/user.interface'

export interface UserRequest extends Request {
  body: User
}
