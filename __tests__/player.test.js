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
  test('levelUp method should update player properties', () =>{
    const player = new Player("Warrior");
    player.levelUp();
    expect(player.playerLevel).toEqual(2);
    expect(player.type.healthPoints).toEqual(110);
    expect(player.type.strength).toEqual(110);
    expect(player.type.defense).toEqual(90);
    expect(player.type.intelligence).toEqual(20);
  });
});



// levelUp () {
//   this.playerLevel += 1;
//   this.type.heathPoints += 10;
//   this.type.defense += 10;
//   if(typeInput === "Warrior") {
//     this.type.strength =+ 10;
//   } else if(typeInput === "Mage") {
//     this.type.intelligence =+ 10;
//   }
// };