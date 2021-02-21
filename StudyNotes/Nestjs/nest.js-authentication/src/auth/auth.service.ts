import { Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'

import { UserService } from '../user/user.service'
import { LoginUserDto } from '../user/dto'

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService, private readonly jwtService: JwtService) {}

  async validateUser({ username, password }: LoginUserDto) {
    const user = await this.userService.findOne(username)
    if (user && user.password === password) {
      const payload = this.jwtService.sign({ username: user.username, sub: user.id })
      const result = { ...user, ...{ token: payload } }
      return {
        status: 200,
        msg: '返回用户信息',
        data: result
      }
    }
    return {
      status: 200,
      msg: '没有查询到该用户'
    }
  }
}
