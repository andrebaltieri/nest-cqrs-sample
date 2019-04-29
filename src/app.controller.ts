import { Controller, Get, Post, Body } from '@nestjs/common';
import { RoomBookService } from './services/room-book.service';

@Controller('v1/rooms')
export class AppController {
  constructor(private readonly service: RoomBookService) { }

  @Post()
  async Book(@Body() body: any) {
    console.log('AppController:Book - Iniciando a requisição');
    await this.service.Book(body.customer, body.room);
  }

}
