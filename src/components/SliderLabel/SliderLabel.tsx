import React from 'react'
import { Box, Typography } from '@material-ui/core';
import { Theme, makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => 
  createStyles({
    root: {
      width: 140,
      paddingBottom: 10,
      [theme.breakpoints.down('xs')]: {
        paddingBottom: 30,
        width: 'auto'
      }
    }
  })
);

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
