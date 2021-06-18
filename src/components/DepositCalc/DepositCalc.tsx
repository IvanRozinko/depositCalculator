import React from 'react'
import { 
  Paper, Divider, Container, Box 
} from '@material-ui/core'; 
import { Theme, makeStyles, createStyles } from '@material-ui/core/styles';
import DepositInputs from '../DeposinInputs/DepositInputs';
import DepositCharts from '../DepositCharts/DepositCharts';

const useStyles = makeStyles((theme: Theme) => 
  createStyles({
    container:{
      display: 'flex',
      flex: 1,
      minHeight: '100vh',
      backgroundColor: '#71a2b6'
    },
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
    <Box className={styles.container}>
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
    </Box>
  )
}

export default DepositCalc
