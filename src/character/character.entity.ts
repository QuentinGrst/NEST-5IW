import {
  Table,
  Column,
  Model,
  ForeignKey,
  PrimaryKey,
  AutoIncrement,
} from 'sequelize-typescript';
import { Player } from '../player/player.entity';

@Table
export class Character extends Model<Character> {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number; // Clé primaire auto-incrémentée

  @Column
  name: string;

  @Column
  health: number = 100;

  @Column
  strength: number = 50;

  @ForeignKey(() => Player)
  @Column
  playerId: number; // Clé étrangère associée au joueur
}
