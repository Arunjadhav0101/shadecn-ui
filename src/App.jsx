import { useState } from "react"

function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
    <div className="w-full h-screen durration-200" style={{backgroundColor:color}}></div>
    <div className="fixed flex flex-warp justify-center bottom-12 inset-x-0 px-2">
      <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl">
<button 
onClick={() => setColor("red")}
className="outline-none px-4 py-1 rounded-full" style={{backgroundColor : "red"}}>red</button>
<button 
onClick={() => setColor("pink")}
className="outline-none px-4 py-1 rounded-full" style={{backgroundColor : "pink"}}>pink</button>
<button 
onClick={() => setColor("black")}
className="outline-none px-4 py-1 rounded-full text-white" style={{backgroundColor : "black"}}>black</button>
<button 
onClick={() => setColor("orange")}
className="outline-none px-4 py-1 rounded-full" style={{backgroundColor : "orange"}}>orange</button>
<button 
onClick={() => setColor("blue")}
className="outline-none px-4 py-1 rounded-full" style={{backgroundColor : "blue"}}>blue</button>
<button 
onClick={() => setColor("yellow")}
className="outline-none px-4 py-1 rounded-full" style={{backgroundColor : "yellow"}}>yellow</button>
<button 
onClick={() => setColor("green")}
className="outline-none px-4 py-1 rounded-full" style={{backgroundColor : "green"}}>green</button>


      </div>
      </div>
    </>

  )
}

export default App
