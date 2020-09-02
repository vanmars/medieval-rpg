import BattleSystem from './../src/battleSystem.js'
import Player from '../src/player.js';

describe('battleSystem', () => {
  test('creating object that stores player1 and player2', () => {
    const battleSystem = new BattleSystem(new Player("Warrior"), new Player("Mage"));
    expect(battleSystem.player1).toEqual(new Player("Warrior"));
    expect(battleSystem.player2).toEqual(new Player("Mage"));
  });
});