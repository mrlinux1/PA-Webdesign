import React, {useContext} from 'react'
import {DrinksContext} from '../drinks-context'
import { Chart } from 'react-charts';

function CustomTooltip({ getStyle, primaryAxis, datum }) {
    const data = React.useMemo(
      () =>
        datum
          ? [
              {
                data: datum.group.map(d => ({
                  primary: d.series.label,
                  secondary: d.secondary,
                  color: getStyle(d).fill
                }))
              }
            ]
          : [],
      [datum, getStyle]
    )
    return datum ? (
      <div
        style={{
          color: 'white',
          pointerEvents: 'none'
        }}
      >
        <h3
          style={{
            display: 'block',
            textAlign: 'center'
          }}
        >
          {primaryAxis.format(datum.primary)}
        </h3>
        <div
          style={{
            width: '300px',
            height: '200px',
            display: 'flex'
          }}
        >
          <Chart
            data={data}
            dark
            series={{ type: 'bar' }}
            axes={[
              {
                primary: true,
                position: 'bottom',
                type: 'ordinal'
              },
              {
                position: 'left',
                type: 'linear'
              }
            ]}
            getDatumStyle={datum => ({
              color: datum.originalDatum.color
            })}
            primaryCursor={{
              value: datum.seriesLabel
            }}
          />
        </div>
      </div>
    ) : null
  }

function MyChart5() {
    // Use any data object you want
    const [getDrinksData, setDrinksData] = useContext(DrinksContext)  
    const newdata = {}


    newdata.xaxis = getDrinksData.map((drinks,index) => {
      return drinks.country
    });
    newdata.yaxis = ["Beer","Wine", "Spirit", "Alcohol"];
    newdata.beer = getDrinksData.map((drinks,index) => {return drinks.beer_servings}).map((num) => {
      return parseInt(num,10);
    });
    newdata.wine = getDrinksData.map((drinks,index) => {return drinks.wine_servings}).map((num) => {
      return parseInt(num,10);
    });
    newdata.spirit = getDrinksData.map((drinks,index) => {return drinks.spirit_servings}).map((num) => {
      return parseInt(num,10);
    });
    newdata.alcohol = getDrinksData.map((drinks,index) => {return drinks.total_litres_of_pure_alcohol}).map((num) => {
      return parseInt(num,10);
    });
   
/*     console.log("###############", newdata.xaxis)
console.log("###############", newdata.beer)

 */

    const originalData = React.useMemo(
      () => ({
        xaxis: newdata.xaxis,
        yaxis: ["beer", "wine", "spirit", "litres alcohol"],
        lines: [
        //   { data: [{ value: 1 }, { value: 5 }, { value: 10 }] },
        //   { data: [{ value: 4 }, { value: 14 }, { value: 24 }] },
        //   { data: [{ value: 6 }, { value: 12 }, { value: 18 }] },
        //   { data: [{ value: 6 }, { value: 12 }, { value: 18 }] },
        { data: newdata.beer, label: "beer" },
        { data: newdata.wine, label: "wine"},
        { data: newdata.spirit, label: "spirit"},
        { data: newdata.alcohol, label: "alcohol"},
        ],
      }),
      [newdata.xaxis, newdata.beer ]
    )
  
    // Make data.lines represent the different series
    const data = React.useMemo(data => originalData.lines, [originalData])
  
    // Use data.lines[n].data to represent the different datums for each series
    const getDatums = React.useCallback(series => series.data, [])
  
    // Use the original data object and the datum index to reference the datum's primary value.
    const getPrimary = React.useCallback(
      (datum, i, series, seriesIndex, data) => originalData.xaxis[i],
      [originalData.xaxis]
    ) 
  
    // Use data.lines[n].data[n].value as each datums secondary value
    const getSecondary = React.useCallback( (datum, i, series, seriesIndex, data)=> originalData.lines[seriesIndex].data[i], [originalData.lines])

    const axes = React.useMemo(
        () => [
          { primary: true, type: 'ordinal', position: 'left' },
          { type: 'linear', position: 'bottom', stacked: true},
        ],
        []
      )
      const series = React.useCallback(
        () => ({
          
          type: 'bar'
        }),
        []
      )
  
      const tooltip = React.useMemo(
        () => ({
          render: ({ datum, primaryAxis, getStyle }) => {
            return <CustomTooltip {...{ getStyle, primaryAxis, datum }} />
          }
        }),
        []
      )


    return (
      <div
        style={{
          width: '1280px',
          height: '4096px',
        }}
      >
        <Chart
          data={data}
          //getSeries={getSeries}
          getDatums={getDatums}
          getPrimary={getPrimary}
          getSecondary={getSecondary}
          series={series}
          axes={axes}
          primaryCursor
          tooltip={tooltip}
        />
      </div>
    )
  }

  
  export default MyChart5;