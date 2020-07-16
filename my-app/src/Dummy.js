import React, {useContext} from 'react'

import {DrinksContext} from './drinks-context'

export default function Dummy() {
    const [getDrinksData, setDrinksData] = useContext(DrinksContext)
    const newdata = {}

    //getDrinksData.map((drinks,index) => (drinks.country} {drinks.beer_servings} {drinks.spirit_servings} {drinks.wine_servings} {drinks.total_litres_of_pure_alcohol}</p>))

    
    
    return (<div><p>Land: </p>
                <p>Length: {JSON.stringify(getDrinksData[0])}</p>
                <p>element: {JSON.stringify(getDrinksData)}</p>
         List:
        {getDrinksData.map((drinks,index,array) =>
         (<p key={index}>
            {drinks.country} {drinks.beer_servings} {drinks.spirit_servings} 
            {drinks.wine_servings} {drinks.total_litres_of_pure_alcohol}
             </p>))}
</div>
    
    )
}