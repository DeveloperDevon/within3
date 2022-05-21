import { Column, Country } from './types'

export const COUNTRIES: Country[] = [
   { code: 'AR', name: 'Argentina' },
   { code: 'US', name: 'United States' },
]

export const COLUMNS: Column[] = [
   { label: 'Zip Code', align: 'left' },
   { label: 'City', align: 'center' },
   { label: 'State', align: 'right' },
]
