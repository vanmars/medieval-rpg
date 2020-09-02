// Battle System Function (parameters: two players)
//     Determine who goes first
//     Win Scenario While Loop (check player's HP, if one player is at zero, function stops, and a winner is declared)
//       Cause the first player to roll (invoke their roll method)
//       Take the damage calculation and apply to the other player
//       Switch turns: invoke the second player's roll method
//       Take the damage calculation and apply to the other player

export default function battleSystem (player1, player2) {
  let turn = Math.ceil(Math.random()*2);
};

// export default class BattleSystem {
    // constructor(player1, player2){
        // this.player1 = player 1;
        // this.player 2 = player 2;
        // this.currentTurn;
    // }

    // determineTurn(){
        // turn = Math.ceil(Math.random()*2);
        // this.currentTurn = turn;
    // }

    // battle() { 
      //while (this.player1.type.healthPoints > 0 && this.player2.type.healthPoints > 0 ){
        // if (currentTurn === 1){
              // let roll = this.player1.type.roll()
              // this.player2.type.applyDamage(roll);
              // currentTurn = 2;
        // } else {
              // let roll = this.player2.type.roll()
              // this.player1.type.applyDamage(roll);
              // currentTurn = 1;
        // }
      // }
    // }
    // if(this.player1.type.healthPoints <= 0){
    //   return "Player 2 Wins"
    // } else {
    //   return "Player 1 Wins"
    // }
// };