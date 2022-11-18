import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEmail, Length } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'user@mail.com', description: 'email' })
  @IsString({ message: 'Must be string' })
  @IsEmail({}, { message: 'Wrong Email' })
  readonly email: string;
  @ApiProperty({ example: '123456', description: 'password' })
  @IsString({ message: 'Must be string' })
  @Length(4, 16, { message: 'Password should cantain 4-16 chars' })
  readonly password: string;
}
