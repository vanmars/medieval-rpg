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
  test('determine whether battle() method returns a win scenario', () => {
    const battleSystem = new BattleSystem(new Player("Warrior"), new Player("Mage"));
    battleSystem.determineTurn();
    let result = battleSystem.battle();
    console.log("Player 1 HP: ", battleSystem.player1.type.healthPoints);
    console.log("Player 2 HP: ", battleSystem.player2.type.healthPoints);
    expect(result).toEqual(expect.any(String));
  });
});