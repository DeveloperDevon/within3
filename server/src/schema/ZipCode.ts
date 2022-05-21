import { extendType, objectType, stringArg } from 'nexus'
import { getZipCodes } from '../queries'

export const ZipCode = objectType({
   name: 'ZipCode',
   definition(t) {
      t.nonNull.string('zipCode')
      t.nonNull.string('city')
      t.nonNull.string('state')
   },
})

export const ZipCodeQuery = extendType({
   type: 'Query',
   definition(t) {
      t.field('zipCode', {
         type: 'ZipCode',
         args: {
            countryCode: stringArg({
               description: 'Country Code of Zip Code being queried',
               default: undefined,
            }),
            zipCode: stringArg({
               description: 'Zip Code being queried',
               default: undefined,
            }),
         },
         async resolve(_, { countryCode, zipCode }) {
            return await getZipCodes(countryCode, zipCode)
         },
      })
   },
})
