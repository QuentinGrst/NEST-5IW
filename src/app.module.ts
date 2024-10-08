import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { PlayerModule } from './player/player.module';
import { CharacterModule } from './character/character.module';

@Module({
  imports: [DatabaseModule, PlayerModule, CharacterModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
