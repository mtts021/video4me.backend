import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { v4 as uuidv4 } from 'uuid'
import { CreateUserDTO } from './dtos/create-user.dto'
import { UserReturn } from './interfaces/user-return.interface'
import { User } from './schemas/user.schema'
import { encodePassword } from './utils/bcrypt'

@Injectable()
export class UsersService {
  constructor(@InjectModel('Users') private readonly UserModel: Model<User>) {}

  async create(user: CreateUserDTO): Promise<UserReturn> {
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

  update(uuid: string, user: User) {
    return `This action updates a #${user.uuid} user`
  }

  remove(id: number) {
    return `This action removes a #${id} user`
  }
}
