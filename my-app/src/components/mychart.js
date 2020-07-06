import React, {useContext} from 'react'
import {DrinksContext} from '../drinks-context'
import { Chart } from 'react-charts';


function MyChart() {
    const [getDrinksData, setDrinksData] = useContext(DrinksContext)
    
    const data = React.useMemo(
      () => [
        {
          label: 'Series 1',
          data: [
            { x: 1, y: 10 },
            { x: 2, y: 55 },
            { x: 3, y: 20 },
          ],
        },
        {
          label: 'Series 2',
          data: [
            { x: 1, y: 5 },
            { x: 2, y: 60 },
            { x: 3, y: 10 },
          ],
        },
        {
          label: 'Series 3',
          data: [
            { x: 1, y: 20 },
            { x: 2, y: 30 },
            { x: 3, y: 5 },
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
      (s, i) => ({
        type:
          i % 4 === 0
            ? 'line'
            : i % 3 === 0
            ? 'line'
            : i % 2 === 0
            ? 'line'
            : 'line'
      }),
      []
    )



    const axes = React.useMemo(
      () => [
        { primary: true, type: 'ordinal', position: 'left' },
        { type: 'linear', position: 'bottom', stacked: true },
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
        <Chart data={data}  series={series} axes={axes} />
      </div>
    )
  }

  export default MyChart;