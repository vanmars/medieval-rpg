import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Warrior from './warrior.js';
import Mage from './mage.js';
import Player from './player.js';
import BattleSystem from './battleSystem.js'

$(document).ready(function(){
  $("#medieval-form").submit(function(event){
    event.preventDefault();
    const player1Name = $("#player1Name").val()
    const player2Name = $("#player2Name").val()
    const player1Type = $("#player1Class").val()
    const player2Type = $("#player2Class").val()

    // Create New Warrior or Mage Constructors for Both Players
    let player1;
    if (player1Type === "Warrior"){
      player1 = new Player("Warrior");
    } else {
      player1 = new Player("Mage");
    };

    let player2;
    if (player2Type === "Warrior"){
      player2 = new Player("Warrior"); 
    } else {
      player2 = new Player("Mage");
    };

    // Create New BattleSystem
    let newGame = new BattleSystem(player1, player2);
    newGame.determineTurn();
    let turn = newGame.currentTurn;

    // Display Content to Screen
    $("#medieval-form").hide();
    $("#battleDiv").show();
    $("#playerTurn").text(turn);

    $("#card1Name").text(player1Name);
    $("#card2Name").text(player2Name);

    $("#card1Type").text(player1Type);
    $("#card2Type").text(player2Type);

    $("#card1HP").text(player1.type.healthPoints);
    $("#card2HP").text(player2.type.healthPoints);

    $("#card1Defense").text(player1.type.defense);
    $("#card2Defense").text(player2.type.defense);

    $("#card1Strength").text(player1.type.strength);
    $("#card2Strength").text(player2.type.strength);

    $("#card1Intelligence").text(player1.type.intelligence);
    $("#card2Intelligence").text(player2.type.intelligence);
  });

  // Create Event Listeners for Attack Button
})
