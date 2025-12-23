import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { documentInternationalization } from '@sanity/document-internationalization'
import { schemaTypes } from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'the-devlab',

  projectId: 'o9tmumau',
  dataset: 'production',

  plugins: [
    structureTool(),
    visionTool(),
    documentInternationalization({
      supportedLanguages: [
        { id: 'en', title: 'English' },
        { id: 'bg', title: 'Bulgarian' },
      ],
      schemaTypes: ['main'],
    }),
  ],

  schema: {
    types: schemaTypes,
  },
})
