import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { ThemeProvider } from './Context/Theme'
import Card from './Components/Card'
import ThemeBtn from './Components/Themebutton'

function App() {
  const [themeMode,setthememode]=useState("light")
  const lightTheme=()=>{
    setthememode("light")
  }
  const darkTheme=()=>{
    setthememode("dark")
  }
  useEffect(()=>{
    document.querySelector('html').classList.remove("light","dark")
    document.querySelector('html').classList.add(themeMode)
  },[themeMode])

  return (
    <>
      <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
      <div className="flex min-h-screen items-center justify-center">
      <div className="w-full">
      <div className="mx-auto mb-4 flex max-w-sm justify-end">
      <ThemeBtn/>
      </div>

      <div className="mx-auto max-w-sm">
      <Card/>
    </div>
  </div>
</div>
</ThemeProvider>
    </>
  )
}

export default App
