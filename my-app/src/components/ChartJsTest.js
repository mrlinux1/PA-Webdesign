import React, {useContext}from 'react'
import {HorizontalBar} from 'react-chartjs-2'
import {DrinksContext} from '../drinks-context'
import {
  extractBeerServings,
  extractWineServings,
  extractSpiritServings,
  extractLiterAlcohol,
  extractCountry
} from '../charthelper'

export default function ChartJsTest() {
    const [getDrinksData] = useContext(DrinksContext)
    // var datatoshow = 5     
    // getDrinksData.splice(datatoshow,getDrinksData.length-datatoshow)

    getDrinksData.sort(function(a,b) { return(parseInt(b.beer_servings,10) - parseInt(a.beer_servings,10))})
 
   const arbitraryStackKey ='stack'
   const data = React.useMemo(() => ({
        labels: extractCountry(getDrinksData),
        datasets: [
          {
            stack: arbitraryStackKey,
            label: 'beer',
            data: extractBeerServings(getDrinksData),
            backgroundColor: 'rgba(0,0,255,1.0)',
            borderColor: 'rgba(0,0,255,1.0)'
          }
          ,
          {
            stack: arbitraryStackKey,
            label: 'wine',
            data: extractWineServings(getDrinksData),
            backgroundColor: 'rgba(255,0,0,1.0)',
            borderColor: 'rgba(255,0,0,1.0)'
          }
          ,
          {
            stack: arbitraryStackKey,
            label: 'spirit',
            data: extractSpiritServings(getDrinksData),
            backgroundColor: 'rgba(255,200,0,1.0)',
            borderColor: 'rgba(255,200,0,1.0)'
          }
          ,
          {
            //stack: arbitraryStackKey,
            label: 'total litres of pure alcohol',
            data: extractLiterAlcohol(getDrinksData),
            backgroundColor: 'rgba(0,255,0,1.0)',
            borderColor: 'rgba(0,255,0,1.0)'
          }
      ]
    }),[getDrinksData]);

  // const legendOpts = {
  //   onClick: (e, legendItem,legend) => {
  //     const index = legendItem.datasetIndex;
  //     const ci = legend.chart;
  //     if (ci.isDatasetVisible(index)) {
  //       ci.hide(index);
  //       legendItem.hidden = true;
  //     } else {
  //       ci.show(index);
  //       legendItem.hidden = false;
  //     }
  //   },
  // };
  

return  <HorizontalBar data={data} width={100} height={4000} /* legend={legendOpts} */
    options={{ maintainAspectRatio: false }} />
}