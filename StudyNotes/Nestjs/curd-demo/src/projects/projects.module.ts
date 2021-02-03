import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { MyProjectsController } from './my-projects.controller'
import { Project } from './project.entity'
import { ProjectsController } from './projects.controller'
import { ProjectsService } from './projects.service'
import { UserProject } from './user-project.entity'
import { UserProjectsService } from './user-projects.service'

@Module({
  imports: [TypeOrmModule.forFeature([Project, UserProject])],
  providers: [ProjectsService, UserProjectsService],
  exports: [ProjectsService, UserProjectsService],
  controllers: [ProjectsController, MyProjectsController]
})
export class ProjectsModule {}
