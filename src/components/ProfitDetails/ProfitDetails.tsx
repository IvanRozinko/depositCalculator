import React, { useState } from 'react'
import { 
  Box, Collapse, Typography, makeStyles
} from '@material-ui/core';
import ArrowDropDownCircleIcon from '@material-ui/icons/ArrowDropDownCircleOutlined';
import InfoRow from '../InfoRow/InfoRow';

interface Props {
  pureProfit: string,
  purePercent: number
}

function ProfitDetails({ pureProfit, purePercent }: Props) {
  const [collapse, setCollapse] = useState(false);
  const [duration, setDuration] = useState('1ms')

  const useStyle = makeStyles({
    container: {
      marginBottom: 10
    },
    header: {
      '&:hover': {
        cursor: 'pointer'
      }
    },
    bold: {
      fontWeight: 600
    },
    "@keyframes rotate": {
      "0%": {
        transform: `rotateZ(${collapse ? '0' : '180deg'})`
      },
      "100%": {
        transform: `rotateZ(${collapse ? '180deg' : '360deg'})`
      }
    },
    arrow: {
      fontSize: 20,
      marginRight: 8,
      transform: `rotateZ(${collapse ? '180deg' : '0'})`,
      animation: `$rotate ${duration} ease-in-out`
    }
  })

  const styles = useStyle();

  const handleClick = () => {
    setDuration('300ms');
    setCollapse(!collapse);
  }

  return (
    <Box  className={styles.container}>
      <Box
        onClick={handleClick}
        display='flex'
        alignItems='center'
        className={styles.header}
      >
        <ArrowDropDownCircleIcon color='primary' className={styles.arrow} />
        <Typography className={styles.bold}>
          Після сплати податку
        </Typography>
      </Box>
      <Collapse in={collapse}>
        <InfoRow label='Проценти (дохід)' value={pureProfit} />
        <InfoRow label='Процентна ставка' value={`${purePercent} % на рік`} />
      </Collapse>
    </Box>  
  )
}

export default ProfitDetails
