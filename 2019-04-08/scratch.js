// tic-tac-toe
// const playerX = new HumanPlayer('X');
// const playerO = new HumanPlayer('O');

// const playerX = new HumanPlayer('X');
// const playerO = new ComputerPlayer('O');

game = new Game(playerX, playerO);

while(!game.isFinished()) {
  // stuff here maybe?
  // print the board?
}

class Game {
  isFinished() {
    return false;
  }
}

game.eachTurn((turn) => {
  turn.getPosition();
  turn.getPlayer();

  if (isValid(turn)) {
    // next turn
  } else {
    // print some message
    // re-do the previous turn
  }
});

if (game.isDraw()) {
  // draw
} else if (game.hasWinner()) {
  const winner = game.getWinner();
} else {
  // shouldn't get here
}
