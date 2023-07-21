import { Document } from 'mongoose'

export class User extends Document {
  uuid: string

  name: string

  email: string

  password: string

  createdAt: Date

  updatedAt: Date
}
