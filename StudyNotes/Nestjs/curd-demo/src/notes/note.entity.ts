import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('notes')
export class Note {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ name: 'revision_id', nullable: false })
  revisionId: number
}
