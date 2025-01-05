import React from 'react'
import Image from 'next/image'
import { memo } from 'react'
// Using memo is a good choice to prevent unnecessary re-renders of GridColum3 when its props haven't changed.
const GridColum3 = () => {
  return (
    <>
        <div className='w-full  hidden lg:inline-block '>
            <div className='w-full h-auto rounded-md bg-white border-[1px]'>
            <h1 className='p-4 font-bold text-[20px] pb-2 border-b-[1px] text-primary'>Active discussions</h1>

            <div className='p-4  border-b-[1px] text-[16px] text-[#404040] '>  
               <p className=''> Happy new year! To more coding, playing the guitar, biking and motorcycle rides next year!</p>
               <p className='text-[13px] pt-1 text-[#525252]'>2 Comments</p>
            </div>

            <div className='p-4  border-b-[1px] text-[16px] text-[#404040] '>  
               <p className=' '> My 2024 Unwrap (of Course its not must read)</p>
               <p className='text-[13px] pt-1 text-[#525252]'>18 Comments</p>
            </div>



            <div className='p-4    text-[16px] text-[#404040] '>  
               <p className=' '> Happy new year! To more coding, playing the guitar, biking and motorcycle rides next year!</p>
               <p className='text-[13px] pt-1 text-[#525252] '>11 Comments</p>
            </div>
            </div>


            <div className='w-full h-auto p-4 mt-4 border-[1px] rounded-md bg-white'>
                <div className='p-1'>
                    <h1 className='text-[#525252] font-[400]  tracking-[0.2px] text-[14px]'>DEV Community</h1>
                </div>

                <div className='pt-[10px] p-1'>
                    <h1 className='text-[#404040] font-bold text-[25px]'>
                    Get Your Writing Debut Badge
                    </h1>

                    <p className='pt-4 text-[#404040] font-sans'>
                    Share your first DEV post and join a vibrant community of tech enthusiasts!
                    </p>

                    <div className='pt-[14px]'>
                        <Image src='/images/dev-c.jpg' alt='Image' width={400} height={100}  className=' w-full h-[300px] rounded-md'></Image>
                    </div>

                    <div className='pt-[14px]'>
                    <button className=' font-[600] hover:bg-[#3b4edf] hover:text-white rounded-md w-full border-[1px] border-[#3b4edf] text-[#3b4edf] p-2'>Write Your First Post</button>
                    </div>
                </div>
            </div>


            <div className='w-full h-auto  p-4 mt-4 border-[1px] rounded-md bg-white'>
            <div className='p-1'>
                    <h1 className='text-[#525252] font-[400]  tracking-[0.2px] text-[14px]'>DEV Community</h1>
                </div>

                <div className='pt-[10px] p-1'>
                    
                <h1 className='text-[#404040] font-bold text-[25px]'>
                    Check out DEV++
                    </h1>
                    
                    <p className='pt-3 text-[#404040] font-sans'>
                    Share your first DEV post and join a vibrant community of tech enthusiasts!
                    </p>


                    <div className='pt-[20px]'>
                    <button className=' font-[600] hover:bg-[#3b4edf] hover:text-white rounded-md w-full border-[1px] border-[#3b4edf] text-[#3b4edf] p-2'>Learn more</button>
                    </div>

                </div>
            </div>
        </div>
    </>
  )
}

export default memo(GridColum3);