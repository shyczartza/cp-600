import { Test, TestingModule } from '@nestjs/testing';
import { LocalChatController } from './local-chat.controller';

describe('LocalChatController', () => {
  let controller: LocalChatController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LocalChatController],
    }).compile();

    controller = module.get<LocalChatController>(LocalChatController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
