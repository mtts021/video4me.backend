import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { v4 as uuidv4 } from 'uuid'
import { User } from './classes/user.class'
import { encodePassword } from './utils/bcrypt'

@Injectable()
export class UsersService {
  constructor(@InjectModel('Users') private readonly UserModel: Model<User>) {
    console.log('UsersService constructor')
  }

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
    return createdUser.save()
  }

  findOne(id: number) {
    return `This action returns a #${id} user`
  }

  // update(id: number, updateUserDto: UpdateUserDto) {
  //   return `This action updates a #${id} user`
  // }

  remove(id: number) {
    return `This action removes a #${id} user`
  }
}
