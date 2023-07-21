import { Controller, Get, Post, Patch, Param, Delete, Body } from '@nestjs/common'
import { User } from './classes/user.class'
import { UsersService } from './users.service'

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {
    console.log('UsersController constructor')
  }

  @Post()
  create(@Body() user: User): Promise<User> {
    return this.usersService.create(user)
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id)
  }

  @Patch(':id')
  // update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
  //   return this.usersService.update(+id, updateUserDto)
  // }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id)
  }
}
