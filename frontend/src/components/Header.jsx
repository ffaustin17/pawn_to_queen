
import { FaChessPawn,  FaChessQueen } from 'react-icons/fa';

function Header() {
  return (
    <header className="flex flex-col items-center gap-2 p-4 bg-gray-200 rounded-md shadow-md">
        <div className="flex items-center gap-2">
            <h1 className="flex items-center gap-1 text-5xl font-bold text-gray-700"><FaChessPawn/>Pawn</h1>
            <h1 className="text-3xl">=</h1>
            <h1 className="flex items-center gap-1 text-5xl font-bold text-red-700">Queen<FaChessQueen/></h1>
        </div>

        <p className="text-gray-600 text-sm">A puzzle game designed by Sherzod Khaydarbekov.</p>
    </header>
  )
}

export default Header