import { useState } from 'react'
import Board from './Board';
import OptionsPane from './OptionsPane';


//functions needed by the component

//this function finds where the empty cell is in a grid. This function assumes that there is only one empty cell in the grid
function getEmptyTilePos(gridData){
    let emptyTilePos;

    gridData.map((row, rowIndex)=>{
        if(row.includes("")){
            emptyTilePos = { row: rowIndex, col: row.indexOf("")}
        }
    });

    return emptyTilePos;
}

//
function swap(gridData, row, col, emptyTilePos, val){
    let newGrid = JSON.parse(JSON.stringify(gridData));

    newGrid[row][col] = "";
    newGrid[emptyTilePos.row][emptyTilePos.col] = val;

    if(val === "P" && (emptyTilePos.row === 0 && emptyTilePos.col === 0)){
        newGrid[emptyTilePos.row][emptyTilePos.col] = "Q";
    }

    return newGrid;
}

export default function GamePane() {

    const [gridData, setGridData] = useState(
        [
            ["K", "K", "K", "K"],
            ["B", "B", "B", "B"],
            ["R", "R", "R", "R"],
            ["P", "X", "X", ""],
        ]
    );

    const [moveCount, setMoveCount] = useState(0);

    const emptyTilePos = getEmptyTilePos(gridData);

    const isGameWon = gridData[3][3] === "Q";


    const handleCellClick = (row, col, val) =>{
        setGridData(swap(gridData, row, col, emptyTilePos, val));
        setMoveCount(prev => prev + 1);
    };

    const resetGame = ()=>{
        setGridData([
            ["K", "K", "K", "K"],
            ["B", "B", "B", "B"],
            ["R", "R", "R", "R"],
            ["P", "X", "X", ""],
        ]);

        setMoveCount(0);
    }

  return (
    <div className="flex flex-col flex-grow rounded-md bg-gray-200 shadow-md gap-2">
        <div className="flex flex-col items-center justify-center">
            <Board gridData={gridData} handleCellClick={handleCellClick} moveCount={moveCount}/>
            <OptionsPane onReset={resetGame}/>
        </div>

        <p className="text-center">Click on the piece you wish to move.</p>

        {/*Modal that shows up when the game is won*/}
        {isGameWon && (
            <div className="fixed inset-0 flex items-center justify-center">
                <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                    <h2 className="text-xl font-bold">You Won!!!</h2>
                    <p>Moves: {moveCount}</p>
                    <button
                        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
                        onClick={()=>resetGame()
                    } 
                    >
                        Restart
                    </button>
                </div>
            </div>
        )}
    </div>

    
  )
}

