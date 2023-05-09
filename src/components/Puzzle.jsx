import React, { useState } from 'react';

function Puzzle() {
  const [pieces, setPieces] = useState([
    { id: 1, row: 1, col: 1 },
    { id: 2, row: 1, col: 2 },
    { id: 3, row: 1, col: 3 },
    { id: 4, row: 2, col: 1 },
    { id: 5, row: 2, col: 2 },
    { id: 6, row: 2, col: 3 },
    { id: 7, row: 3, col: 1 },
    { id: 8, row: 3, col: 2 },
    { id: 9, row: 3, col: 3 },
  ]);

  function handlePieceClick(piece) {
    // TODO: Move the piece to the empty space
  }

  function handleShuffleClick() {
    // TODO: Shuffle the puzzle pieces
  }

  return (
    <div className="puzzle-container">
      {pieces.map((piece) => (
        <div
          key={piece.id}
          className="w-1/3 h-1/3 bg-white border-2 border-gray-500 float-left"
          onClick={() => handlePieceClick(piece)}
        >
          {/* TODO: Render the piece number */}
        </div>
      ))}
      <button onClick={handleShuffleClick}>Shuffle</button>
    </div>
  );
}

export default Puzzle;