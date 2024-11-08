import React from 'react'
import { useId } from 'react'
// onChange={(e).onAmountChange && onAmountChange(Number(e.target.value))}
// JS takes events input in the form of string so we have to convert it into number because we are taking number as a input


// map is method of array and currency is in the array . map doesn't take identical values. and it remembers order.


  function Input({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions =[],
    selectCurrency="usd",
    amountDisable = false,
    currencyDisable = false,
    // injectable css 
    className=""
}) 

{
  let amountInputId= useId()
  return (
    <>
    {/* Left Side  */}
            {/* injectable css  */}
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
        <div className="w-1/2">
            <label htmlFor={amountInputId} className="text-black/40 mb-2">{label}</label>
            <input 
            id={amountInputId}
            type="number" 
            placeholder="Amount" 
            disabled={amountDisable}
            className="outline-none w-full bg-transparent py-1.5"
            value={amount}
            onChange={(e)=>onAmountChange && onAmountChange(Number(e.target.value))}
            />
        </div>

        {/* Right Side  */}
        <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
        value={selectCurrency}
        // onChange={onCurrencyChange}
        onChange={(e)=>onCurrencyChange && onCurrencyChange(e.target.value)}
        disabled={currencyDisable}
        >
            {/* map can hold multiple data and while using map its imp to give key to tell on which element key is applied. Here key is apply on currency means react will make DOM for currency element and not for all elements */}
          {currencyOptions.map((currency)=>(
            <option key={currency} value={currency}>{currency}</option>
          ))}
        </select>
        </div>
    </div>
    </>
  )
}
export default Input

  