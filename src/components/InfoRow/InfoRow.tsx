import React from 'react'
import { Box, Typography, makeStyles } from '@material-ui/core';

interface Props {
  label: string,
  value: string,
  valueBold?: boolean,
  children?: React.ReactChild
}

function InfoRow({ label, value, valueBold, children }: Props) {
  const useStyle = makeStyles({
    label: {
      display: 'flex',
      flex: '1',
      alignItems: 'center',
      fontWeight: valueBold ? 600 : 400
    }
   })
  const styles = useStyle(); 
  return (
    <Box
      display='flex'
      flexDirection='row'
    >
      <Typography
        className={styles.label}
      >
        {label}
        {children}
      </Typography>
      <Typography
        className={styles.label}
      >
        {value}
      </Typography>
    </Box>
  )
}

export default InfoRow
