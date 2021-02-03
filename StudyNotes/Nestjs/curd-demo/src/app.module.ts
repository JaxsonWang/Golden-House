import { Module } from '@nestjs/common'
import { APP_GUARD } from '@nestjs/core'
import { TypeOrmModule } from '@nestjs/typeorm'

import { AuthGuard } from './auth.guard'
import { CompaniesModule } from './companies/companies.module'
import { DevicesModule } from './devices/devices.module'
import { NotesModule } from './notes/notes.module'
import { withCache } from './orm.config'
import { ProjectsModule } from './projects/projects.module'
import { UsersModule } from './users/users.module'

@Module({
  imports: [
    TypeOrmModule.forRoot(withCache),
    CompaniesModule,
    ProjectsModule,
    UsersModule,
    DevicesModule,
    NotesModule
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuard
    }
  ]
})
export class AppModule {}
