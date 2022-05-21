import { FC } from 'react'
import { MenuItem, Select, SelectChangeEvent } from '@mui/material'
import { COUNTRIES } from '../../lib/constants'
import { CountryCode, CountrySelectProps } from '../../lib/types'
import { actionType } from '../appState'

export const CountrySelect: FC<CountrySelectProps> = ({
   countryCode,
   dispatch,
}) => {
   const handleChange = (e: SelectChangeEvent<CountryCode>) =>
      dispatch({ type: actionType.setCountryCode, payload: e.target.value })

   return (
      <Select
         value={countryCode}
         onChange={handleChange}
         style={{ color: 'white', fontSize: '24px', padding: '0px 30px' }}
      >
         {COUNTRIES.map((c) => (
            <MenuItem key={c.code} value={c.code}>
               {c.name}
            </MenuItem>
         ))}
      </Select>
   )
}
