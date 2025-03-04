 import { IoSparkles } from 'react-icons/io5';
 import { FiRefreshCcw } from 'react-icons/fi';
 import {BiQuestionMark} from 'react-icons/bi';

 const buttonIcons = {hint: <IoSparkles/>, reset: <FiRefreshCcw/>, rules: <BiQuestionMark/>};
 
 export default function Button({type, handleClick}){
    const icon = buttonIcons[type];

    return(
        <button className="flex items-center gap-2 px-6 py-2 bg-blue-500 rounded-lg shadow-md hover:bg-blue-600 active:scale-95 transition"
            onClick={handleClick}
        >
            {icon}
            {type}
        </button>
    )
 }