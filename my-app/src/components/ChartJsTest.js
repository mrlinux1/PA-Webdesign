import React, {useContext}from 'react'
import {Bar} from 'react-chartjs-2'
import {DrinksContext} from '../drinks-context'

export default function ChartJsTest() {
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
    console.log("##maxlength##",maxlength)
    newdata.beer = getDrinksData.map((drinks,index) => {return {x: drinks.country, y: parseInt(drinks.beer_servings,10), r: undefined}})
    newdata.wine = getDrinksData.map((drinks,index) => {return {x: drinks.country, y: parseInt(drinks.wine_servings,10), r: undefined}})
    newdata.spirit = getDrinksData.map((drinks,index) => {return {x: drinks.country, y: parseInt(drinks.spirit_servings,10), r: undefined}})
    newdata.alcohol = getDrinksData.map((drinks,index) => {return {x: drinks.country, y: parseInt(drinks.total_litres_of_pure_alcohol,10), r: undefined}})

    newdata.data = getDrinksData.map((drinks,index) => {return drinks.beer_servings})
    


    console.log("####### CSV ########", getDrinksData)

    const mydata = React.useMemo(
      () => ([
        { datums: newdata.beer, label: "beer" },
        { datums: newdata.wine, label: "wine"},
        { datums: newdata.spirit, label: "spirit"},
        { datums: newdata.alcohol, label: "alcohol"},
        ]
      ),
      [newdata.beer, newdata.wine, newdata.spirit, newdata.alcohol ]
    )
    console.log("###### mydata #########", mydata)





    return  <Bar data={newdata.data}/>
}