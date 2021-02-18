import { Module } from '@nestjs/common'
import { Connection } from 'typeorm'
import { TypeOrmModule } from '@nestjs/typeorm'

import { AppController } from './app.controller'
import { AppService } from './app.service'

import { UserModule } from './user/user.module'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '12345678',
      database: 'nest-demo1',
      entities: ['dist/**/*.entity.js'],
      synchronize: true
    }),
    UserModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {
  constructor(private connection: Connection) {}
}
