import {defineField, defineType} from 'sanity'

export const main = defineType({
  name: 'main',
  title: 'main',
  type: 'document',
  fields: [
    defineField({
      name: 'heroHeading',
      title: 'Hero Heading',
      type: 'string',
    }),
    defineField({
      name: 'heroContext',
      title: 'Hero Context',
      type: 'text',
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'journeyHeading',
      title: 'Journey Heading',
      type: 'string',
    }),
    defineField({
      name: 'journeyContext',
      title: 'Journey Context',
      type: 'text',
    }),
    defineField({
      name: 'toolkitHeading',
      title: 'Toolkit Heading',
      type: 'string',
    }),
    defineField({
      name: 'toolkitContext',
      title: 'Toolkit Context',
      type: 'text',
    }),
    defineField({
      name: 'testimonialsHeading',
      title: 'Testimonials Heading',
      type: 'string',
    }),
    defineField({
      name: 'testimonials',
      title: 'Testimonials',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'name',
              title: 'Name',
              type: 'string',
            }),
            defineField({
              name: 'quote',
              title: 'Quote',
              type: 'text',
            }),
            defineField({
              name: 'avatar',
              title: 'Avatar',
              type: 'reference',
              to: [{type: 'avatar'}],
            }),
          ],
        },
      ],
    }),
    defineField({
      name: 'contactHeading',
      title: 'Contact Heading',
      type: 'string',
    }),
  ],
})
