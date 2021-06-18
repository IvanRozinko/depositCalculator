import React from 'react'
import { Typography, Box, Button } from '@material-ui/core';
import { Theme, makeStyles, createStyles } from '@material-ui/core/styles';
import Cash from '@material-ui/icons/AttachMoneySharp';
import Card from '@material-ui/icons/CreditCardSharp';
import { DEPOSIT } from '../../config/constants';

const useStyle = makeStyles((theme: Theme) => 
  createStyles({
    container: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      [theme.breakpoints.down('xs')]: {
        marginTop: 20,
        flexDirection: 'column'
      },
    },
    label: {
      width: 140,
      [theme.breakpoints.down('xs')]: {
        marginBottom: 20,
        alignSelf: 'start'
      }
    },
    buttonsContainer: {
      padding: '0 5%',
      marginRight: 100,
      [theme.breakpoints.down('md')]: {
        flexDirection: 'column'
      },
      [theme.breakpoints.down('xs')]: {
        marginRight: 0
      }
    },
    helperText: {
      fontSize: 10,
      textAlign: 'center',
      [theme.breakpoints.down('md')]: {
        marginBottom: 10
      }
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
    <Box className={styles.container}>
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
