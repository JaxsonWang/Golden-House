import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { Note } from './note.entity'
import { NotesController } from './notes.controller'
import { NotesService } from './notes.service'

@Module({
  imports: [TypeOrmModule.forFeature([Note])],
  providers: [NotesService],
  exports: [NotesService],
  controllers: [NotesController]
})
export class NotesModule {}
