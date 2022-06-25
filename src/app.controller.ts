//* app.controller.ts

import {   Body, Controller, Get, Post, Version, VERSION_NEUTRAL,
} from '@nestjs/common';
import { ApiBody, ApiOkResponse, ApiOperation,  ApiParam, ApiTags,
   ApiUnauthorizedResponse, } from '@nestjs/swagger';
import { AppService } from './app.service';
import { SigninDto } from './signin.dto';

@Controller({ path: 'hello' })
export class AppController {
  constructor(private readonly appService: AppService) {}

  @ApiTags('world Module')
  @Version('1')
  @Get('world')
  @ApiOperation({ summary: '[ApiOperation] - Say hello' })
  @ApiParam({
    name: 'lala',
    type: 'string',
    description: '[ApiParam] - lala testing',
    required: false,
   })
   @ApiParam({
     name: 'age',
     type: 'integer',
     description: '[ApiParam] - The users age in years only.',
     required: true,
    })
  @ApiOkResponse({
    description: '[ApiOkResponse] - This is the description of the 200',
    schema: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          id: {
            type: 'integer',
            description: 'This is the id description.',
            example: 100,
          },
          name: {
            type: 'string',
            description: 'A description of name property.',
            example: 'My Name',
          },
        },
      },
    },
  })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        id: {
          type: 'integer',
          example: 5,
          description: 'The identification value',
        },
        name: {
          type: 'string',
          example: 'Jake Example',
          description: 'The name of the thing',
        },
      },
    },
  })

  getHello(): string {
    return this.appService.getHello();
  }

  @Version('2')
  @Get('world')
  @ApiTags('The 2nd module')
  getHello2(): string {
    return 'Consider subscribing';
  }

  @Version(VERSION_NEUTRAL)
  @Get('like')
  @ApiTags('The 2nd module')
  getLike(): string {
    return 'Consider subscribing';
  }

  @Version('1')
  @Post('login')
  @ApiTags('The 1st module')
  @ApiTags('The 2nd module')
  @ApiOperation({ summary: '[ApiOperation] - Creating a new user' })
  @ApiOkResponse({ description: 'User login' })
  @ApiUnauthorizedResponse({ description: 'Invalid credentials.' })
  @ApiBody({ type: SigninDto })
  createUser(@Body() body: SigninDto) {
    return 'New user created';
  }
}
