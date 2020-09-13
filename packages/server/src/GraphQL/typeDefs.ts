import { mergeTypeDefs, loadFilesSync } from 'graphql-tools'
import path from 'path'

const typeDefsArray = loadFilesSync(path.join(__dirname, '**', '*.schema.ts'))
const typeDefs = mergeTypeDefs(typeDefsArray)

export default typeDefs
