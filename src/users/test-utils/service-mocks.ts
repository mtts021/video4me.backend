import { CreateUserDTO } from '../dtos/create-user.dto'
import { UserReturn } from '../interfaces/user-return.interface'

export const userMock: CreateUserDTO = {
  name: 'name',
  email: 'example@mail.com',
  password: '123456',
}

export const userMockReturn: UserReturn = {
  uuid: 'mockedId',
  name: 'name',
  email: 'example@mail.com',
  createdAt: new Date(),
}
