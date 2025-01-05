import { client  } from '@/sanity/lib/client';
import { NextResponse } from 'next/server';
//! req.body
//! Contains the data sent by the client in the body of the HTTP request.
//! Typically used in POST, PUT, and PATCH requests.

export async function POST(req : Request ){
    const data = await req.json();
   const {name , email ,comment , blogId} = data

   if(!name || !email || !comment || !blogId){
    return NextResponse.json({
          message: 'All fields are required!'
      }, { status: 400 });
    }else{

    try{

        const newComment = await client.create({
            _type:'comment',  //? This refers to the schema we defined in comment.ts with name:'comment' When you send data using the client.create() method, the whole data you provide in that method will be saved into the schema you have defined with the name: 'comment'. bcz here is the type comment
            name,
            email,
            comment,
            blog:{
            _type:'blog',  //** */ This refers to the schema we defined in blog.ts with name:'blog'
            _ref:blogId  //! in Sanity refers to a reference field where the value of _ref is set to the unique _id of another document now the _ref of each blog will be equal to the id of each blog _ref = _id for blog post
            } 
        })

        return NextResponse.json({message: 'Comment created successfully' , Comment: newComment})
    
        }catch(err){
                throw err
        }

    }
    
    // now as we get the data from the server we create a scheme based on the data we get


}





//? NextResponse.json() sends the JSON response back to the client (browser, API client, etc.) that made the request.
//? This is done as part of the HTTP response to the original HTTP request.

//? Example Workflow:
// ?Client (Browser) sends a POST request to the /api/comment route with form data.
//? Next.js Server receives the request, processes it, and returns a JSON response using NextResponse.json().
//? Client (Browser) receives the JSON response from the server and processes it (e.g., shows a success message).


//? The reason you send data back to the client after receiving it on the server is to acknowledge the request,
//  provide feedback, and inform the client about the outcome of their action (e.g., if the comment was successfully received, saved, 
// ?  or processed).