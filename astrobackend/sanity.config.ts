import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import { markdownSchema } from "sanity-plugin-markdown";


export default defineConfig({
  name: 'default',
  title: 'astroBackEnd',

  projectId: '',// ADD Project Id Here
  dataset: 'production',

  plugins: [deskTool(), visionTool(),    markdownSchema(),],

  schema: {
    types: schemaTypes,
  },
  
})
