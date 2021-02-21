import { Module } from '@nestjs/common'

import { LoginController } from './login.controller'
import { AuthModule } from '../auth/auth.module'

@Module({
  imports: [AuthModule],
  controllers: [LoginController]
})
export class LoginModule {}
