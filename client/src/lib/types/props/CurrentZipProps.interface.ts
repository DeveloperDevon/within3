import { ZipCode } from '../ZipCode.interface'

export interface CurrentZipProps {
   zipCode: ZipCode | undefined
   hasInput: boolean
   loading: boolean
}
