import { CrudValidationGroups } from '@nestjsx/crud'
import { IsOptional, IsString, IsUUID } from 'class-validator'
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

const { CREATE, UPDATE } = CrudValidationGroups

@Entity('devices')
export class Device {
  @IsOptional({ always: true })
  @IsUUID('4', { always: true })
  @PrimaryGeneratedColumn('uuid')
  deviceKey: string

  @IsOptional({ always: true })
  @IsString({ always: true })
  @Column({ type: 'text', nullable: true })
  description?: string
}
