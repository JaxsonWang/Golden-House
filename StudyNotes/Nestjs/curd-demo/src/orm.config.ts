import { TypeOrmModuleOptions } from '@nestjs/typeorm'
import { isNil } from '@nestjsx/util'
import { join } from 'path'

export const withCache: TypeOrmModuleOptions = {
  type: 'mysql',
  host: '127.0.0.1',
  port: 3306,
  username: 'root',
  password: '12345678',
  database: 'nestjsx_crud',
  synchronize: false,
  logging: !isNil(process.env.TYPEORM_LOGGING)
    ? !!parseInt(process.env.TYPEORM_LOGGING, 10)
    : true,
  cache: {
    type: 'redis',
    options: {
      host: '127.0.0.1',
      port: 6379
    }
  },
  entities: [join(__dirname, './**/*.entity{.ts,.js}')]
}
