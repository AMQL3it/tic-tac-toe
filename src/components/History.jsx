export default function History({ history, jumpTo }) {
  return (
    <ol>
      {history.map((_, move) => {
        let description = move ? "Go to move #" + move : "Go to game start";
        return (
          <li
            key={move}
            className="bg-gray-700 text-white mb-1 p-1 rounded-sm cursor-pointer"
          >
            <button onClick={() => jumpTo(move)}>{description}</button>
          </li>
        );
      })}
    </ol>
  );
}
