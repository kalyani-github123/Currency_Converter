import { useState } from 'react'
import useCurr from './Hook/UseCurrency.js'
import Input from './Components/Input.jsx'


export default function App() {
  let [amount, setAmount] = useState(0);
  let [from, setFrom] = useState("usd");
  let [to, setTo] = useState("inr");
  let [convAmt, setConvAmt] = useState(0);
   // from is passed bcoz it's a currency value and it contains "usd" and will be stored in currency
  // currently currInfo holds usd's data i.e object containing key-value pairs 
  let currInfo = useCurr(from);
  // keys are retrieved from key:value pair 
  let options = Object.keys(currInfo);
  let swap = () => {
    setFrom(to);
    setTo(from);
    setAmount(convAmt);
    setConvAmt(amount);
  };
  let convert = () => {
    // "inr": 84.07586934
    // setConvertedAmt(0 * currInfo[inr])
    setConvAmt(amount * currInfo[to]);
  };
  return (
    <>
      <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/259132/pexels-photo-259132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
        }}
      >
        <div className="w-full">
          <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
            <form
              onSubmit={(e) => {
                // to save webpage and form from being refreshed 
                e.preventDefault();
                convert();
              }}
            >
              <div className="w-full mb-1">
                <Input
                  label="From"
                  amount={amount}
                  currencyOptions={options}
                  onCurrencyChange={(currency) => setFrom(currency)}
                  selectCurrency={from}
                  onAmountChange={(amount) => setAmount(amount)}
                />
              </div>
              <div className="relative w-full h-0.5">
                <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5" onClick={swap}>SWAP</button>
              </div>
              <div className="w-full mb-1">
                <Input
                  label="To"
                  amount={convAmt}
                  currencyOptions={options}
                  onCurrencyChange={(currency) => setTo(currency)}
                  selectCurrency={to}
                  amountDisable
                />
              </div>
              <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                Convert {from.toUpperCase()} To {to.toUpperCase()}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}