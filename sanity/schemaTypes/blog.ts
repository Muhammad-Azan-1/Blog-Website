import { defineType , defineField, defineArrayMember } from "sanity";

export const blog = defineType({
    name:'blog',
    title:'Blog_Posts',
    type:'document',
    fields:[
        defineField({
            name:'title',
            title:'Title',
            type:'string',
            validation:Rule => Rule.required().error('This field is required'),

        }),

        defineField({
            name:'slug',
            title:'Slug',
            type:'slug',
            validation:Rule => Rule.required().error('This field is required'),
            options:{
                source:'title',
            }
        }),

        defineField({
            name:'image',
            title:'Image',
            type:'image',
            validation:Rule => Rule.required().error('This field is required'),
            options:{
                hotspot:true,
            }
        }),

        defineField({
            name:'content',
            title:'Blog_Content',
            description:"Enter content for blog",
            validation:Rule => Rule.required().error('This field is required'),
            type:'array',
            of:[
                defineArrayMember({
                    type:'block',
                    styles: [
                        { title: 'Normal', value: 'normal' },
                        { title: 'Heading 1', value: 'h1' },
                        { title: 'Heading 2', value: 'h2' },
                        { title: 'Heading 3', value: 'h3' },
                        { title: 'Heading 4', value: 'h4' },
                        { title: 'With Margin', value: 'margin' },
                      ],
                    
                    
                }),
            ],
        }),

        defineField({
            name:'initialValue',
            type: "datetime",
            title: "Published At",
            readOnly:true,
           initialValue:(new Date()).toISOString()
               //** */ Automatically sets the date when the blog is created
        }),
       
        // **This ensures the date is set only once when the blog post is created.
        // **Even if the post is updated later, the original publishedAt value remains unchanged.

        defineField({
            name:'designation',
            title:'Designation',
            type:'string',
            validation:Rule => Rule.required().error('This field is required'),
        }),

        defineField({
            name:'author',
            title:'Author',
            type:'reference',
            to:[
                {type:'author'}
            ]
        })

       
    ]

})




// mport { useEffect, useState } from "react";
// import { formatDistanceToNow } from "date-fns"; // Import the necessary function

// type blog = {
//   title: string;
//   image: { asset: { url: string } };
//   slug: string;
//   author: {
//     name: string;
//     image: { asset: { url: string } };
//     bio: string;
//   };
//   publishedAt: string; // Ensure publishedAt is part of your data
// };

// const GridColum2 = () => {
//   const [data, setData] = useState<blog[]>([]);

//   // This will store the relative time for each post
//   const [timeUpdated, setTimeUpdated] = useState<Map<string, string>>(new Map());

//   useEffect(() => {
//     // Fetch the data when the component is mounted
//     async function fetchData() {
//       if (typeof window !== "undefined") {
//         try {
//           const query = `*[_type == "blog"] | order(publishedAt desc) {
//             title,
//             id,
//             image,
//             "slug": slug.current,
//             author->{name, bio, image},
//             publishedAt
//           }`;
//           const response: blog[] = await client.fetch(query);
//           console.log(response);
//           setData(response);
//         } catch (error) {
//           console.error(error);
//         }
//       }
//     }

//     fetchData();

//     // Set interval to update the relative time every minute (60000ms)
//     const interval = setInterval(() => {
//       setTimeUpdated((prev) => {
//         const updatedTimes = new Map(prev);
//         data.forEach((item) => {
//           updatedTimes.set(
//             item.slug,
//             formatDistanceToNow(new Date(item.publishedAt), { addSuffix: true })
//           );
//         });
//         return updatedTimes;
//       });
//     }, 60000);

//     // Clear the interval when the component is unmounted
//     return () => clearInterval(interval);
//   }, [data]); // Re-run this effect whenever data changes