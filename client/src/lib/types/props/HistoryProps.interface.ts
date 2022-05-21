import { Dispatch } from 'react'
import { Action } from '../common'
import { ZipCode } from '../ZipCode.interface'

export interface HistoryProps {
   history: ZipCode[]
   dispatch: Dispatch<Action>
}
