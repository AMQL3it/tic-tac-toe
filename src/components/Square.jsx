export default function Square({ value, onSquareClick }) {
  return (
    <button
      className="bg-white border border-gray-500 h-10 w-10 m-1 leading-10 text-2xl"
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
}
