import {
   Button,
   Paper,
   Table,
   TableBody,
   TableCell,
   TableContainer,
   TableHead,
   TableRow,
} from '@mui/material'
import { FC } from 'react'
import { COLUMNS } from '../../lib/constants'
import { HistoryProps } from '../../lib/types'
import { actionType } from '../appState'

export const History: FC<HistoryProps> = ({ history, dispatch }) => {
   const handleClear = () => dispatch({ type: actionType.clearHistory })

   if (!history.length) return <></>
   return (
      <TableContainer
         component={Paper}
         style={{ maxWidth: 690, marginTop: 30 }}
      >
         <h4>History</h4>
         <Table>
            <TableHead>
               <TableRow>
                  {COLUMNS.map((col, i) => (
                     <TableCell key={i} align={col.align}>
                        {col.label}
                     </TableCell>
                  ))}
               </TableRow>
            </TableHead>
            <TableBody>
               {history
                  .slice(-5)
                  .reverse()
                  .map((zip, i) => (
                     <TableRow key={i}>
                        <TableCell>{zip.zipCode}</TableCell>
                        <TableCell align='center'>{zip.city}</TableCell>
                        <TableCell align='right'>{zip.state}</TableCell>
                     </TableRow>
                  ))}
            </TableBody>
         </Table>

         <Button
            style={{ margin: '20px 0px', minWidth: 200 }}
            variant='contained'
            onClick={handleClear}
         >
            Clear
         </Button>
      </TableContainer>
   )
}
