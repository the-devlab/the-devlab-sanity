import { defineField, defineType } from 'sanity'

const languageNames: Record<string, string> = {
  en: 'English',
  bg: 'Bulgarian',
}

export const main = defineType({
  name: 'main',
  title: 'main',
  type: 'document',
  preview: {
    select: {
      language: 'language',
    },
    prepare({ language }) {
      return {
        title: languageNames[language] || language,
      }
    },
  },
  fields: [
    defineField({
      name: 'language',
      title: 'Language',
      type: 'string',
      readOnly: true,
      hidden: true,
    }),
    defineField({
      name: 'seoTitle',
      title: 'SEO Title',
      type: 'string',
    }),
    defineField({
      name: 'seoDescription',
      title: 'SEO Description',
      type: 'text',
    }),
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
      name: 'heroButton',
      title: 'Hero Button',
      type: 'object',
      fields: [
        defineField({
          name: 'label',
          title: 'Label',
          type: 'string',
        }),
        defineField({
          name: 'link',
          title: 'Link',
          type: 'string',
        }),
        defineField({
          name: 'icon',
          title: 'Icon',
          type: 'string',
        }),
      ],
    }),
    defineField({
      name: 'aboutHeading',
      title: 'About Heading',
      type: 'string',
    }),
    defineField({
      name: 'aboutContext',
      title: 'About Context',
      type: 'text',
    }),
    defineField({
      name: 'aboutHighlights',
      title: 'About Highlights',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
            }),
            defineField({
              name: 'body',
              title: 'Body',
              type: 'text',
            }),
            defineField({
              name: 'icon',
              title: 'Icon',
              type: 'string',
            }),
          ],
        },
      ],
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
      name: 'stack',
      title: 'Stack',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
            }),
            defineField({
              name: 'tags',
              title: 'Tags',
              type: 'array',
              of: [{ type: 'string' }],
              options: {
                layout: 'tags',
              },
            }),
            defineField({
              name: 'icon',
              title: 'Icon',
              type: 'string',
            }),
          ],
        },
      ],
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
              to: [{ type: 'avatar' }],
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
    defineField({
      name: 'contactContext',
      title: 'Contact Context',
      type: 'text',
    }),
    defineField({
      name: 'contactEmail',
      title: 'Contact Email',
      type: 'string',
      validation: (Rule) => Rule.email(),
    }),
    defineField({
      name: 'contactLocation',
      title: 'Contact Location',
      type: 'text',
    }),
  ],
})
