import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
 
  return (
    <>
      <div className='bg-violet-700 h-20 w-full border-2 border-violet-600 rounded-md my-4 p-2 flex items-center justify-center'>
        <h1 className='text-center font-mono font-extrabold'>
        hi i am using tailwind css
      </h1></div>
      <div className='flex flex-col items-center space-y-6 mt-2'>
        <div className='h-16 w-16 rounded-full bg-green-500'></div>
        <div className='h-16 w-16 rounded-full bg-orange-500'></div>
        <div className='h-16 w-16 rounded-full bg-blue-500'></div>
      </div>
      <div className='grid grid-cols-3 gap-2 mx-2 mt-2'>
        <div className='h-16  rounded-full bg-green-500'></div>
        <div className='h-16  rounded-full bg-orange-500'></div>
        <div className='h-16  rounded-full bg-blue-500'></div>
      </div>
      <div className=' sm:bg-amber-500 md:bg-blue-700'>
        <p className=''>i appear on screens wider than 768px</p>
      </div>
      <div className='bg-white dark:bg-gray-900 text-black dark:text-white p-4'>
        dark mode enabled
      </div>
    </>
  )
}

export default App
