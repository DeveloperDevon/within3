import ReactDOM from 'react-dom/client'
import App from './App/App'
import { ApolloProvider } from '@apollo/client'
import { client } from './lib/gql'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
   <ApolloProvider client={client}>
      <App />
   </ApolloProvider>
)