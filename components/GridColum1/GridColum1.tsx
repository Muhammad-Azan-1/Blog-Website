

import React from 'react'
import { iconsData , iconsData2, iconsData3 } from '@/Data/Data'
import Link from 'next/link'
import { useState } from 'react'


const GridColum1 = () => {
  const [toggle, setToggle] = useState(false)

  function toggleMenu(){
    setToggle((prev)=> {
      const toggle = !prev
      if(toggle){
        document.body.style.overflow = 'hidden'
      }else{
        document.body.style.overflow = 'auto'
      }
     return toggle
    })
    
   
    
  }


  //! md:overflow-visible: This removes the scroll and keeps the content fully visible without a scrollbar.
  return (
   <>


         {/* //? Bars Icon */}
         <div onClick={toggleMenu}  className="fixed  left-4 top-4 z-40  inline-block md:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" color='' width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="at2sypsjisnmxt7v1qgqqdrz89mkyi8q" className="crayons-icon "><title id="at2sypsjisnmxt7v1qgqqdrz89mkyi8q">Navigation menu</title>
        <path d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z" fill='currentColor'></path>
        </svg>
        </div>
        

    <div className={`col-span-1 pl-2 md:pl-6 l2:pl-5 l:pl-3 pr-2  lg:pl-0 fixed z-40 md:z-0 top-0 ${toggle ? 'left-0' : ' left-[-300px]'}    md:relative md:left-0  w-[300px] md:w-auto bg-white md:bg-transparent  h-screen overflow-y-auto md:overflow-visible md:inline-block `}> 



       {/* //* avaible for small screens only */}

      <div className='inline-block md:hidden pt-[18px] pb-6 text-[18px] px-3 pl-3'>
          <h1 className=' text-black font-bold'>DEV Community</h1>

          {/* //? cross icon */}
          <div onClick={toggleMenu} className='top-4   p-1 cursor-pointer left-[260px] absolute md:hidden'>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="ah0dvpoapa96673udr7la4kckb78evj3" aria-hidden="true" className="crayons-icon c-btn__icon"><title id="ah0dvpoapa96673udr7la4kckb78evj3">Close</title>
        <path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636l4.95 4.95z"></path></svg>
        </div>
        </div> 

   {/*//* avaible for small screens only */}


    <div  className="flex flex-col  w-full gap-y-1   ">
     {
     iconsData.map((items1)=>(
     
        <div key={items1.id} className='text-secondary p-2  border-[1px] border-transparent rounded-md hover:underline  custom-hover cursor-pointer flex justify-start gap-x-2 '>
          {items1.icon}
         <h1 >{items1.text}</h1>
        </div>

       
      ))}
      <div className="w-full ">
        <h1 className="text-primary font-bold text-[16px] py-3  pl-1">Other</h1>
        <div  className="flex flex-col pt-2  w-full gap-y-1">
        {
          iconsData2.map((items)=>(
     
            <div key={items.id} className='text-secondary p-2   border-[1px] border-transparent rounded-md custom-hover hover:underline   cursor-pointer flex justify-start gap-x-4'>
              {items.icon}
             <h1>{items.text}</h1>
            </div>
        ))}
        </div>
        </div>
      </div>
   
          <div className='flex w-full pt-8  justify-start gap-x-[15px] gap-y-4 flex-wrap  '>
            {iconsData3.map((items)=>(
                <div key={items.id} className='icon-container cursor-pointer custom-hover p-2 rounded-md'>
            <Link href={`/`} >
            
              {items.icon}
              </Link>
              </div>
          
            ))}
          </div>
     
      </div>

            <div className={`inline-block  fixed top-0  ${toggle? 'bg-black w-full h-screen opacity-40' : 'opacity-0'} md:hidden`}>

            </div>
      
   </>
  )
}

export default GridColum1