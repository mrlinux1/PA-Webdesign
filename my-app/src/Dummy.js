import React, {useContext} from 'react'

import {DrinksContext} from './drinks-context'

export default function Dummy() {
    const [CSVDrinksData, setDrinksData] = useContext(DrinksContext)
    return <h1>Land: {CSVDrinksData[2].country}</h1>
}