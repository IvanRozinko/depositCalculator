import React from 'react'
import { 
 Typography, Checkbox, FormControlLabel, Box
} from '@material-ui/core'; 
import { Theme, makeStyles, createStyles } from '@material-ui/core/styles';
import InputSlider from '../InputSlider/InputSlider';
import RateText from '../RateText/RateText';
import SliderLabel from '../SliderLabel/SliderLabel';
import TextInput from '../TextInput/TextInput';
import PercentDestination from '../PercentDestination/PercentDestination';
import { useDepositContext } from '../../context/DepositInputs';
import InfoIcon from '@material-ui/icons/InfoOutlined';

import { duration, rates, longation } from '../../mocks/depositRanks';
import { stripNoneNumbers } from '../../helpers/helpers';
import { MAX_DEPOSIT_SUM, MAX_LONGATIONS } from '../../config/constants';

const useStyles = makeStyles((theme: Theme) => 
  createStyles({
    container: {
      flexGrow: 1,
      height: '100%',
      paddingRight: 20,
      [theme.breakpoints.down('sm')]: {
        paddingRight: 0
      }
    },
    marginLeft: {
      marginLeft: 10
    }
  })
);

function DepositInputs() {
  const styles = useStyles();
  const { deposit, setContextValue } = useDepositContext();

  const mergeContextValue = (field: string, value: number | boolean | string):void => {
    setContextValue({
      ...deposit,
      [field]: value,
    })
  }

  const handleRateChange = (e: React.ChangeEvent<HTMLInputElement>, value: number | number[]):void => {
    const duration = typeof value === 'number' ? value : value[0];
    setContextValue({
      ...deposit,
      duration,
      percent: getRateByDuration(duration)
    })
  }

  const handleSumChange = (e: React.ChangeEvent<HTMLInputElement>, value: number | number[]):void => {
    const sum = typeof value === 'number' ? value : value[0];
    mergeContextValue('sum', sum);
  }

  const normalizeSum = (sum: number) => {
    let normalized = sum;
    if (sum < 0 || isNaN(sum)) {
      normalized = 0;
    } else if ( sum > MAX_DEPOSIT_SUM) {
      normalized = MAX_DEPOSIT_SUM;
    }
    return normalized;
  }
  
  const handleMonthlyChange = (e: React.ChangeEvent, value: number | number[]):void => {
    const monthly = typeof value === 'number' ? value : value[0];
    mergeContextValue('monthly', monthly);
  } 
  
  const handleSumInputChange = (event: React.ChangeEvent<HTMLInputElement>):void => {
    const sum = stripNoneNumbers(event.target.value);
    mergeContextValue('sum', normalizeSum(parseInt(sum)));
  }

  const handleMonthlyInputChange = (event: React.ChangeEvent<HTMLInputElement>):void => {
    const monthly = stripNoneNumbers(event.target.value)
    mergeContextValue('monthly', normalizeSum(+monthly));
  }

  const handleCheckBox = (event: React.ChangeEvent<HTMLInputElement>):void => {
    mergeContextValue('withoutFirstMonth', event.target.checked)
  }

  const getRateByDuration = (duration: number):number => rates[`${duration}`] / 10;

  const handleLongationChange = (e: any, value: number | number[]):void => {
    const longation = typeof value === 'number' ? value : value[0];
    mergeContextValue('longation', longation);
  } 

  const handlePercentDestination = (newDestination: string):void => {
    mergeContextValue('percentDestination', newDestination)
  }

  return (
    <div className={styles.container}>
      <Typography variant='h6'>???????????????? ??????????????????</Typography>
      <InputSlider 
        value={deposit.duration}
        handleChange={handleRateChange}
        marks={duration}
        rate={deposit.percent}
        children={<RateText rate={`${deposit.percent} %`}/>}
        label={<SliderLabel label={`???????????? (???? ??????)/ ?????????? (??????.)`} />}
        valueDisplay="on"
        sliderOptions={{
          'aria-labelledby': "discrete-slider-custom",
          min: duration[0].value,
          max: duration[duration.length - 1].value
        }}
      />
      <InputSlider 
        value={deposit.sum}
        handleChange={handleSumChange}
        label={<SliderLabel label="????????" />}
        children={<TextInput sum={deposit.sum} handleInputChange={handleSumInputChange} />}
        valueDisplay="off"
        sliderOptions={{
          'aria-labelledby': "discrete-slider-custom",
          min: 0,
          max: MAX_DEPOSIT_SUM
        }}
      />
      <InputSlider 
        value={deposit.monthly}
        handleChange={handleMonthlyChange}
        label={<SliderLabel label="?????????????????? ????????????????????" />}
        children={<TextInput sum={deposit.monthly} handleInputChange={handleMonthlyInputChange} />}
        valueDisplay="off"
        sliderOptions={{
          'aria-labelledby': "discrete-slider-custom",
          min: 0,
          max: MAX_DEPOSIT_SUM
        }}
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={deposit.withoutFirstMonth}
            onChange={handleCheckBox}
            color="primary"
          />
        }
        label="?????? ???????????????????? ?? ???????????? ????????????"
      />
      <InputSlider 
        value={deposit.longation}
        marks={longation}
        handleChange={handleLongationChange}
        label={<SliderLabel label="?????????????????? ????????????????????" />}
        children={<RateText rate={`${deposit.longation}`}/>}
        valueDisplay="off"
        sliderOptions={{
          'aria-labelledby': "discrete-slider-custom",
          min: 0,
          max: MAX_LONGATIONS
        }}
      />
      <PercentDestination
        destination={deposit.percentDestination}
        handlePercentDestination={handlePercentDestination} 
      />
      <Box
        display='flex'
        flexDirection='row'
        alignItems='center'
        marginTop={2}
      >
        <InfoIcon
          color='primary'
        />
        <Typography
         className={styles.marginLeft}
        >
          ???????????????????? ?????????????????? ?????? ???????????????????? ????????????????
        </Typography>
      </Box>
    </div>
  )
}

export default DepositInputs
