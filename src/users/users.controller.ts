import { Controller, Get, Post, Patch, Param, Delete, Body } from '@nestjs/common'
import { User } from './interfaces/user.interface'
import { UserReturn } from './interfaces/userReturn.interface'
import { UsersService } from './users.service'

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() user: User): Promise<UserReturn> {
    return this.usersService.create(user)
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() user: User) {
    return this.usersService.update(+id, user)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id)
  }
}
