import GamePane from "./components/GamePane"
import Header from "./components/Header"


function App() {

  return (
    <div className=" w-full">
      <div className="flex flex-col w-full h-screen px-2 py-1 gap-2">
        <Header/>
        <GamePane/>
      </div>
      
    </div>
  )
}

export default App
