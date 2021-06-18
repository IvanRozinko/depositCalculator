import React from 'react'
import { Paper, Divider, Container } from '@material-ui/core'; 
import { Theme, makeStyles, createStyles } from '@material-ui/core/styles';
import DepositInputs from '../DeposinInputs/DepositInputs';
import DepositCharts from '../DepositCharts/DepositCharts';

const useStyles = makeStyles((theme: Theme) => 
  createStyles({
    paper: {
      display: 'flex',
      margin: '40px',
      padding: '40px 20px',
      flexGrow: 1,
      backgroundColor: 'gray',
      flexDirection: 'row',
      [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        margin: '10px 0'
      }
    }
  })
);

function DepositCalc() {
  
  const styles = useStyles();

  return (
    <Container 
     maxWidth='lg'
    >
      <Paper
        variant='elevation'
        className={styles.paper}
      >
        <DepositInputs />
        <Divider orientation='vertical' flexItem />
        <DepositCharts />
      </Paper>
    </Container>
  )
}

export default DepositCalc
