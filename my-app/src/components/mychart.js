import React, {useContext} from 'react'
import {DrinksContext} from '../drinks-context'
import { Chart } from 'react-charts';


function MyChart() {
    const [getDrinksData, setDrinksData] = useContext(DrinksContext)
    
    const data = React.useMemo(
      () => [
        {
          data: [
            { country: 'A', y: 10 },
          ],
        },
        {
          data: [
            { country: 'C', y: 30 },
          ],
        },
        {
          data: [
            { country: 'B', y: 15 },
          ],
        },

      ],
      []
    )
  
    // const series = React.useMemo(
    //   () => ({
    //     type: 'bar'
    //   }),
    //   []
    // )
    const series = React.useCallback(
      (i, s) => ({
        
        type:
          s % 4 === 0 ? 'bar'
        : s % 3 === 0 ? 'bar'
        : s % 2 === 0 ? 'bar'
        : 'bar'
      }),
      []
    )

    const getLabel = React.useCallback(series => series.data.country, [])

    const getDatums = React.useCallback(series => series.data.country, [])

    const axes = React.useMemo(
      () => [
        { primary: true, type: 'ordinal', position: 'bottom' },
        { type: 'linear', position: 'left', stacked: true },
      ],
      []
    )
  
    return (
      <div
        style={{
          width: '400px',
          height: '300px',
        }}
      >
        <Chart data={data}  getLabel={getLabel} getData={getDatums} series={series} axes={axes} />
      </div>
    )
  }

  export default MyChart;