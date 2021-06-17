import React from 'react'
import { 
  Box, Divider, makeStyles, Button
 } from '@material-ui/core'; 
import { useDepositContext } from '../../context/DepositInputs';
import InfoRow from '../InfoRow/InfoRow';
import IconTooltip from '../IconTooltip/IconTooltip';
import ProfitDetails from '../ProfitDetails/ProfitDetails';
import Charts from '../Charts/Charts';

import { uahFormatter } from '../../helpers/helpers';
import { DEPOSIT, DEPOSIT_TAX } from '../../config/constants';
import Send from '@material-ui/icons/SendOutlined';

function DepositCharts() {
  const useStyles = makeStyles({
    mb: {
      marginBottom: 20
    }
  });
  const styles = useStyles();
  const { deposit } = useDepositContext();

  const { 
    monthly, withoutFirstMonth, duration, percent, sum, percentDestination
   } = deposit;

  const monthlyTotal = () => withoutFirstMonth 
    ? monthly * ( duration - 1 ) 
    : monthly * duration
  
  const roundTwoSigns = (number: number) => Math.round(number * 100) / 100;

  const sumProfit = new Array(duration)
    .fill(0)
    .reduce((acc) => { 
      const montlyProfit = roundTwoSigns(acc.sum * percent / 100 / 12);
      const raisedSum = roundTwoSigns(acc.sum + monthly);
      return {
        sum: percentDestination === DEPOSIT ? raisedSum + montlyProfit : raisedSum,
        profit: montlyProfit + acc.profit
      }
    } 
    , { 
      sum: withoutFirstMonth ? sum : sum + monthly, // counting raised sum starting first month
      profit: 0 
    }
  );

  const handleStartDeposit = () => alert('Є зайві гроші?');

  const tax = sumProfit.profit * DEPOSIT_TAX;
  const purePercent = percent - percent * DEPOSIT_TAX;
  const pureProfit = uahFormatter(sumProfit.profit - tax);
  return (
    <Box 
      display='flex' 
      paddingLeft='20px'
      flex={1}
      flexDirection='column'
    >
      <Charts 
        sum={sum}
        monthlyTotal={monthlyTotal()}
        profit={sumProfit.profit}
      />
      <Box>
        <InfoRow label='Сума вкладу' value={uahFormatter(deposit.sum)} />
        <InfoRow label='Сума поповнень' value={uahFormatter(monthlyTotal())} />
        <InfoRow label='Процентна ставка' value={`${percent} % на рік`} />
        <InfoRow label='Проценти (дохід)' value={uahFormatter(sumProfit.profit)} valueBold />
        <InfoRow label='Податок' value={uahFormatter(tax)} children={<IconTooltip />} />
        <ProfitDetails purePercent={purePercent} pureProfit={pureProfit} />
        <Divider className={styles.mb} />
        <Button
          variant='contained'
          color='primary'
          startIcon={<Send />}
          onClick={handleStartDeposit}
        >
          Оформити депозит
        </Button>
      </Box>
    </Box>
  )
}

export default DepositCharts