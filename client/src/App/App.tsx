import { useEffect, useReducer } from 'react'
import { useQuery } from '@apollo/client'
import { ZIP_CODES_QUERY } from '../lib/gql/queries/zip-codes'
import { actionType, initialState, reducer } from './appState'
import { CountrySelect, CurrentZip, History, ZipTextField } from './components'
import { ZipCodeQueryResponse } from '../lib/types'
import './App.css'

function App() {
   const [state, dispatch] = useReducer(reducer, initialState)
   const { zipCode, countryCode, history } = state
   const { loading, data } = useQuery<ZipCodeQueryResponse>(ZIP_CODES_QUERY, {
      variables: { zipCode, countryCode },
   })

   useEffect(() => {
      if (data?.zipCode)
         dispatch({ type: actionType.addToHistory, payload: data.zipCode })
   }, [data])

   return (
      <div className='App'>
         <h4>Within3</h4>
         <CountrySelect countryCode={countryCode} dispatch={dispatch} />
         <ZipTextField zipCode={zipCode} dispatch={dispatch} />
         <CurrentZip
            zipCode={data?.zipCode}
            hasInput={zipCode!!}
            loading={loading}
         />
         <History history={history} dispatch={dispatch} />
      </div>
   )
}

export default App
