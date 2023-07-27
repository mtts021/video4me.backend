import { Controller, Get, Post, Patch, Param, Delete, Body } from '@nestjs/common'
import { CreateUserDTO } from './dtos/create-user.dto'
import { UserReturn } from './interfaces/user-return.interface'
import { User } from './schemas/user.schema'
import { UsersService } from './users.service'

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() user: CreateUserDTO): Promise<UserReturn> {
    return this.usersService.create(user)
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id)
  }

  @Patch(':id')
  update(@Param('uuid') uuid: string, @Body() user: User) {
    return this.usersService.update(uuid, user)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id)
  }
}
