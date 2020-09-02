### Planning
1. Use ES6 classes to generate different character types.

  Warrior
    strength:100
    HP (health points): 100
    defense: 80
    intelligence: 20
    Roll Method: for special power, return is how much damage caused

  Mage
    strength:10
    HP (health points): 100
    defense: 50
    intelligence: 100
    Roll Method: for special power, return is how much damage caused

2. Create Battle System
  Battle System Function (parameters: two players)
    Determine who goes first
    Win Scenario While Loop (check player's HP, if one player is at zero, function stops, and a winner is declared)
      Cause the first player to roll (invoke their roll method)
      Take the damage calculation and apply to the other player
      Switch turns: invoke the second player's roll method
      Take the damage calculation and apply to the other player

3. Leveling Up
  Create Player Class
    Player Type: Warrior or Mage
    Current Level
    Number of Objects (keep it at two objects)
    Methods for each level - adds points to an attribute

4. Inventory
  Magic Armor Class
  Magic Wand Class
