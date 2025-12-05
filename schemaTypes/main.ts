import {defineField, defineType} from 'sanity'

export const main = defineType({
  name: 'main',
  title: 'main',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'content',
      title: 'Main Context',
      type: 'text',
    }),
  ],
})
