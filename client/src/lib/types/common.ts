import { actionType } from '../../App/appState'

export type CountryCode = 'AR' | 'US'
export type CountryName = 'Argentina' | 'United States'

export interface Country {
   code: CountryCode
   name: CountryName
}

export interface Column {
   label: string
   align: 'left' | 'center' | 'right'
}

export interface Action {
   type: actionType
   payload?: any
}
