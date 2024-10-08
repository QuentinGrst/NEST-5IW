import { Sequelize } from 'sequelize-typescript';
import { Player } from '../player/player.entity';
import { Character } from 'src/character/character.entity';

export const dbProvider = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: 'localhost',
        port: 3306,
        username: '5iw-nest',
        password: 'zNEG3Joiws',
        database: '5iw-nest',
      });
      sequelize.addModels([Player, Character]);
      Player.hasMany(Character);
      Character.belongsTo(Player);
      await sequelize.sync({ force: true });
      return sequelize;
    },
  },
];
