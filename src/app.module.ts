import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

import { TodoitemsModule } from './todoitems/todoitems.module';
import { OpenaiService } from './openai/openai.service';

const databaseUrl =
  process.env.DATABASE_URL || 'mongodb://localhost:27017/test';

@Module({
  imports: [
    MongooseModule.forRoot(databaseUrl),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
    TodoitemsModule,
  ],
  controllers: [],
  providers: [OpenaiService],
})
export class AppModule {}
