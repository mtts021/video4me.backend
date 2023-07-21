import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { v4 as uuidv4 } from 'uuid'
import { User } from './classes/user.class'

@Injectable()
export class UsersService {
  constructor(@InjectModel('Users') private readonly UserModel: Model<User>) {
    console.log('UsersService constructor')
  }

  create(user: User) {
    const createdUser = new this.UserModel({
      uuid: uuidv4(),
      createdAt: new Date(),
      updatedAt: new Date(),
      ...user,
    })
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
