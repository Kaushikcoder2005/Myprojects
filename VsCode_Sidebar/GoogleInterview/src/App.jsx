import { useState } from 'react'
import explorer from './data/Data'
import Folder from './components/Folder'


function App() {


  return (
    <div  >
    <Folder explorer={explorer}/>
    </div>
  )
}

export default App
