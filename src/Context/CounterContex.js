import { useState } from "react";
import { createContext } from "react";

export let counterContext=createContext();

export function CounterContextProvider(props){
    
    const [counter,setCounter]=useState(0)
  function ChangeCount(){
    setCounter(Math.random())
  }  
return(
<counterContext.Provider value={{counter, ChangeCount}}>
    {props.children}
</counterContext.Provider>
)
 }