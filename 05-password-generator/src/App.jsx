import { useState,useCallback ,useEffect,useRef} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
   const [length,setlength]=useState(8)
   const [numberallowed,setnumberallowed]=useState(false)
   const [charallowed,setcharallowed]=useState(false)
   const [password,setPassword]=useState("")
   const passwordref=useRef(null)
   const copypasswordtoclipboard=useCallback(()=>{
    passwordref.current?.select()
    
    window.navigator.clipboard.writeText(password)
   },[password])
   const passwordgenerator=useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberallowed){str+="0123456789"}
    if(charallowed){str+="!@#$%^&*()_+=-{}~[]"}
    for(let i=1;i<=length;i++){
      let char=Math.floor(Math.random()*str.length)
      pass+=str.charAt(char)
    }
    setPassword(pass)
   },[length,numberallowed,charallowed])
   useEffect(()=>{passwordgenerator()},[length,numberallowed,charallowed,passwordgenerator])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-2xl rounded-3xl px-6 py-5 my-10 text-orange-400 bg-gradient-to-br from-slate-900 via-slate-800 to-amber-900 border border-orange-500/20'>
        <h1 className='text-white text-center text-2xl font-semibold tracking-wide'>Password Generator</h1>
        <div className='flex shadow-inner rounded-2xl overflow-hidden mb-4 bg-slate-900/80'>
          <input
            type="text"
            value={password}
            className='outline-none w-full py-3 px-4 bg-transparent text-white placeholder:text-slate-400 focus:ring-2 focus:ring-orange-400 rounded-xl transition'
            placeholder='password'
            readOnly
            ref={passwordref}
          />
          <button
            onClick={copypasswordtoclipboard}
            className="ml-2 px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-md transition disabled:opacity-50"
            disabled={!password}
          >
            Copy
          </button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range"
            min={6}
            max={100}
            value={length}

            className='cursor-pointer' onChange={(e)=>{setlength(e.target.value)}} />
            <label>length:{length}</label>

          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
            defaultChecked={numberallowed}
            id='numberinput'
           

            className='cursor-pointer' onChange={()=>{setnumberallowed((prev)=>!prev)}} />
            <label htmlFor="numberInput">Numbers</label>

          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
            defaultChecked={charallowed}
            id='charinput'
           

            className='cursor-pointer' onChange={()=>{setcharallowed((prev)=>!prev)}} />
            <label htmlFor="charInput">characters</label>

          </div>
        </div>
      </div>
    </>
  )
}

export default App
