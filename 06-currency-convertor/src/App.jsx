import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import { InputBox } from './components'
import usecurrencyinfo from './hooks/usecurrencyinfo'
import './App.css'

function App() {
  const[amount,setamount]=useState(0)
  const[from,setfrom]=useState("USD")
  const[to,setto]=useState("INR")
  const[convertedamount,setconvertedamount]=useState(0)
  const currencyinfo=usecurrencyinfo(from)
  const options=Object.keys(currencyinfo)
  
  const swap=()=>{
       const prevFrom = from
        const prevAmount = amount
        const prevConverted = convertedamount

        setfrom(to)
        setto(prevFrom)
        setamount(prevConverted)
        setconvertedamount(prevAmount)
    }
  const convert=()=>{setconvertedamount(amount * currencyinfo[to.toUpperCase()])}


  return (
    <>
        <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url("https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1600&q=80")`,
            }}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            convert()
                           
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                amount={amount}
                                CurrencyOption={options}
                                onCurrencyChange={(currency)=>setfrom(currency)}
                                selectCurrency={from}
                                onAmountChange={(amount)=>setamount(amount)}
                                
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={swap}
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"
                                amount={convertedamount}
                                CurrencyOption={options}
                                onCurrencyChange={(currency)=>setto(currency)}
                                selectCurrency={to}
                                amountDisable
                                
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert{ from.toUpperCase()} to {to.toUpperCase()}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default App
