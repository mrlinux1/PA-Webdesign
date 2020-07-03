import parse from 'csv-parse/lib/sync'
import React,{createContext, useState, useEffect} from 'react'


export function loadDrinksData () {
    return fetch('/drinks.csv')
     .then((response) => response.text())
     .then((text) => parse(text,{columns: true}))
}

export const DrinksContext = createContext()

export function DrinksProvider (props) {
    const [getDrinksData, setDrinksData] = useState(
        [ 
    ])
    useEffect(() => {
        loadDrinksData().then((drinks) => {
            setDrinksData(drinks)
        })
    })
    return (
        <DrinksContext.Provider value={[getDrinksData,setDrinksData]}>
            {props.children}
        </DrinksContext.Provider>
    )
    
}