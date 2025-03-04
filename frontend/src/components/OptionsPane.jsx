import Button from "./Button"




function OptionsPane({onReset}) {
  return (
    <div className="flex items-center justify-center gap-4 p-3">
        <Button type="reset" handleClick={()=>{onReset()}}/>
        <Button type="hint" handleClick={()=>{console.log("button clicked")}}/>
        <Button type="rules" handleClick={()=>{console.log("button clicked")}}/>
    </div>
  )
}

export default OptionsPane