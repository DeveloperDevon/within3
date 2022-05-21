import { FC } from 'react'
import { TextField } from '@mui/material'
import { ZipTextFieldProps } from '../../lib/types'
import { actionType } from '../appState'

export const ZipTextField: FC<ZipTextFieldProps> = ({ zipCode, dispatch }) => {
   const handleChange = (e: any) =>
      dispatch({ type: actionType.setZip, payload: e.target.value })

   return (
      <TextField
         placeholder='Enter Zip Code'
         style={{ margin: '10px 0px' }}
         value={zipCode}
         onChange={handleChange}
         inputProps={{
            style: {
               color: 'white',
               fontSize: '24px',
               textAlign: 'center',
            },
         }}
      />
   )
}
