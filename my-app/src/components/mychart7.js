import React from 'react'
//
import useChartConfig from '../hooks/useChartConfig'
import Box from '../components/box'
import { Chart } from 'react-charts'

function MyChart7() {
  const { data, randomizeData } = useChartConfig({
    series: 8,
    datums: 3,
    dataType: 'ordinal'
  })


  
  const series = React.useMemo(
    () => ({
      type: 'bar'
    }),
    []
  )
  const axes = React.useMemo(
    () => [
      { primary: true, type: 'ordinal', position: 'bottom' },
      { position: 'left', type: 'linear', stacked: false }
    ],
    []
  )
  return (
    <>
      <button onClick={randomizeData}>Randomize Data</button>
      <br />
      <br />
      <Box>
        <Chart data={data} series={series} axes={axes} tooltip />
      </Box>
      <br />
      
    </>
  )
}

export default MyChart7;