import { Dispatch } from 'react'
import { Action } from '../common'

export interface ZipTextFieldProps {
   zipCode: string
   dispatch: Dispatch<Action>
}
