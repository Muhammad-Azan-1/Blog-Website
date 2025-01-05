
import React from 'react'
import Link from 'next/link'
import { useState , useRef , useEffect, } from "react";
import { memo } from 'react'
const InputField = () => {

        const [color , setColor] = useState(false)
        const divRef = useRef<HTMLDivElement>(null);
    
    function borderChange(){
    
        setColor(true); 
    }
    // console.log(divRef.current)
    
      useEffect(() => {
        const handleOutsideClick = (e: MouseEvent) => {
            if (divRef.current && !divRef.current.contains(e.target as Node)) {
              setColor(false); // Reset color when clicking outside the div
            }
          };
      
          document.addEventListener("click", handleOutsideClick); // Add event listener to the document
          return () => document.removeEventListener("click", handleOutsideClick); // Cleanup listener when the component is unmounted
        
      }, []);
  return (
    <div className="hidden md:inline-block pl-3 w-full lg:w-[680px]">
    <div ref={divRef} onClick={borderChange} className={` ${color ? 'border-[#4f46e5] border-[3px]' : 'hover:border-[#9d9b9b] border-[#d6d6d7]' }   flex h-[40px]   pr-1  rounded-md border-[1.4px]   `}>
    <button>
           <svg className="group custom-hover  w-[35px] md:w-[40px]  px-2 rounded-t-md rounded-b-md   h-full " xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" role="img" aria-labelledby="aht2th0dyrs936pney7w2uvwr3cqvg4g" aria-hidden="true" ><title id="aht2th0dyrs936pney7w2uvwr3cqvg4g">Search</title>
        <path   className="fill-current group-hover:text-[#3b4edf]" d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0111 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 01-1.969 5.617zm-2.006-.742A6.977 6.977 0 0018 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 004.875-1.975l.15-.15z"></path>
           </svg>
   </button>
       <input type="text" className="w-[90%] border-transparent pr-2  focus:outline-none text-black placeholder:text-[14px] placeholder:md:text-[16px]  placeholder:text-[#717171] " placeholder="Search..." />

       <Link  className="hidden md:inline-block"  href='/'>
       <div className="flex justify-end md:justify-start items-center w-[135px] md:pr-1 md:w-[150px] h-full cursor-pointer hover:underline  text-[#717171] text-[13px] md:text-[14px]">
      <span className='font-sans'>Powered by</span> 
      <span className=" ml-[6px] flex items-center ">
       <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" width="16" height="16" viewBox="0 0 500 500.34" role="img" aria-labelledby="ai33jox5rhet1a23yfrc1dcqgbd8d8h7" aria-hidden="true" className=" crayons-icon text-[#717171]"><title id="ai33jox5rhet1a23yfrc1dcqgbd8d8h7">Search</title>
       <defs></defs><path className="cls-1" d="M250,0C113.38,0,2,110.16,.03,246.32c-2,138.29,110.19,252.87,248.49,253.67,42.71,.25,83.85-10.2,120.38-30.05,3.56-1.93,4.11-6.83,1.08-9.52l-23.39-20.74c-4.75-4.22-11.52-5.41-17.37-2.92-25.5,10.85-53.21,16.39-81.76,16.04-111.75-1.37-202.04-94.35-200.26-206.1,1.76-110.33,92.06-199.55,202.8-199.55h202.83V407.68l-115.08-102.25c-3.72-3.31-9.43-2.66-12.43,1.31-18.47,24.46-48.56,39.67-81.98,37.36-46.36-3.2-83.92-40.52-87.4-86.86-4.15-55.28,39.65-101.58,94.07-101.58,49.21,0,89.74,37.88,93.97,86.01,.38,4.28,2.31,8.28,5.53,11.13l29.97,26.57c3.4,3.01,8.8,1.17,9.63-3.3,2.16-11.55,2.92-23.6,2.07-35.95-4.83-70.39-61.84-127.01-132.26-131.35-80.73-4.98-148.23,58.18-150.37,137.35-2.09,77.15,61.12,143.66,138.28,145.36,32.21,.71,62.07-9.42,86.2-26.97l150.36,133.29c6.45,5.71,16.62,1.14,16.62-7.48V9.49C500,4.25,495.75,0,490.51,0H250Z"></path>
       </svg>
       </span> 
       <span className='ml-[6px] font-sans'>Algolia</span>
       </div>
       </Link>
   </div>
   </div>
 
  )
}

export default memo(InputField);