import BattleSystem from './../src/battleSystem.js'
import Player from '../src/player.js';

describe('battleSystem', () => {
  test('creating object that stores player1 and player2', () => {
    const battleSystem = new BattleSystem(new Player("Warrior"), new Player("Mage"));
    expect(battleSystem.player1).toEqual(new Player("Warrior"));
    expect(battleSystem.player2).toEqual(new Player("Mage"));
  });
  test('determine whether player1 or player2 turn', () => {
    const battleSystem = new BattleSystem(new Player("Warrior"), new Player("Mage"));
    battleSystem.determineTurn();
    expect(battleSystem.currentTurn).toBeLessThanOrEqual(2);
    expect(battleSystem.currentTurn).toBeGreaterThanOrEqual(1);
  });
});