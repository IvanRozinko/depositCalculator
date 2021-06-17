import React from 'react'
import { Box, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    width: 140,
    paddingBottom: 10
  }
})

interface SliderLabelType {
  label: string
};

function SliderLabel({ label }: SliderLabelType) {
  const styles = useStyles();
  return (
    <Box className={styles.root}>
      <Typography component='span'>
        {label}
      </Typography>
    </Box>
  )
}

export default SliderLabel
