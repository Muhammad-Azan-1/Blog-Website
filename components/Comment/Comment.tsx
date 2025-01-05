import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';

type FieldValues = {
  name: string;
  email: string;
  comment: string;
};
const Comment = ({blogId}:{blogId:string}) => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors  , isSubmitting},
      } = useForm<FieldValues>();
    
    const  submitData: SubmitHandler<FieldValues> = async (data) => {  // on submit the data inside the input field will be saved in an object of data
        const {name , email , comment } = data; // here we destructred that data object //! now we will send this data to the server
        
        const response = await fetch('/api/comment' ,{
          method: 'POST',
          headers: {
            'Content-Type': 'application/json', // Specify JSON content type
          },
          body: JSON.stringify({name , email , comment , blogId})  // data is sent to the body //!The body is a part of the HTTP request used to send data to the server.from client side it si used for communiaction between client side and server side.
          
        })
       const dataFetched  = await response.json();
       console.log(`{Data Send By Server : ${dataFetched}  Message:${dataFetched.message}}`);

       reset();
      }
  return (
    <>
    <div className='mt-14'> 
        <h1 className='text-primary pb-2 text-2xl font-[600] pl-4 sm:pl-6'>
            Leave a comment <span role='image' className=' text-[25px] pl-2'>   🗨️</span>
        </h1>
     <form className='flex flex-col   rounded-sm px-4 sm:px-6 pt-4 pb-6 mb-10'  onSubmit={handleSubmit(submitData)}>

      <label  className='mb-[2px]' htmlFor="">Name</label>
      {errors.name && <p className='text-red-600 text-xs mb-1'> name is required.</p>}
        <input type="text" {...register('name', { required:true })} className='rounded-md hover:border-[#9d9b9b] border-[#d6d6d7] bg-[#f5f5f5] border-[1px]  mb-6 px-3 py-2' />
    

        <label className='mb-[2px]' htmlFor="">Email<span className='text-[14px] '> (your email will not be visible)</span> </label>
        {errors.email && <p className='text-red-600 text-xs mb-1'>Please enter a valid email.</p>}
      <input type='email' {...register('email',{required:true})} className='rounded-md hover:border-[#9d9b9b] border-[#d6d6d7] bg-[#f5f5f5] border-[1px] mb-6 px-3 py-2' />
     

      <label  className='mb-[2px]' htmlFor="">Comment</label>
      {errors.comment && <p className='text-red-600 text-xs mb-1'> Minmum three characters.</p>}
        <textarea {...register('comment', { required:true , minLength:3 })} className='rounded-md hover:border-[#9d9b9b] border-[#d6d6d7] bg-[#f5f5f5] border-[1px] mb-6 px-2 py-2'></textarea>
     
      <input
       className={`font-[600] cursor-pointer mt-3 bg-[#3b4edf] text-white rounded-md w-full border-[1px] border-[#3b4edf]  p-2 ${isSubmitting ? 'opacity-50' : ''}`}
       disabled={isSubmitting}
       value={isSubmitting ? 'Submiting...' : 'Submit'}
        type="submit" />
    </form>
    </div>
    </>
  )
}

export default Comment


