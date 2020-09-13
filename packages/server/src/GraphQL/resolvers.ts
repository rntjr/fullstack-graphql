import { mergeResolvers, loadFilesSync } from 'graphql-tools'
import path from 'path'

const resolversArray = loadFilesSync(
  path.join(__dirname, '**', '*.resolvers.ts')
)
const resolvers = mergeResolvers(resolversArray)

export default resolvers
