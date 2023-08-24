"use client"
import React, { useEffect, useRef, useState } from 'react'

export default function Load() {
    const [cur, setcur] = useState(0);
    const [lmit, setlmit] = useState(0);
    const ref1 = useRef<HTMLInputElement>(null);
    const ref2 = useRef<HTMLInputElement>(null);
    const ref3 = useRef<HTMLInputElement>(null);




    const [seconds, setSeconds] = useState(0);
    const [minutes, setminutes] = useState(0);
    const [hours, sethours] = useState(0);

    let timer: any;

    const ended = () => {    
        setcur(0);
        setlmit(0);
    }

    const Timer = ( ) => {
        if(cur >= lmit || lmit == 0){
            console.log("end");
            ended();
            return ;
        }
        console.log("cur = " , cur);
        console.log("lmit = " , lmit);
        
        if(cur >= lmit || lmit == 0){ 
            ended();
        }
        if(lmit > cur){
            setcur((p)=>((p+1)));
            setSeconds((p) => p - 1);
            if(seconds == 0){
                setSeconds(59);
                setminutes((p) => p-1);
                if(minutes == 0){
                    sethours((p) => p - 1);
                }
            }
        }
    }
    
    function setAgain(){
        
        setcur(0);
        setlmit(0);
        
        let x:any = ref1.current?.value;
        let y:any = ref2.current?.value;
        let z:any = ref3.current?.value;
        x = parseInt(x);
        y = parseInt(y);
        z = parseInt(z);
        if(!x) x = 0;
        if(!y) y = 0;
        if(!z) z = 0;
        console.log(x, y, z);
        
        console.log(lmit);
        setcur(0);
        setlmit(x*3600 + y*60 + z);
        sethours(x);
        setminutes(y);
        setSeconds(z);

    }   

    useEffect(()=>{
        
        timer = setInterval(Timer, 1000);
        return () => {
            clearInterval(timer);
        }   
    })
    
  return (
    <div>
        <div className="alarm">
            <div className="circle" style={
                {
                    background:`conic-gradient(hotpink ${(lmit == 0) ? 0 : Math.floor(360*(cur/lmit))}deg, white 0)`
                }
            }>
                <span>
                    {  hours  }:{minutes}:{seconds}
                </span>
            </div>

            <div className='settings'>
                <input type="text" placeholder='H' ref={ref1}/>
                <input type="text" placeholder='M' ref={ref2}/>
                <input type="text" placeholder='S' ref={ref3}/>
            </div>
            <button className='starter' onClick={() => setAgain()}>Start</button>
        </div>

    
    </div>
  )
}
