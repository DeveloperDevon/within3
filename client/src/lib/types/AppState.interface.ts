import { CountryCode } from './common'
import { ZipCode } from './ZipCode.interface'

export interface AppState {
   zipCode: string
   countryCode: CountryCode
   history: ZipCode[]
}
