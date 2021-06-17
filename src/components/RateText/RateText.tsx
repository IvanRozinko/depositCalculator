import React from 'react'
import { makeStyles, Typography } from '@material-ui/core'; 

const useStyle = makeStyles({
  rate: {
    width: 100,
    fontSize: 20,
    fontWeight: 800,
    minWidth: '60px',
    marginBottom: 20,
    textAlign: 'center'
  }
});

interface RateTextProps {
  rate: string
}

function RateText({ rate }: RateTextProps) {
  const styles = useStyle();
  return (
    <Typography className={styles.rate}>
      {rate}
    </Typography>
  )
}

export default RateText
