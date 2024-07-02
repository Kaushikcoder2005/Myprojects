import { useState } from "react"


function App() {
  const [color,setColor] = useState('purple')

  return (
    <>
    <div className="w-full h-screen duration-500" style={{backgroundColor:color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-xl bg-white px-2 py-2 rounded-3xl">
            <button onClick={() => setColor('red')} className="bg-red-700 px-4 py-2 rounded-full">Red</button>
            <button onClick={() => setColor('yellow')} className="bg-yellow-400 px-4 py-2 rounded-full">Yellow</button>
            <button onClick={() => setColor('black')} className="bg-black px-4 py-2 rounded-full text-white">Black</button>
            <button onClick={() => setColor('lightblue')} className="bg-blue-500 px-4 py-2 rounded-full">Blue</button>
            <button onClick={() => setColor('green')} className="bg-green-700 px-4 py-2 rounded-full">Green</button>
          </div >
          <div className="bg-slate-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde iste, nulla voluptate nemo sapiente vitae, facilis a natus fuga magnam molestias! Optio sed eaque repudiandae saepe sunt placeat molestias consectetur.</div>
      </div>
    </div>
    </>
  )
}

export default App

