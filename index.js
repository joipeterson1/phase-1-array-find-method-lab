// code your solution here
const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    //...
  ]
  function superbowlWin(record) {
    const winGame = record.find((game) => game.result === "W");
    if (winGame) {
      return winGame.year;
    }
  }
  