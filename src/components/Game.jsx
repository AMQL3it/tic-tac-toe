import { useState } from "react";
import Board from "./Board";
import History from "./History";

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [xIsNext, setXIsNext] = useState(true);
  const [currentMove, setCurrentMove] = useState(0);

  const currentSquares = history[currentMove];

  const handlePlay = (nextSquares) => {
    setXIsNext(!xIsNext);
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  };

  const jumpTo = (nextMove) => {
    setCurrentMove(nextMove);
    setXIsNext(nextMove % 2 === 0);
  };

  //   const moves = history.map((squares, move) => {
  //     let description = move ? "Go to move #" + move : "Go to game start";

  //     return (
  //       <li
  //         key={move}
  //         className="bg-gray-700 text-white mb-1 p-1 rounded-sm cursor-pointer"
  //       >
  //         <button onClick={() => jumpTo(move)}>{description}</button>
  //       </li>
  //     );
  //   });

  return (
    <div className="flex justify-center p-4">
      <div className="mr-16">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="ml-16">
        {/* <ol>{moves}</ol> */}
        <History history={history} jumpTo={jumpTo} />
      </div>
    </div>
  );
}
