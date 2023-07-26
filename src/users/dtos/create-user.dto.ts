import {
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
  IsEmail,
} from 'class-validator'

export class CreateUserDTO {
  @IsNotEmpty()
  @IsString()
  @MaxLength(30)
  @MinLength(3)
    name: string

  @IsNotEmpty()
  @IsEmail()
    email: string

  @IsNotEmpty()
  @IsString()
  @MinLength(6)
    password: string
}
