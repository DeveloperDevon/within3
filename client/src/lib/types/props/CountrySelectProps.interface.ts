import { Dispatch } from 'react'
import { Action, CountryCode } from '../common'

export interface CountrySelectProps {
   countryCode: CountryCode
   dispatch: Dispatch<Action>
}
