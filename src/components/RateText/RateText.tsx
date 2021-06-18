import React from 'react'
import { Typography } from '@material-ui/core';
import { Theme, makeStyles, createStyles } from '@material-ui/core/styles'; 

const useStyle = makeStyles((theme: Theme) => 
  createStyles({
    rate: {
      width: 100,
      fontSize: 20,
      fontWeight: 800,
      minWidth: '60px',
      marginBottom: 20,
      textAlign: 'center',
      alignSelf: 'center',
      [theme.breakpoints.down('xs')]: {
        marginBottom: 0
      }
    }
  })
);

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
