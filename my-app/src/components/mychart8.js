import React from 'react'
//
import useChartConfig from '../hooks/useChartConfig'
import Box from '../components/box'
import SyntaxHighlighter from '../components/syntaxHighlighter'
import { Chart } from 'react-charts'
let sourceCode
function MyChart8() {
  const { data, randomizeData } = useChartConfig({
    series: 4,
    datums: 8,
    dataType: 'ordinal'
  })
  console.log("######## example data #############",data)
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
      <Box>
        <Chart data={data} series={series} axes={axes} tooltip />
      </Box>
      <br />
      <SyntaxHighlighter code={sourceCode} />
    </>
  )
}

export default MyChart8;