export interface ZipCode {
   zipCode: string
   city: string
   state: string
}

export interface ZipCodeQueryResponse {
   __typename: string
   zipCode: ZipCode
}
