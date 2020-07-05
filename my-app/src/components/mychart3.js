import React from 'react'
//
//import useChartConfig from 'hooks/useChartConfig'
import { Chart } from 'react-charts'

function MyChart3() {
  const { data, randomizeData } = useChartConfig({
    series: 10,
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
      { primary: true, type: 'ordinal', position: 'left' },
      { position: 'bottom', type: 'linear', stacked: true }
    ],
    []
  )
  return (
    <>
      <button onClick={randomizeData}>Randomize Data</button>
      <br />
      <br />
        <Chart data={data} series={series} axes={axes} tooltip />
      <br />
      
    </>
  )
}

export default MyChart3;