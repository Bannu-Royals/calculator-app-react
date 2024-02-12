import React, { useState } from 'react';
import * as math from 'mathjs';

export default function Home() { 
  const [input , setInput] = useState("");
  function displayInput(value) { 
    if (value === "C") {
      setInput("");
    }
    else if(value === "="){
      try {
        setInput(math.evaluate(input).toString());
      } catch (error) {
        setInput("INVALID");
      }
    }
    
    else if(value === "BS"){
       if(input === "INVALID"){
        setInput("")
       }
       else{
        setInput(previnput => previnput.slice(0,-1))
       }    
    }
    else if(input === "INVALID"){ 
        setInput(value) 
    }
    else {
        setInput((previnput) => previnput + value)
    }
  }
  const buttonClass = 'w-[30%] bg-[#EBE3D5] hover:bg-[#776B5D] shadow-lg duration-200 py-4 rounded';
  return (
    <>
      <section  className="bg-[#F3EEEA] h-screen flex flex-col  justify-center items-center">
       <section draggable="true" className='bg-[#B0A695] flex flex-col rounded-lg justify-center items-center lg:h-[85%] lg:w-[35%] w-[85%] h-[80%] md:w-[45%] text-2xl shadow-lg xl:w-[25%]'>
        <div>
            <p className='text-2xl lg:text-3xl text-[#342a1f]'>ᑕᗩᒪᑕᑌᒪᗩTOᖇ</p>
        </div>
       <div className='flex w-[85%] m-4'>
      <input  className='flex-grow py-6 bg-[#776B5D] cursor-none rounded-lg text-center text-[#EBE3D5]' type="text" value={input} />
      </div>
      <div className='flex w-[85%] gap-2 m-2 lg:m-4'>
        <button className={buttonClass} onClick={()=>displayInput(7)}>𝟟</button>
        <button className={buttonClass} onClick={()=>displayInput(8)}>𝟠</button>
        <button className={buttonClass} onClick={()=>displayInput(9)}>𝟡</button>
        <button className={buttonClass} onClick={()=>displayInput("/")}>/</button>
        
      </div>
      <div className='flex w-[85%] gap-2 m-2 lg:m-4'>
        <button className={buttonClass} onClick={()=>displayInput(4)}>𝟜</button>
        <button className={buttonClass} onClick={()=>displayInput(5)}>𝟝</button>
        <button className={buttonClass} onClick={()=>displayInput(6)}>𝟞</button>
        <button className={buttonClass} onClick={()=>displayInput('*')}>＊</button>
      </div>
      <div className='flex w-[85%] gap-2 m-2 lg:m-4'>
      <button className={buttonClass} onClick={()=>displayInput(1)}>𝟙</button>
        <button className={buttonClass} onClick={()=>displayInput(2)}>𝟚</button>
        <button className={buttonClass} onClick={()=>displayInput(3)}>𝟛</button>
        <button className={buttonClass} onClick={()=>displayInput('-')}>-</button>
      </div>
      <div className='flex w-[85%] gap-2 m-2 lg:m-4'>
      <button className={buttonClass} onClick={()=>displayInput('.')}>.</button>
        <button className={buttonClass} onClick={()=>displayInput(0)}>𝟘</button>
        <button className={buttonClass} onClick={()=>displayInput("BS")}>←</button>
        <button className={buttonClass} onClick={()=>displayInput("+")}>+</button>
      </div>
      <div className='flex w-[85%] gap-2'>
      <button className='bg-[#776B5D] text-white py-4 rounded w-[50%] hover:shadow-lg' onClick={() => displayInput("C")}>𝔸ℂ</button>
        <button className='bg-[#776B5D] text-white rounded w-[50%] hover:shadow-lg ' onClick={() => displayInput("=")}>=</button>
      
      </div>
       </section>
    
      </section>

    </>
  );
}
