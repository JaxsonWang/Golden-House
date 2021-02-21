import { Controller, Post, Body, UseGuards, Get } from '@nestjs/common'

import { LoginUserDto } from '../user/dto'
import { AuthService } from '../auth/auth.service'
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard'
import { LocalAuthGuard } from '../auth/guards/local-auth.guard'

@Controller('login')
export class LoginController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('')
  async login(@Body() loginUserDto: LoginUserDto) {
    return this.authService.validateUser(loginUserDto)
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile() {
    return {
      message: 'hello world'
    }
  }
}
