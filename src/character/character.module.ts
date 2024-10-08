import { Module } from '@nestjs/common';
import { characterProviders } from './character.providers';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [...characterProviders],
})
export class CharacterModule {}
