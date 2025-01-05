import { PortableTextComponents } from '@portabletext/react';

export const Component:PortableTextComponents = {
 block:{
    h2 : ({children , index}) => {
        
        return(
    <h2 className={` ${index ===  20 || index === 6 || index === 13 || index === 29 ? 'mt-[50px] sm:mt-[70px]' : ''} max3:text-[18px] max2:text-[20px] max:text-[22px] text-[28px] md:text-[30px] font-[700] my-[10px]`}>{children}</h2>
        )
    },

    h3 : ({children}) =>{
        return(
            <h3 className='text-[20px] sm:text-[25px] mt-[20px] mb-[10px]'>{children}</h3>
        )
    },

    
    
 }
}