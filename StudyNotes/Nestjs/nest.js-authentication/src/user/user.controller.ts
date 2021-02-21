import { Controller, Get, Post, Delete, Param, Body, UseInterceptors, ClassSerializerInterceptor } from '@nestjs/common'

import { CreateUserDto } from './dto'
import { UserEntity } from './user.entity'
import { UserService } from './user.service'

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto): Promise<UserEntity> {
    return this.userService.create(createUserDto)
  }

  @Get()
  findAll(): Promise<UserEntity[]> {
    return this.userService.findAll()
  }

  @Get(':id')
  @UseInterceptors(ClassSerializerInterceptor)
  findOne(@Param('id') id: string): Promise<UserEntity> {
    return this.userService.findOne(id)
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.userService.remove(id)
  }
}
