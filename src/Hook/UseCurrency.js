import {useEffect,useState} from 'react'


// currency contains value like inr,usd etc
//data comes from API is in the form of string and we have to convert it into .JSON.
// we will use parse
// .then   first .then is for storing data comes from API 
// .then second .then is for making changes in that data. 
// In React (and JavaScript in general), the syntax (()=>()) represents an Immediately Invoked Function Expression (IIFE). This is a function that is defined and immediately executed.
// This is an arrow function with no parameters and no return value. In this case, it doesn’t perform any operations.

// 'data' is now in 'res'

// This function will return 'data' and this 'data' contains inr.json or usd.json file's data i.e currency and its value


function useCurr(currency) {
    let[data,setData] = useState({})
    useEffect(()=>{fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`) 

    // data is now converted into .json type  And .json type is 'Array containing Objects'.
    .then((res)=>res.json())

    // So  res[currency] is passed in the form of array in setData.
    .then((res)=>setData(res[currency]))
    console.log(data);
},[currency])

return data
}
export default useCurr