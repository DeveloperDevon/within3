import { ApolloServer } from 'apollo-server'
import makeSchema, * as types from './schema'

const port = 3000 // TODO: move to env var

export const server = new ApolloServer({
   schema: makeSchema(types),
   csrfPrevention: true,
})

const init = async () => {
   try {
      const { url } = await server.listen({
         port,
      })

      console.log(`GQL Server started at ${url}`)
   } catch (err) {
      console.error(`Error starting GQL Server: ${err}`)
   }
}

init()
