import React from 'react'
import Cell from './Cell';

//utils needed for the component
const PIECE_MOVEMENTS = {
    "R": [[0,1], [0,-1], [1,0], [-1,0]],
    "B": [[1,1], [1, -1], [-1, 1], [-1, -1]],
    "K": [[2,1], [2,-1], [-2, 1], [-2,-1], [1,2], [1,-2], [-1, 2], [-1, -2]],
    "P": [[-1,0]],
    "Q": [[0,1], [0,-1], [1,0], [-1,0],[1,1], [1, -1], [-1, 1], [-1, -1]]
};

const EMPTY_CELL = "";

function canPieceMove(gridData, pieceVal, pieceRowIndex, pieceColIndex){
    let outcome = false;

    if(PIECE_MOVEMENTS[pieceVal]){
        PIECE_MOVEMENTS[pieceVal].map((moveSpecs)=>{
            let rowDestination = pieceRowIndex + moveSpecs[0];
            let colDestination = pieceColIndex + moveSpecs[1];

            let isRowDestinationValid = rowDestination >= 0 && rowDestination < 4;
            let isColDestinationValid = colDestination >= 0 && colDestination < 4;


            if(isRowDestinationValid && isColDestinationValid){
                if(gridData[rowDestination][colDestination] === EMPTY_CELL) outcome = true;
            }
        })
    }

    return outcome;
}

function Board({gridData, handleCellClick, moveCount}) {

  return (
    <div className="flex flex-col items-center">
        <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300">Move: {moveCount}</h3>
        <div className="grid grid-cols-4 gap-2 p-4 bg-gray-300 rounded-lg shadow-lg">
            {gridData.map((row, rowIndex)=> row.map((pieceVal, pieceValIndex)=>(
                <Cell
                    key={`${rowIndex}-${pieceValIndex}`}
                    pieceVal={pieceVal}
                    rowIndex={rowIndex}
                    colIndex={pieceValIndex}
                    canMove={()=>canPieceMove(gridData, pieceVal, rowIndex, pieceValIndex)}
                    handleClick={handleCellClick}
                />
            )))}
        </div>
    </div>
  )
}

export default Board;