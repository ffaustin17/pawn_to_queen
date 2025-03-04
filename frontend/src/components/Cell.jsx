import React from 'react'
import { FaChessBishop, FaChessKnight, FaChessPawn, FaChessQueen, FaChessRook } from 'react-icons/fa'

//extra utils needed by the component
const pieceIconMapping = {
    "K":<FaChessKnight/>,
    "B":<FaChessBishop/>,
    "R":<FaChessRook/>,
    "P":<FaChessPawn/>,
    "Q":<FaChessQueen/>
}

function Cell({pieceVal, rowIndex, colIndex, canMove, handleClick}) {
  
    const isPlayable = pieceVal !== "X";
    const isTerminal = rowIndex === 3 && colIndex === 3;


    return (
        <button
            className={`flex items-center justify-center text-3xl w-16 h-16 md:w-20 md:h-20 rounded-lg shadow-md transition-transform transform cursor-pointer 
                ${isPlayable ? `${isTerminal? "bg-green-300": "bg-white"} hover:scale-105 active:scale-95 border border-gray-400`: "bg-gray-400"}`}
            onClick={()=>{
                if(canMove()) {
                    handleClick(rowIndex, colIndex, pieceVal);
                }
            }} 
        >
            {pieceIconMapping[pieceVal]}
        </button>
    )
}



export default Cell