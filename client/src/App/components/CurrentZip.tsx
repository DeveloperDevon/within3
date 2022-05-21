import { FC } from 'react'
import { CurrentZipProps } from '../../lib/types'

export const CurrentZip: FC<CurrentZipProps> = ({
   zipCode,
   hasInput,
   loading,
}) => {
   if (!zipCode && hasInput && !loading) return <p>No Zip Code Found</p>
   if (!zipCode) return <></>
   const { zipCode: zip, city, state } = zipCode
   console.log({ zipCode, city, state })
   return (
      <>
         <div>Zip Code: {zip}</div>
         <div>City: {city}</div>
         <div>State: {state}</div>
      </>
   )
}
