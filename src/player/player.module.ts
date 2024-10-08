import { Module } from '@nestjs/common';
import { PlayerService } from './player.service';
import { PlayerController } from './player.controller';
import { DatabaseModule } from '../database/database.module';
import { playerProviders } from './player.providers';
import { characterProviders } from '../character/character.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [PlayerController],
  providers: [PlayerService, ...playerProviders, ...characterProviders],
})
export class PlayerModule {}
