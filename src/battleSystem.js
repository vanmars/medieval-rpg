// Battle System Function (parameters: two players)
//     Determine who goes first
//     Win Scenario While Loop (check player's HP, if one player is at zero, function stops, and a winner is declared)
//       Cause the first player to roll (invoke their roll method)
//       Take the damage calculation and apply to the other player
//       Switch turns: invoke the second player's roll method
//       Take the damage calculation and apply to the other player

import Player from "./player.js"

export default class BattleSystem {
    constructor(player1, player2){
        this.player1 = player1;
        this.player2 = player2;
        this.currentTurn;
    };
    determineTurn(){
        this.currentTurn = Math.ceil(Math.random()*2);
    };
    takeTurn(){
      if (this.currentTurn === 1){
        let roll = this.player1.type.roll();
        this.player2.type.applyDamage(roll);
        this.currentTurn = 2;
      } else {
        let roll = this.player2.type.roll();
        this.player1.type.applyDamage(roll);
        this.currentTurn = 1;
      };
    };

    checkforWin(){
      if (this.player1.type.healthPoints <= 0){
        console.log("Player 2 Wins!");
        this.winner = "Player 2"
        return true
      } else {
        console.log("Player 1 Wins!");
        this.winner = "Player 1"
        return true
      };
    };
    // battle() { 
    //   while (this.player1.type.healthPoints > 0 && this.player2.type.healthPoints > 0 ){
    //     if (this.currentTurn === 1){
    //           let roll = this.player1.type.roll();
    //           this.player2.type.applyDamage(roll);
    //           this.currentTurn = 2;
    //     } else {
    //           let roll = this.player2.type.roll();
    //           this.player1.type.applyDamage(roll);
    //           this.currentTurn = 1;
    //     };
    //   };
    //   if (this.player1.type.healthPoints <= 0){
    //     console.log("Player 2 Wins!");
    //     return "Player 2 Wins!"
    //   } else {
    //     console.log("Player 1 Wins!");
    //     return "Player 1 Wins!"
    //   };
    // };
};