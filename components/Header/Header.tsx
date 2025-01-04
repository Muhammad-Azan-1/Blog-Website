"use client"
import Image from "next/image";
import InputField from "../InputField/InputField";



const Header = () => {


  return (

    <>

   
    <div className="w-full h-[56px] z-10 flex justify-between items-center shadow-custom-border bg-[#fff]  pr-2 px-8 xl:px-[86px] fixed ">
    

        <div className="flex w-[730px]  justify-start items-center ">
        <div className="w-[70px] md:w-[52px] xl:w-[50px]">
          <Image
            src="/images/blog-logo.png"
            alt="logo"
            width={100}
            height={100}
            className="w-full  pl-5 md:pl-0 h-[40px]"
          ></Image>
        </div>

        {/*  //?input field */}
              <InputField/>
        </div>




      {/*//? box2 */}

        <div className="flex justify-end w-[300px] lg:w-[600px] pl-3 items-center">
        <button className="inline-block  h-[40px] sm:hidden">
                <svg className="group custom-hover  w-[40px] px-2 rounded-t-md rounded-b-md   h-full " xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" role="img" aria-labelledby="aht2th0dyrs936pney7w2uvwr3cqvg4g" aria-hidden="true" ><title id="aht2th0dyrs936pney7w2uvwr3cqvg4g">Search</title>
             <path   className="fill-current group-hover:text-[#3b4edf]" d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0111 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 01-1.969 5.617zm-2.006-.742A6.977 6.977 0 0018 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 004.875-1.975l.15-.15z"></path>
                </svg>
        </button>
            <button className="hidden sm:inline-block w-[85px] custom-hover hover:underline   mr-2 text-[15px] xl:text-[16px] text-[#404040] hover:text-[#3b4edf] rounded-md h-[40px] border-[1px] border-transparent">Log{" "}in</button>
            <button className="h-[40px] w-[120px] sm:w-[140px] font-[600] text-[14px] ml-2 sm:ml-0 xl:text-[16px] px-1 xl:px-1  hover:underline hover:text-white border-[1px] rounded-md border-[#3b4edf] hover:bg-[#3b4edf] text-[#3b4edf]">Create account</button>
           
        </div>
     
    </div>
    </>
  );
};

export default Header;

