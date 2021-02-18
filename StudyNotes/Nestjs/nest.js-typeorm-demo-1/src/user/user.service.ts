import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { CreateUserDto } from './dto/create-user.dto'
import { UserEntity } from './user.entity'

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>
  ) {}

  create(createUserDto: CreateUserDto): Promise<UserEntity> {
    const user = new UserEntity()
    user.username = createUserDto.username
    user.password = createUserDto.password
    user.email = createUserDto.email
    user.nickname = createUserDto.nickname

    return this.userRepository.save(user)
  }

  findAll(): Promise<UserEntity[]> {
    return this.userRepository.find()
  }

  findOne(id: string): Promise<UserEntity> {
    return this.userRepository.findOne(id)
  }

  async remove(id: string): Promise<void> {
    await this.userRepository.delete(id)
  }
}
