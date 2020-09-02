import Mage from './../src/mage.js'
import Warrior from './../src/warrior.js'
import Player from './../src/player.js'

describe('Player', () => {
  test('should create a mage player object', () => {
    const player = new Player("Warrior");
    expect(player.type).toEqual(new Warrior);
    const player1 = new Player("Mage");
    expect(player1.type).toEqual(new Mage);
  });
});



// export default class Player {
//   constructor() {
//     this.type = new Mage;
//     this.playerLevel = 1
//   };
// }