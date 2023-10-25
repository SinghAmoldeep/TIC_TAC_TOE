import React from "react";

const Scoreboard = ({ player1Wins, player2Wins }) => {
  return (
    <div className="scoreboard">
      <h2 class="score">Scoreboard</h2>
      <p class="p1">Player 1 wins: {player1Wins}</p>
      <p class="p2">Player 2 wins: {player2Wins}</p>
    </div>
  );
};

export default Scoreboard;