import { type SchemaTypeDefinition } from 'sanity'
import { blog } from './blog'
import {author} from './author'
import {comment} from './comment'
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blog , author , comment],
}
