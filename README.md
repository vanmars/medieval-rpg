# _Medieval RPG_

_3 September 2020_

#### _A medieval role playing game to practice test-driven development and using ES6 classes (for Epicodus)_

#### By _**Vanessa Stewart and David Butler**_

## Description

_This is a medieval role playing game that allows users to pick an avatar and battle with another player._

## Planning
1. Use ES6 classes to generate different character types.
* Warrior
  * strength:100
  * HP (health points): 100
  * defense: 80
  * intelligence: 20
  * Roll Method: for special power, return is how much damage caused

* Mage
  * strength:10
  * HP (health points): 100
  * defense: 50
  * intelligence: 100
  * Roll Method: for special power, return is how much damage caused

2. Create Battle System
* Battle System Class (parameters: two players)
    * Determine who goes first
    * Win Scenario While Loop (check player's HP, if one player is at zero, function stops, and a winner is declared)
      * Cause the first player to roll (invoke their roll method)
      * Take the damage calculation and apply to the other player
      * Switch turns: invoke the second player's roll method
      * Take the damage calculation and apply to the other player

3. Leveling Up
  * Create Player Class
    * Player Type: Warrior or Mage
    * Current Level
    * Number of Objects (keep it at two objects)
    * Methods for each level - adds points to an attribute

4. Inventory
  * Magic Armor Class
  * Magic Wand Class

## Setup/Installation Requirements

To Extend This Project:
* Clone this project using the 'git clone' command in terminal.
* Open the cloned repo in a text editor of your choice
* Run 'npm install' in terminal to load all dependencies
* Run 'npm run start' in terminal to initialize live server to see changes made to project

## Known Bugs

_There are no known bugs at this time._

_Future iterations might include:_
* Adding sprite images for each character type
* Adding additional methods in the BattleSystem class to allow for strategic game play.

## Technologies Used

* HTML5
* CSS/Bootstrap
* JavaScript/jQuery
* JEST
* webpack

### License

Copyright (c) 2020 **_Vanessa Stewart and David Butler_**

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

