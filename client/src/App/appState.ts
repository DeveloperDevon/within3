import { Action, AppState } from '../lib/types'

export const initialState: AppState = {
   zipCode: '',
   countryCode: 'US',
   history: [],
}

export enum actionType {
   setZip,
   setCountryCode,
   addToHistory,
   clearHistory,
}

export const reducer = (state: AppState, action: Action) => {
   if (action.type === actionType.setZip)
      return { ...state, zipCode: action.payload }
   if (action.type === actionType.setCountryCode)
      return { ...state, countryCode: action.payload }
   if (action.type === actionType.addToHistory)
      return { ...state, history: [...state.history, action.payload] }
   if (action.type === actionType.clearHistory)
      return { ...state, zipCode: '', history: [] }
   return state
}
