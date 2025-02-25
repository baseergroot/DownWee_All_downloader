import { useState, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [input, setInput] = useState("")
  const [vsrc, setSrc] = useState()
  const [showvideo, setShowvideo] = useState("none")
  
  const [showp, setShowp] = useState("none")
  
  const handleSrc = () => {
  setShowvideo("none")
  setShowp("block")
   // console.log("fetching")
  //  console.log(input)
    fetch(import.meta.env.VITE_API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ url: input }),
})
.then(response => response.json())
.then((data) =>  {
    setShowp("none")
    console.log("text: ", data)
    setShowvideo("block")
    setSrc(data.data.videoUrl)
    
})

  }
  return (
    <>
    <h1>DownWee <br/> All Downloader</h1>
     <main>
         
     <input type="text" placeholder="Paste Your Link Here" onChange={(e) => {
         setInput(e.target.value)
     }} value={input}/>
    
     <button onClick={handleSrc}>Submit</button>
     <video controls src={vsrc} style={{display: showvideo}}></video>
     
   <div class="loading" style={{display: showp}}>
    	<div class="loading-text">
    		<span class="loading-text-words">L</span>
		    <span class="loading-text-words">O</span>
	    	<span class="loading-text-words">A</span>
	    	<span class="loading-text-words">D</span>
	    	<span class="loading-text-words">I</span>
    		<span class="loading-text-words">N</span>
		    <span class="loading-text-words">G</span>
    	</div>
   </div>
     </main>
    </>
  )
}

export default App
