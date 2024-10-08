import { Player } from './player.entity';

export const playerProviders = [
  {
    provide: 'PLAYER_REPOSITORY',
    useValue: Player,
  },
];
