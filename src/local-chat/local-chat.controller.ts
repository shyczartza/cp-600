import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('local-chat')
export class LocalChatController {

  @Get()
  create(@Body() createTodoitemDto: String) {
    return 'hello';
  }
}
