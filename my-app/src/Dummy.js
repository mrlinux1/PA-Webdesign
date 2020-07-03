import React, {useContext} from 'react'

import {DrinksContext} from './drinks-context'

export default function Dummy() {
    const [getDrinksData, setDrinksData] = useContext(DrinksContext)
    return (<h1>Land:
    {getDrinksData.map((drinks,index) => (<p key={index}>{drinks.country} {drinks.beer_servings} {drinks.spirit_servings} {drinks.wine_servings} {drinks.total_litres_of_pure_alcohol}</p>))}
    </h1>
    
    )
}