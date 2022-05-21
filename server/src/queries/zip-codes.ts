import axios from 'axios'

export const getZipCodes = async (countryCode: string, zipCode: string) => {
   try {
      if (zipCode.length > 3) {
         const url = `http://api.zippopotam.us/${countryCode}/${zipCode}`
         const { data } = await axios.get(url)

         const zip: any = data.places[0]
         const response = {
            zipCode,
            city: zip['place name'],
            state: zip.state,
         }
         console.log({ url, response })
         return response
      }
   } catch (err: any) {
      console.error('Error at url: ', err.config.url)
   }
}
