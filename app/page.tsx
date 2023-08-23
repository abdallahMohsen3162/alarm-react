"use client";
import { useState } from "react"
import Load from "./inner"
export default function Home() {
  const [arr, setarr] = useState<number[]>([1]);
  
  return (
    <div >
      <div className="control-panel">
       <button className="new-alarm" onClick={() => {setarr((p) => [...p, arr[arr.length-1] + 1])}}>+</button>

      </div>
      <div className="container">
      {
        arr.map((el) => {
          return(
            < Load key={el}/>
          )
        })
      }
      </div>
    </div>
  )
}



//password : +EU%nPDXwSZj6AR