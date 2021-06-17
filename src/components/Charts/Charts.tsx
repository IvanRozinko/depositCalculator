import React from 'react'
import { Box } from '@material-ui/core';
import { VerticalRectSeries, FlexibleWidthXYPlot } from 'react-vis';
import InfoRow from '../InfoRow/InfoRow';

import { decimalFormatter } from '../../helpers/helpers'

interface Props {
  sum: number,
  monthlyTotal: number,
  profit: number
}

function Charts({ sum, monthlyTotal, profit }: Props) {

  const leftChartX = { x0: 0, x: 4 };
  const rightChartX = { x0: 5, x: 9 };
  const totalIncome = sum + monthlyTotal;
  const totalRangeY = totalIncome + profit;

  const rangeY = (value: number) => totalRangeY / 100 * value;
  const firstBar = [{...leftChartX, y: rangeY(sum), y0: 0}, {...rightChartX, y: rangeY(sum), y0: 0}];
  const secondBar = [{...leftChartX, y: rangeY(monthlyTotal), y0: 0}, {...rightChartX, y: rangeY(monthlyTotal), y0: 0}];
  const thirdBar = [{...leftChartX, y: 0, y0: 0}, {...rightChartX, y: rangeY(profit), y0: 0}];

  return (
    <Box display='flex' flexDirection='column'>
      <InfoRow label='Вклав' value='Отримано' />
      <InfoRow 
        label={decimalFormatter(totalIncome)} 
        value={decimalFormatter(totalIncome + profit)} 
        valueBold 
      />
      <FlexibleWidthXYPlot height={300} stackBy="y">
        <VerticalRectSeries data={firstBar} color='darkgray' />
        <VerticalRectSeries data={secondBar} color='#35322B' />
        <VerticalRectSeries data={thirdBar}  color='#3f51b5' />
      </FlexibleWidthXYPlot>
    </Box>
  )
}

export default Charts
