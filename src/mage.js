// Mage
      // strength:10
      // HP (health points): 100
      // defense: 50
      // intelligence: 100
      // Roll Method: for special power, return is how much damage caused

      export default class Mage {
        constructor(){
          this.strength = 10;
          this.healthPoints = 100;
          this.defense = 50;
          this.intelligence = 100;
        }
        roll() {
          return -1*(Math.ceil(Math.random()*6))
        }
      
        applyDamage(number) {
          this.healthPoints += number;
        }
      }