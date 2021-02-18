import { IsNotEmpty } from 'class-validator'

export class CreateUserDto {
  @IsNotEmpty()
  readonly username: string

  @IsNotEmpty()
  readonly password: string

  @IsNotEmpty()
  readonly email: string

  @IsNotEmpty()
  readonly nickname: string
}
