// Warrior
      // strength:100
      // HP (health points): 100
      // defense: 80
      // intelligence: 20
      // Roll Method: for special power, return is how much damage cause

export default class Warrior {
  constructor(){
    this.strength = 100;
    this.healthPoints = 100;
    this.defense = 80;
    this.intelligence = 20;
  }
  roll() {
    return -2(Math.ceil(Math.random()*6))
  }

//   applyDamage(number) {
//     this.healthPoints -= number;
//   }
}
