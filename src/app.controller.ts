import { Controller, Get, Post,Param } from '@nestjs/common';
import { AppService } from './app.service'; 
import { Response } from 'express';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/edinburghWeather')
    async getEdinburghWeather(){
      return {
        error: false,
        data: await this.appService.getEdinburghWeather()
      }
      
    }

  @Get(':id')
  getMessage(@Param('id') id) {
    return {
      message: `I would return the message with an id of ${id}`,
    };
  }

  @Post()
  postInfo(): string {
    return (this.appService.postInfo());
  }
}
