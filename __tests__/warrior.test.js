import Warrior from './../src/warrior.js';

describe('warrior', () => {
  test('returns attributes of warrior object', () => {
    const warrior = new Warrior();
    expect(warrior.strength).toEqual(100);
    expect(warrior.healthPoints).toEqual(100);
    expect(warrior.defense).toEqual(80);
    expect(warrior.intelligence).toEqual(20);
  });
});

// class Warrior {
//   constructor(){
//     this.strength = 100;
//     this.healthPoints = 100;
//     this.defense = 80;
//     this.intelligence = 20;
//   }
//   roll() {
//     return -2(Math.ceil(Math.random()*6))
//   }

//   applyDamage(number) {
//     this.healthPoints -= number;
//   }
// }