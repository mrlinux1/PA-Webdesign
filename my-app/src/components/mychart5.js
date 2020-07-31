import React, {useContext} from 'react'
import {DrinksContext} from '../drinks-context'
import { Chart } from 'react-charts';
import useChartConfig from '../hooks/useChartConfig'
import Box from '../components/box'

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
    const [getDrinksData] = useContext(DrinksContext)  
    const newdata = {}
    getDrinksData.splice(5,187)

    let i=0;
    let maxlength=0;

    const country = getDrinksData.map((drinks,index) => {return drinks.country})
    for (i = 0; i < country.length; i++) {
      if(country[i].length > maxlength) { maxlength = country[i].length};
    } 
    //                " ".repeat(10)
    //console.log("##maxlength##",maxlength)
    newdata.beer = getDrinksData.map((drinks,index) => {return {x: drinks.country, y: parseInt(drinks.beer_servings,10), r: undefined}})
    newdata.wine = getDrinksData.map((drinks,index) => {return {x: drinks.country, y: parseInt(drinks.wine_servings,10), r: undefined}})
    newdata.spirit = getDrinksData.map((drinks,index) => {return {x: drinks.country, y: parseInt(drinks.spirit_servings,10), r: undefined}})
    newdata.alcohol = getDrinksData.map((drinks,index) => {return {x: drinks.country, y: parseInt(drinks.total_litres_of_pure_alcohol,10), r: undefined}})
   
    console.log("####### CSV ########", getDrinksData[1])

    const mydata = React.useMemo(
      () => ([
        { label: "beer", datums: newdata.beer  },
        { label: "wine", datums: newdata.wine },
        { label: "spirit", datums: newdata.spirit },
        { label: "alcohol", datums: newdata.alcohol },
        ])
      ,
      [newdata.beer, newdata.wine, newdata.spirit, newdata.alcohol ]
    )
    //console.log("###### mydata #########", mydata)
    console.log("###### mydata #########", mydata)
  //  console.log("###### mydata #########", mydata[0].datums)
  //  console.log("###### mydata #########", mydata[0].datums[0])
    //console.log("###### mydata #########", mydata[0].datums[0].x)
   const { data, randomizeData } = useChartConfig({
      series: 4,
      datums: 5,
      dataType: 'ordinal'
    })

    console.log("###### data   #########", data)

    const getPrimary = React.useCallback(

      (datum, i, series, seriesIndex, data) => mydata[seriesIndex].datums[i].x,
      [mydata]
 
    )


       const axes = React.useMemo(
        () => [
          { primary: true, type: 'ordinal', position: 'left'},
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
          width: '1920px',
          height: '1024px',
        }}
      >
        <Box>
        <Chart
          data={mydata}
          series={series}
          getprimary={getPrimary}
          axes={axes}
          
          tooltip={tooltip}
        />
       </Box>
       <button onClick={randomizeData}>Randomize Data</button>
      <br />
      <br />
      <Box>
        <Chart data={data} series={series} axes={axes} tooltip={tooltip}/>
      </Box>
      

      </div>

    )
  }

  
  export default MyChart5;

  /*
        <div>
      <button onClick={randomizeData}>Randomize Data</button>
      <br />
      <br />
      <Box>
        <Chart data={exdata} series={series} axes={axes}/>
      </Box>
      </div>
  */