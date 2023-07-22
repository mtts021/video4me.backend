import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { v4 as uuidv4 } from 'uuid'
import { User } from './interfaces/user.interface'
import { UserReturn } from './interfaces/userReturn.interface'
import { encodePassword } from './utils/bcrypt'

@Injectable()
export class UsersService {
  constructor(@InjectModel('Users') private readonly UserModel: Model<User>) {}

  async create(user: User) {
    const encodedPassword = await encodePassword(user.password)
    const createdUser = new this.UserModel(
      {
        uuid: uuidv4(),
        createdAt: new Date(),
        updatedAt: new Date(),
        ...user,
        password: encodedPassword,
      },
    )
    createdUser.save()

    const returnUser: UserReturn = {
      uuid: createdUser.uuid,
      name: createdUser.name,
      email: createdUser.email,
      createdAt: createdUser.createdAt,
    }

    return returnUser
  }

  findOne(id: number) {
    return `This action returns a #${id} user`
  }

  update(id: number, user: User) {
    return `This action updates a #${user.id} user`
  }

  remove(id: number) {
    return `This action removes a #${id} user`
  }
}
