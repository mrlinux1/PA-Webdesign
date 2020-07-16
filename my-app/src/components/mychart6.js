import React, {useContext} from 'react'
import {DrinksContext} from '../drinks-context'
import { Chart } from 'react-charts';


function MyChart6() {
    //Use any data object you want
    // const data = React.useMemo(
    //     () => (
    //         [
    //             {country: "A", beer: 5, wine: 7, spirit: 6},
    //             {country: "B", beer: 3, wine: 2, spirit: 10},
    //             {country: "C", beer: 8, wine: 4, spirit: 12},
    //             {country: "D", beer: 1, wine: 9, spirit: 15},
    //         ]
    //     ),
    //     []
    //   )

      const originalData = React.useMemo(
        () => (
            [
             {country:"Afghanistan",beer_servings:0,spirit_servings:0,wine_servings:0,total_litres_of_pure_alcohol:0.0},
             {country:"Albania",beer_servings:89,spirit_servings:132,wine_servings:54,total_litres_of_pure_alcohol:4.9}
            ]
        ),
        []
      )


    // Make data.lines represent the different series
    const data = React.useMemo(data => originalData, [originalData])


    const getSeries = React.useCallback((data,i) => data[i], []) 
    

    // Use data.lines[n].data to represent the different datums for each series
    //const getDatums = React.useCallback((series,i,data) => [series.beer_servings, series.wine_servings, series.spirit_servings], [])
    // Use the original data object and the datum index to reference the datum's primary value.
    const getPrimary = React.useCallback((i, series, seriesIndex, data) => data[i].country,[])
    
    // Use data.lines[n].data[n].value as each datums secondary value
    const getSecondary = React.useCallback((i, series, seriesIndex, data) => [data[i].beer, data[i].wine, data[i].spirit], [])
    const getLabel = React.useCallback((series) => series.country, [])

    const axes = React.useMemo(
        () => [
          { primary: true, type: 'ordinal', position: 'bottom' },
          { type: 'linear', position: 'left', stacked: true },
        ],
        []
      )
      const series = React.useCallback(
        (s, i) => ({
          
          type:
            i % 6 === 0 ? 'bar'
          : i % 5 === 0 ? 'bar'
          : i % 4 === 0 ? 'bar'
          : i % 3 === 0 ? 'bar'
          : i % 2 === 0 ? 'bar'
          : 'bar'
        }),
        []
      )
  

    
  
    return (
      <div
        style={{
          width: '400px',
          height: '300px',
        }}
      >
        <Chart
          data={data}
          series={series}
          getSeries={getSeries}
    //      getDatums={getDatums}
          getPrimary={getPrimary}
          getSecondary={getSecondary}
          getLabel={getLabel}
          
          axes={axes}
        />
      </div>
    )
  }

  export default MyChart6;