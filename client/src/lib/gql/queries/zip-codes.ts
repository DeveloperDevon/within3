import { gql } from '@apollo/client'

export const ZIP_CODES_QUERY = gql`
   query ZipCodesQuery($countryCode: String, $zipCode: String) {
      zipCode(countryCode: $countryCode, zipCode: $zipCode) {
         zipCode
         city
         state
      }
   }
`
