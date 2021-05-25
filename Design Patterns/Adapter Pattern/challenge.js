// Problem statement:
// In this challenge, you are given a TruthAndDare program like this:
// old interface
class TruthAndDare {
  constructor() {
    this.turn = Math.floor(Math.random() * 2) + 1;
  }
  Getturn() {
    if (this.turn == 1) {
      this.turn = 2;
    } else {
      this.turn = 1;
    }
    return this.turn;
  }
  playGame(playerOnename, playerTwoname) {
    if (this.Getturn() == 1) {
      return `${playerOnename}'s turn`;
    } else {
      return `${playerTwoname}'s turn`;
    }
  }
}

const obj = new TruthAndDare();
console.log(obj.playGame("Ross", "Chandler"));

// There is a variable turn that decides which player’s turn it is to give a dare or ask a question.
// The Getturn() function is used to set and return the turn. It is set to either 1 or 2.
// The playGame function is simple: it takes two players and depending on the value of turn, returns the name of the player whose turn it is.

// Now, as the creator of the game, you want to update the game.
// You want the turns to be random such that they are not limited to the values 1 or 2. So here’s what you want to change:
// The turn value to be a random number.
// In the playGame function, if the turn is an even number, it’ll be player 1’s turn else it’ll be player 2’s turn.
// You name the updated function, newPlayGame.
// Make a new interface for the updated functionality like so:

// One thing to note is that the players are used to using the playGame function and you want to quietly make the modifications without changing the outlook that the players are used to.
// For this purpose, you need to use the adapter pattern so that the players can keep on calling playGame, but the new functionality is implemented on the backend instead.

// Input:
// Calling the playGame function

// Output:
// newPlayGame is invoked to decide the turn and the new message is shown to the players

// Sample input:
const obj = new Adapter();
obj.playGame("Ross", "Channdler");

// Sample output:
("Rolling the dice");

// old interface
class TruthAndDare {
  constructor() {
    this.turn = Math.floor(Math.random() * 2) + 1;
  }
  Getturn() {
    if (this.turn == 1) {
      this.turn = 2;
    } else {
      this.turn = 1;
    }
    return this.turn;
  }
  playGame(playerOnename, playerTwoname) {
    if (this.Getturn() == 1) {
      return `${playerOnename}'s turn`;
    } else {
      return `${playerTwoname}'s turn`;
    }
  }
}

// new interface
class NewTruthAndDare {
  constructor(randomValue) {
    this.turn = randomValue;
  }

  newplayGame(playerOnename, playerTwoname) {
    if (this.turn % 2 == 0) {
      return `${playerOnename}'s turn`;
    } else {
      return `${playerTwoname}'s turn`;
    }
  }
}

// Adapter Class
class Adapter {
  constructor(randomValue) {
    const newGame = new NewTruthAndDare(randomValue);

    this.playGame = function (playerOnename, playerTwoname) {
      return newGame.newplayGame(playerOnename, playerTwoname);
    };
  }
}

// Finally, we make sure that the interface does not change for the players. 
// This means they can keep calling playGame without knowing that the method to randomize turns has changed or the function name has changed to newplayGame. 
// For this purpose, we define the Adapter class.
// So now, the players can keep calling the playGame function as it is, but on the backend, the newplayGame function will execute instead.