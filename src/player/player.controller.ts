import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { PlayerService } from './player.service';
import { Player } from './player.entity';
import { IPlayer } from './player.interface';
import { Character } from '../character/character.entity'; // Corriger l'import si nécessaire

@Controller('player')
export class PlayerController {
  constructor(private readonly playerService: PlayerService) {}

  @Get()
  async findAll(): Promise<Player[]> {
    return this.playerService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: number): Promise<Player> {
    return this.playerService.findById(id);
  }

  @Post()
  async create(@Body('player') player: IPlayer): Promise<Player> {
    return await this.playerService.create(player);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() playerData: Partial<Player>,
  ): Promise<Player> {
    return this.playerService.update(id, playerData);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    return this.playerService.delete(id);
  }

  @Get(':id/characters')
  async findPlayerCharacters(@Param('id') id: number): Promise<Character[]> {
    return this.playerService.findPlayerCharacters(id);
  }

  // Nouvelle méthode pour créer un personnage pour un joueur
  @Post(':id/characters')
  async createCharacterForPlayer(
    @Param('id') id: number,
    @Body() characterData: Partial<Character>,
  ): Promise<Character> {
    return this.playerService.createCharacterForPlayer(id, characterData);
  }
}
