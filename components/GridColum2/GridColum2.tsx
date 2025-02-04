import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { format } from 'date-fns'; // Import the necessary function



type blog = {
  title: string;
  image: { asset: { url: string } },
  slug: string,
  author: {
    name: string;
    image: { asset: { url: string } };
    bio: string;
  }
  initialValue:string;
}
const GridColum2 = () => {
  console.log("GridColum2 renders")
  const[data ,setData] = useState<blog[]>([])
  const [lenght, setLenght] = useState<number>();
  const [toggle, setToggle] = useState<boolean>(false);
  const divRef = useRef<HTMLTextAreaElement | null>(null); // use ref is connected with text area so text area elements is in inside the divRef

  function toggleColorDiv() {
    setToggle(true);

    //! it logs false initally becasue initally state  has false value
  }

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (divRef.current && !divRef.current.contains(e.target as Node)) {
        setToggle(false); // Reset color when clicking outside the div
      }
    };

    document.addEventListener("click", handleOutsideClick); // Add event listener to the document
    return () => document.removeEventListener("click", handleOutsideClick); // Cleanup listener when the component is unmounted
  }, []);

  function textAreaAutoHeight() {
    if (divRef.current && divRef.current.value !== "") {
      //? if the element insdie teh divRef.current exsist and if the value inside that element exisit then its height will be equal to what ever the scroll height

      divRef.current.style.height = `${divRef.current?.scrollHeight}px`;
      setLenght(divRef.current.value.length);
    } else {
      if (divRef.current && divRef.current.value === "") {
        divRef.current.style.height = "40px";
        setLenght(0);
      }
    }
  }

  // data fetching for bog post from sanity

  
  useEffect(() => {
    async function fetchData(){

      const storedData = localStorage.getItem("blogData");
      if(storedData){
        const getData = JSON.parse(storedData);
       setData(getData)

      }else{
        
     try{ const query = `*[_type == "blog"] | order(_createdAt asc){title , id , image , "slug": slug.current,author->{name, bio, image }, initialValue}`
      const response : blog[] = await client.fetch(query)
       
        localStorage.setItem("blogData", JSON.stringify(response));
       
        
      } catch(error){
        console.error(error)
  }   }
}
      
      fetchData()
  },[])
    

  if(!data){
    return(
          <>
          <div className="w-full h-screen bg-slate-300 flex justify-center items-center text-black">
            please wait data is laoding...
          </div>
        </>
    )
  }
    //!The scrollHeight property tells you the total height of the content inside an element, regardless of whether all of it is visible.

  return (
    <>
   
      <div  className="rounded-t-md  mt-6 md:mt-0  px-[3px] md:pr-2 lg:pr-0 flex flex-col ">
        <div className="w-full rounded-md p-2 bg-white border-[1.4px] min-h-[56px] h-auto">
          <div className="flex justify-center items-center">
            <textarea
              id="textarea"
              ref={divRef}
              onChange={textAreaAutoHeight}
              onClick={toggleColorDiv}
              className={` ${
                toggle
                  ? "border-[#4f46e5] border-[3px]"
                  : "hover:border-[#9d9b9b] border-[#d6d6d7]"
              } h-[40px] overflow-y-hidden  m-0 p-2 box-border w-full border-[1.4px]   focus:outline-none rounded-md resize-none placeholder:text-[#717171] `}
              maxLength={256}
              rows={1}
              placeholder="What's on your mind?"
              name=""
            ></textarea>
          </div>

          <div
            className={`pt-[8px] pl-[2px] ${
              toggle ? "flex" : "hidden"
            }  justify-between items-center`}
          >
            <div className="flex items-center px-1 gap-y-2  text-[10px] text-[#717171]">
            <p>
            <strong className="pr-1">Quickie Posts (beta)</strong><span>
            show up in
            the feed but not notifications or your profile —{" "}</span> 
              <span className="pl-[2.5px] text-[#3b4edf]">
                Open Full Editor
              </span>
            </p>
            </div>

            <div className="flex items-center pl-1">
              <div className="text-[14px] text-[#717171]">
                <span className="text-[#717171]">{lenght}</span>
                /256
              </div>

              <button className="ml-2 w-[63px] h-[32px]  text-white border-[1px] rounded-md border-[#3b4edf] hover:bg-[#2e3990] bg-[#3b4edf] ">
                Post
              </button>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-start pt-[6px]">
              <button className="w-[100px] font-bold text-[18px] h-[35px] hover:text-[#3b4edf] bg-white rounded-md text-primary">Discovre</button>
              <button className="ml-1 px-2 border-[1px] border-transparent w-[100px] rounded-md text-[18px] h-[35px] text-secondary hover:text-[#3b4edf] hover:bg-white">Following</button>
      </div>


  {/* //? blogs div  Starts from here*/}


  {data.map((items:blog)=>(
    
    <Link className="cursor-pointer" key={items.slug} href={`blogs/${items.slug}`}>
    <div className="w-full h-auto">

      {/* //*  blog boxses */}
      <div className="w-full mt-3  border-[1px] rounded-md bg-white  h-auto">
        <div className="">
        <Image src={urlFor(items.image).url()} alt="blog" width={600} height={100} priority className="rounded-t-md w-full h-auto object-fill"></Image>
        </div>
          <div  className="w-full h-auto pb-[10px] p-4 xm:p-[20px] gap-y-2 flex flex-col">
              <div className="flex  justify-start items-center ">
                <div>
                <Image src={urlFor(items.author.image).url()} alt="User-Image" width={50} height={50} priority className="w-[36px] h-[36px]  border-[1px] border-secondary rounded-[100%]"></Image> 
                </div>
                <div className="flex flex-col pl-1">
                <h1 className="text-[#3d3d3d] hover:text-primary font-[500] leading-[4px] rounded-md border-box  hover:bg-[#00000009] px-1 py-[10px] text-[14px]">{items.author.name}</h1>
                <span className="text-[12px] m-0 text-[#525252]  pl-1">{format(new Date(items.initialValue), "MMM dd yyyy")} </span>
                </div>
              </div>

              <div className=" md:pl-[32px] 1xl:pl-[40px] pt-1  ">
                <h1 className="text-primary max3:text-[16px] max2:text-[18px] max:text-[22px] text-[30px]  lg:text-[26px]  xl:text-[30px] font-extrabold hover:text-[#3b4edf] ">{items.title}</h1>
              </div>

              <div className=" md:pl-[22px] 1xl:pl-[30px] flex justify-between items-center pt-1">

                  <div className=" text-[#3D3D3D] hover:text-black text-[15px] cursor-pointer pl-[1px] p-2 md:p-2 hover:bg-[#00000009] rounded-md flex">
                  <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" className="crayons-ico"><path d="M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z" fill="currentColor"></path></svg>
                  <span className="pl-[6px]">{}</span>
                  <p className="pl-1 ">
                 Comments
                     </p>
                  </div>

                  <div className="p-2 text-[#3D3D3D] hover:text-black hover:underline text-[15px] cursor-pointer hover:bg-[#00000009] rounded-md">
                  <p>View blog</p>
                  </div>
                </div>
          </div>

          
               
      </div>
      
      </div>
      </Link>
        ))}
  

      </div>
      


     
    </>
  );
};

export default GridColum2;


// {formatDistanceToNow(new Date(items.initialValue), { addSuffix: true })}