import { Injectable, Inject } from '@nestjs/common';
import { Player } from './player.entity';
import { IPlayer } from './player.interface';
import { Character } from '../character/character.entity';

@Injectable()
export class PlayerService {
  constructor(
    @Inject('PLAYER_REPOSITORY') private playerRepository: typeof Player,
    @Inject('CHARACTER_REPOSITORY')
    private characterRepository: typeof Character, // Injecter le repository des personnages
  ) {}

  async findAll(): Promise<Player[]> {
    return this.playerRepository.findAll<Player>();
  }

  async findById(id: number): Promise<Player> {
    return this.playerRepository.findByPk<Player>(id);
  }

  async create(playerData: IPlayer): Promise<Player> {
    return this.playerRepository.create<Player>(playerData as any);
  }

  async update(id: number, playerData: Partial<Player>): Promise<Player> {
    const player = await this.findById(id);
    if (!player) {
      throw new Error('Player not found');
    }
    return player.update(playerData);
  }

  async delete(id: number): Promise<void> {
    const player = await this.findById(id);
    if (!player) {
      throw new Error('Player not found');
    }
    await player.destroy();
  }

  // Méthode pour récupérer les personnages d'un joueur par ID
  async findPlayerCharacters(playerId: number): Promise<Character[]> {
    return this.characterRepository.findAll<Character>({
      where: { playerId },
    });
  }

  // Méthode pour créer un personnage pour un joueur
  async createCharacterForPlayer(
    playerId: number,
    characterData: Partial<Character>,
  ): Promise<Character> {
    const player = await this.findById(playerId);

    if (!player) {
      throw new Error('Player not found');
    }

    // On associe le playerId au personnage
    const character = await this.characterRepository.create({
      ...characterData,
      playerId: player.id,
    });

    return character;
  }
}
