import React from 'react'
import { Typography, Box, Button } from '@material-ui/core';
import { Theme, makeStyles, createStyles } from '@material-ui/core/styles';
import Cash from '@material-ui/icons/AttachMoneySharp';
import Card from '@material-ui/icons/CreditCardSharp';
import { DEPOSIT } from '../../config/constants';

const useStyle = makeStyles((theme: Theme) => 
  createStyles({
    label: {
      width: 140
    },
    buttonsContainer: {
      padding: '0 5%',
      marginRight: 100,
      [theme.breakpoints.down('md')]: {
        flexDirection: 'column'
      }
    },
    helperText: {
      fontSize: 10,
      textAlign: 'center'
    }
  })
);

interface Props {
  destination: string,
  handlePercentDestination: (newDestination: string) => void
}

function PercentDestination({ destination, handlePercentDestination }: Props) {
  const styles = useStyle();
  const isDeposit = destination === DEPOSIT;
  return (
    <Box
      display='flex'
      flexDirection='row'
      alignItems='center'
    >
      <Typography className={styles.label}>
        Проценти
      </Typography>
      <Box
        className={styles.buttonsContainer}
        display='flex'
        flexGrow={1}
        justifyContent='space-between'
      >
        <Box
          display='flex'
          flexDirection='column'
        >
          <Button 
            component='button'
            variant= 'outlined'
            color={isDeposit ? 'primary' : 'default'}
            onClick={() => handlePercentDestination(DEPOSIT)}
            startIcon={<Cash />}
          >
            До вкладу
          </Button>
          <Typography
            className={styles.helperText}
          >
            Збільшується ефективна дохідність
          </Typography>
        </Box>
        <Box
          display='flex'
          flexDirection='column'
        >
        <Button
          component='button'
          variant='outlined'
          color={!isDeposit ? 'primary' : 'default'}
          onClick={() => handlePercentDestination('card')}
          startIcon={<Card />}
        >
          На картку
        </Button>
        <Typography
          className={styles.helperText}
        >
          Проценти можливо відразу витрачати
        </Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default PercentDestination
