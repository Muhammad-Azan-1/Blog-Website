import { defineType , defineField, defineArrayMember } from "sanity";

export const comment = defineType({
    name: "comment",
    title:"Comment",
    type:'document',
    fields:[
        defineField({
            name:'name',
            title:"Name",
            type:'string',
             readOnly:true,
           
        }),
        defineField({
            name:'email',
            title:'Email',
            type:'string',
             readOnly:true,
           
        }),

        defineField({
            name:'comment',
            title:'Comment Content',
            type:'text',
             readOnly:true,
           
        }),

        defineField({
            name:'blog',
            title:'Blog',
            description:'To which Blog the comment concerned with!',
            type:'reference',
            to:[
                {type:'blog'}
            ]
        })
    ]
})