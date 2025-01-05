'use client'
import React, { useEffect } from 'react'
import Image from 'next/image'
import Header from '@/components/Header/Header'
import GridColum1 from '@/components/GridColum1/GridColum1'
import GridColum3 from '@/components/GridColum3/GridColum3'
import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'
import  {format} from 'date-fns'
import { PortableText } from "@portabletext/react";
import { useState } from 'react'
import { useParams } from 'next/navigation';
import { Component } from '@/components/CustomComponent'
import Loader from '@/components/Loader/Loader'
import Comment from '@/components/Comment/Comment'
import AddAllComment from '@/components/AddAllComment/AddAllComment'


type CommentProps = {
  name: string
  comment:string,
  _createdAt:string,
  _id:string

}
type Props = CommentProps; 

type data ={
  title: string;
  image: { asset: { url: string } },
  slug: string,
  _id:string,
  designation:string,
  author: {
    name: string;
    image: { asset: { url: string } };
    bio: string;
  }
  initialValue:string;
  content:{
    _type: 'block'; // Block content type
    style: 'normal' | 'h1' | 'h2' | 'h3' | 'h4' | 'margin'; // Possible styles
    children: { _type: 'span'; text: string }[]; // Text elements within a block
    
  }[],
  comment:Props[]
}


const Page = () => {
  
  const params = useParams()
  
  // console.log('param', params.slug) // {val: 'blog-title'}

  const [data  , setdata] = useState<data[]>([])
  const [loading , setloading] = useState(true)

  useEffect(()=>{
  
   async function fecthingData(){
  
      try{
        const query = `
      *[_type == "blog" && slug.current == '${params.slug}'] {
       title,
       image,
       _id,
       content,
       "slug": slug.current,
       author->{name, bio, image},
       initialValue,
      "comment" : *[_type == "comment" && blog._ref == ^._id] | order(_createdAt desc){
        name,comment,_createdAt,_id
    }
      }
        `
        const response : data[] = await client.fetch(query)
        console.log(response)
        setdata(response)
        setloading(false)
        
      }catch(error){
       throw error
      }
    
    }

   
    fecthingData()
    

  },[params.slug , data])
  
if(loading){
return(
  <Loader/>
)  

  }

else{

  return (
    <>
      
           
       
{
   data.map((item)=>( 
        <div key={item.slug}>
        <Header/>
        <div className=' md:hidden'>
            <GridColum1/>
          </div>
          
         
        <div   className='grid pt-[73px] justify-center w-full  h-screen gap-x-0 lg:gap-x-2 xl:gap-x-3 px-0 lg:px-2 xl:px-0 grid-cols-[100%] lg:grid-cols-[70%_30%] xl:grid-cols-[900px_370px]'>
     
  {/* //* colum1 */}
        <div className='w-full h-auto '>

          <div className='border-[1.4px] bg-white rounded-md w-full h-auto'>
          <div>
           <Image src={urlFor(item.image).url()} alt='blog image' width={900} height={900} className='w-full rounded-t-md h-auto'></Image>
          </div>

          {/*//* Author */}

          <div className='w-full px-3 sm:px-5 lg:px-16 pt-5 lg:pt-8 h-auto gap-y-3  flex flex-col'>

        <div className="flex  justify-start items-center ">
          <div>
          <Image src={urlFor(item.author.image).url()} alt="User-Image" width={50} height={50} className="w-[45px] h-[45px]  border-[1px] border-secondary rounded-[100%]"></Image> 
          </div>
          <div className="flex flex-col pl-1">
          <h1 className="text-[#3d3d3d] hover:text-primary font-[800] tracking-wider leading-[4px] rounded-md border-box  hover:bg-[#00000009] px-1 py-[10px] text-[14px]">{item.author.name}</h1>
          <span className="text-[12px] m-0 text-[#525252]  pl-1">Posted {format(new Date(item.initialValue), "MMM dd yyyy")} </span>
          </div>
        </div>

        <div>
        <h1 className=" max3:text-[18px] max2:text-[20px] max:text-[22px] text-[30px]  lg:text-[48px]  font-[800] text-primary pt-2   hover:text-[#3b4edf] ">{item.title}</h1>
        </div>
        </div>

            {/* //* blog content */}
        <div className='w-full font-[700] px-3 sm:px-5 lg:px-16 pt-1 sm:pt-[28px] pb-6
        prose-p:text-[16px]  prose-p:sm:text-[20px] prose-p:font-[400] prose-p:py-1 prose-ul:text-[16px] prose-li:pt-3 prose-ul:sm:text-[18px]
        prose-ul:font-[500] prose-ul:list-disc prose-ul:pl-[20px] prose-ul:py-2 prose-strong:font-[600]
        prose-strong:text-[18px] prose-strong:sm:text-[20px]
        '>
        <PortableText value={item.content} components={Component} />
       </div>

        <div className='w-full flex justify-center mt-10'>
        <div className='w-[60%] border-t-[1px] border-[#9d9b9b]'>
          </div>
        </div>

       <Comment blogId={item._id}/>
       <AddAllComment comments={item.comment || []}/>
        </div>

       

    </div>


    {/* //* colum2 */}
    <div className='h-auto w-full hidden lg:inline-block'>

      <div className='rounded-md w-full  border-[1.4px]'>
      <div className='bg-black rounded-t-md w-full h-[38px]'> </div>

      <div className='bg-white rounded-b-md w-full h-auto relative pt-10 px-4 pb-[16px]'>
      <Image src={urlFor(item.author.image).url()} alt="User-Image" width={70} height={70} className="w-[50px] h-[50px] absolute top-[-18px] rounded-[100%]"></Image> 
      <h1 className="text-[#404040] font-[700] tracking-wider absolute top-[7px] left-[75px]">{item.author.name}</h1>
      <button className=' font-[600] bg-[#3b4edf] mt-2  rounded-md w-full border-[1px] border-[#3b4edf] text-[white] p-2'>Follow</button>
      <p className='mt-4'>
      <span className='font-[500] text-[#404040] leading-3 font-sans tracking-wider'>{item.designation}</span> {item.author.bio}
      </p>

      <div className='mt-6 font-[600]'>
      <p className='text-[#404040] text-[14px]'>JOINED</p>
      <p className='mt-[2px]'>{format(new Date(item.initialValue), "MMM dd yyyy")}</p>
      </div>
       </div>

       
       </div>


       <div className='mt-4'>
       <GridColum3/>
       </div>


      
    </div>

   

      </div>
   
      </div>
       ))}
    
    </>
  )
}
}

export default Page