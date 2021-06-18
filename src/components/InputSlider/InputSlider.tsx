import React, { ReactNode } from 'react';
import { Slider, Box, Divider } from '@material-ui/core';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => 
  createStyles({
    container: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      [theme.breakpoints.down('xs')]: {
        flexDirection: 'column',
        alignItems: 'stretch',
        padding: '20px 0'
      }
    },
    slider: {
      display: 'flex',
      flexGrow: 1,
      margin: '0 20px',
      padding: '20px 0',
      [theme.breakpoints.down('xs')]: {
        margin: 0,
        paddingTop: 0
      }
    }
  })
)

interface Props {
  value: number,
  handleChange: (e: any, value: number | number[]) => void,
  children?: ReactNode,
  marks?: { value: number, label: string }[],
  rate?: number,
  label: ReactNode,
  valueDisplay: 'on' | 'off',
  sliderOptions: { min: number, max: number, 'aria-labelledby': string }
}

function InputSlider({ 
  value, handleChange, marks, rate, label, sliderOptions, valueDisplay, children=null 
}: Props) {

  const styles = useStyles();
  
  const valueLabelFormat = () => rate;

  return (
    <>
      <Box
        className={styles.container}
      >
        {label}
          <div className={styles.slider}>
            <Slider 
              value={value} 
              onChange={handleChange}
              aria-labelledby={sliderOptions['aria-labelledby']}
              min={sliderOptions.min}
              max={sliderOptions.max}
              marks={marks}
              valueLabelDisplay={valueDisplay}
              valueLabelFormat={valueLabelFormat}
            />
          </div>
          {children}
      </Box>
      <Box display={{ xs: 'block', sm: 'none' }}>
        <Divider />
      </Box>
    </>
  )
}

export default InputSlider
