import { makeSchema } from 'nexus'
import { join } from 'path'

export * from './ZipCode'

const schema = (types: any) =>
   makeSchema({
      types,
      outputs: {
         schema: join(process.cwd(), '../../schema.graphql'),
         typegen: join(process.cwd(), '../../nexus-typegen.ts'),
      },
   })

export default schema
