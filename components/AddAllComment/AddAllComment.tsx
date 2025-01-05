
type CommentProps = {
    name: string;
    comment: string;
    _createdAt: string;
    _id: string;
  };
  
  type AddAllCommentProps = {
    comments: CommentProps[]; // Array of CommentProps
  };
  

const AddAllComment = ({comments}:AddAllCommentProps) => {
    console.log(comments)
  return (
    <>

<       div className='w-full flex justify-center mt-6'>
        <div className='w-[60%] border-t-[1px] border-[#9d9b9b]'>
          </div>
        </div>


        <div className="mt-10 flex flex-col items-center  px-4 sm:pl-6">
        <h1 className='text-primary pb-2 text-2xl font-[600] '>All Comments</h1>
        {comments.length === 0 ? <p className="mt-2 text-secondary font-[600] font-sans py-2">No comments yet</p> : '' } 

    {comments.map((item)=>(
        <div key={item._id} className={`border-b mt-6 pb-6 max2:w-full w-[380px] border-gray-200 py-2`}>

            <p>
                <strong>{item.name}</strong>
                <span className="pl-2 text-secondary text-sm text-grey-500">
                    {new Date(item._createdAt).toLocaleString()}
                </span>
            </p>

            <p className="mt-3 text-[16px] font-[500] text-primary ">{item.comment}</p>
        
        </div>
        ))
    }
        
        </div>
    </>
  )
}

export default AddAllComment