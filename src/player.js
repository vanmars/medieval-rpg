// 3. Leveling Up
//   Create Player Class
//     Player Type: Warrior or Mage
//     Current Level
//     Number of Objects (keep it at two objects)
//     Methods for each level - adds points to an attribute

import Warrior from "./warrior.js";
import Mage from "./mage.js";

export default class Player {
  constructor(typeInput) {
    if (typeInput === "Warrior"){
      this.type = new Warrior;
    } else {
      this.type = new Mage;
    };
    this.playerLevel = 1;
  };
};