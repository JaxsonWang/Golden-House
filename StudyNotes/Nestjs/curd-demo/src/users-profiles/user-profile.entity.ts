import { IsOptional, IsString, MaxLength } from 'class-validator'
import { Column, DeleteDateColumn, Entity, OneToOne } from 'typeorm'

import { BaseEntity } from '../base-entity'
import { User } from '../users/user.entity'

@Entity('user_profiles')
export class UserProfile extends BaseEntity {
  @IsOptional({ always: true })
  @IsString({ always: true })
  @MaxLength(32, { always: true })
  @Column({ type: 'varchar', length: 32, nullable: true, default: null })
  name: string

  @DeleteDateColumn({ nullable: true })
  deletedAt?: Date

  /**
   * Relations
   */

  @OneToOne((type) => User, (u) => u.profile)
  user?: User
}
