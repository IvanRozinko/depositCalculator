import React from 'react'
import { Box, Typography, makeStyles } from '@material-ui/core';

interface Props {
  label: string,
  value: string,
  valueBold?: boolean,
  children?: React.ReactNode,
  centered?: boolean
}

function InfoRow({ label, value, valueBold, children, centered }: Props) {
  const useStyle = makeStyles({
    label: {
      display: 'flex',
      flex: '1',
      alignItems: 'center',
      fontWeight: valueBold ? 600 : 400,
      justifyContent: centered ? 'center' : 'start'
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
