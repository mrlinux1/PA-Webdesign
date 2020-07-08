import React, {useContext} from 'react'
import {DrinksContext} from '../drinks-context'
import { Chart } from 'react-charts';


function MyChart5() {
    // Use any data object you want
    const originalData = React.useMemo(
      () => ({
        //axis: ["A", "B", "C"],
        lines: [
          { data: [{ value: 1 }, { value: 5 }, { value: 10 }], label: "A" },
          { data: [{ value: 20 }, { value: 30 }, { value: 40 }],  label: "B" },
          { data: [{ value: 7 }, { value: 23 }, { value: 50 }],  label: "C" },
        ],
      }),
      []
    )
    // originalData.lines[1].data[2].value = 40
    // originalData.lines[1].label = "B"
/*
    const originalData = React.useMemo(
      () => (
          [
              {country: "A", beer: 5, wine: 7, spirit: 4},
              {country: "A", beer: 5, wine: 7, spirit: 4},
              {country: "A", beer: 5, wine: 7, spirit: 4},
              {country: "A", beer: 5, wine: 7, spirit: 4},
          ]
      ),
      []
    )


*/


    // Make data.lines represent the different series
    const data = React.useMemo(data => originalData.lines, [originalData])

    // const data = React.useMemo(data => originalData, [originalData])
  
    const getSeries = React.useCallback(data => data.data, [])
    //const getSeries = React.useCallback((datum, i, series, seriesIndex, data) => data[i], []) 


    // Use data.lines[n].data to represent the different datums for each series
    const getDatums = React.useCallback(series => series.data, [])
    //    const getDatums = React.useCallback(series => [series.beer, series.wine, series.spirit], [])
    // Use the original data object and the datum index to reference the datum's primary value.
    const getPrimary = React.useCallback(
      (datum, i, series, seriesIndex, data) => data[i].label,[])
    // (datum, i, series, seriesIndex, data) => data[i].country,[])
    

    const axes = React.useMemo(
        () => [
          { primary: true, type: 'ordinal', position: 'bottom' },
          { type: 'linear', position: 'left', stacked: true },
        ],
        []
      )
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
  
      const getLabel = React.useCallback(data => data.label, [])

    // Use data.lines[n].data[n].value as each datums secondary value
    const getSecondary = React.useCallback(datum => datum.value, [])
  
    return (
      <div
        style={{
          width: '400px',
          height: '300px',
        }}
      >
        <Chart
          data={data}
          getSeries={getSeries}
          getDatums={getDatums}
          getPrimary={getPrimary}
          getSecondary={getSecondary}
          //getLabel={getLabel}
          series={series}
          axes={axes}
        />
      </div>
    )
  }

  export default MyChart5;