import { useCallback, useState , useEffect , useRef} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
  const [length, setlength] = useState(8)
  const [numbers, setnumbers] = useState(false)
  const [carallow, setCarallow] = useState(false)
  const [Password, setPassword] = useState("")

// using ref hook


  const passwordcopy = useRef(null)

  const passwordcopytocilpboard = useCallback(()=>{
    passwordcopy.current?.select()
    window.navigator.clipboard.writeText(Password)
  },[Password])

  const Passwordgenerator = useCallback(()=>{
    let pass = ""
    let string = "ABCDEFGHIJKLMNOPQSTWXYZabcdefghijklmnopqrstvwxyz"
    
    if (numbers) {
      string += "0123456789"
    }
    if (carallow) {
      string += "~!@#$%^&*()_{}[]<>/*-+."
    }

    for (let i = 0; i <length; i++) {
      let char = Math.floor(Math.random() * string.length + 1 )
      pass += string.charAt(char)
    }

    setPassword(pass) 


  } , [length,numbers,carallow, setPassword])

  useEffect(()=>{Passwordgenerator()}, [length, numbers, carallow, Passwordgenerator])
    // when we are using useState's methods like - setlength,setnumbers,setCarallow so if er fire a call back function inside those mathods then it will give us the prev value or prev state to use it. like- setCarallow( *(prev)=>{}* ) this is giving us the prev value

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-4 my-8 text-orange-500 bg-gray-700'>
        <h1 className='text-white text-center' >Password generator</h1>
        <div className='flex shadow-md rounded-lg overflow-hidden mb-4'>

          <input type="text" value={Password} className='outline-none w-full py-1 px-3' placeholder='password' readOnly ref={passwordcopy}/>
          <button className='bg-black text-white px-1 py-3 ' onClick={passwordcopytocilpboard}>Copy</button>
        </div>
        
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range" min={6} max={50} value={length} className='cursor-pointer' onChange={(e)=> {setlength(e.target.value)}}/>
            <label>Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" 
            defaultValue={carallow} 
            id='cartinput'
            onChange={()=>setCarallow((prev)=> !prev)} />
            <label htmlFor="cartinput">Characters</label>

          </div>
          <div className='flex items-center gap-x-1'>
          <input type="checkbox" 
            defaultValue={numbers} 
            id='numberinput'
            onChange={()=>setnumbers((prev)=> !prev)} />
            <label htmlFor="numberinput">Numbers</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
