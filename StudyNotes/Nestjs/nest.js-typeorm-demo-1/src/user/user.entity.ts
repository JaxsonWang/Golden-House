import { Entity, Column, PrimaryColumn, BeforeInsert, CreateDateColumn, UpdateDateColumn } from 'typeorm'
import { v4 as uuidV4 } from 'uuid'

@Entity('app_user')
export class UserEntity {
  @PrimaryColumn({
    type: 'varchar',
    length: 36,
    nullable: false,
    comment: '用户编号'
  })
  id: string

  @BeforeInsert()
  updateId(): void {
    this.id = uuidV4()
  }

  @Column({
    type: 'varchar',
    length: 50,
    unique: true,
    comment: '用户名'
  })
  username: string

  @Column({
    type: 'varchar',
    length: 200,
    comment: '密码'
  })
  password: string

  @Column({
    type: 'varchar',
    length: 320,
    unique: true,
    comment: '邮箱'
  })
  email: string

  @Column({
    comment: '昵称'
  })
  nickname: string

  @Column({
    default: true,
    comment: '用户状态'
  })
  isActive: boolean

  @CreateDateColumn({
    type: 'timestamp',
    name: 'created_time',
    default: () => 'CURRENT_TIMESTAMP(6)',
    comment: '创建时间'
  })
  createdTime: Date

  @UpdateDateColumn({
    type: 'timestamp',
    name: 'updated_time',
    default: () => 'CURRENT_TIMESTAMP(6)',
    onUpdate: 'CURRENT_TIMESTAMP(6)',
    comment: '更新时间'
  })
  updatedTime: Date
}
