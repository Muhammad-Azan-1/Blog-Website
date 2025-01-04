import { defineType , defineField, defineArrayMember } from "sanity";

export let author = defineType({
    name:"author",
    title:"Author",
    type:'document',
    fields:[
        defineField({
            name:'name',
            title:'Name',
            type:'string'
        }),

        defineField({
            name:'bio',
            title:'Bio',
            description:'tell us about your self',
            type:'text',
        }),

        defineField({
            name:'image',
            title:'Image',
            type:'image',
            options:{
                hotspot:true
            }
        }),

       
    ]
})