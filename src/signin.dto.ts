import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNumber } from 'class-validator';

export class SigninDto {
  @IsEmail()
  @ApiProperty({
    type: 'string',
    example: 'dto@place.com',
    description: '[SigninDto] The email address of user logging in.',
  })
  email: string;

  @IsNumber()
  @ApiProperty({
    type: 'integer',
    example: '456',
    description: '[SigninDto] The digits of the pincode.',
  })
  pinCode: number;
}
