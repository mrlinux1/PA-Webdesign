import React, {useContext} from 'react'

import {DrinksContext} from './drinks-context'

export default function Dummy() {
    const [getDrinksData, setDrinksData] = useContext(DrinksContext)
    return <h1>Land:
    {getDrinksData.map((country,index) => (<p key={index}>{country.country}</p>))}</h1>
}