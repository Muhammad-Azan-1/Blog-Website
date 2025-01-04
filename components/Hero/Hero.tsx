import React from 'react'
import GridColum1 from '../GridColum1/GridColum1'
import GridColum2 from '../GridColum2/GridColum2'
import GridColum3 from '../GridColum3/GridColum3';
const Hero = () => {
  return (
    <div className="pt-[73px] md:px-12 0xl:px-10  w-full h-screen justify-center grid  lg:gap-x-3 2xl:px-[120px]  grid-cols-1 md:grid-cols-[250px_82%] lg:grid-cols-[240px_55%_25%]  2xl:grid-cols-[250px_720px_360px] ">


    {/* First Colum */}
      <GridColum1/>

        {/* Second Colum */}
        <GridColum2/>
      



      
        {/* Third Colum */}
        <GridColum3/>

      

      
    </div>
  )
}

export default Hero