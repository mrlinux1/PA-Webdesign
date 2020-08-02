export function extractBeerServings(input) {
    return input.map((entry) => {
        return entry.beer_servings
    }).map((numString) => {
        return parseInt(numString,10)
    }
    )
}

export function extractWineServings(input) {
    return input.map((entry) => {
        return entry.wine_servings
    }).map((numString) => {
        return parseInt(numString,10)
    }
    )
}

export function extractSpiritServings(input) {
    return input.map((entry) => {
        return entry.spirit_servings
    }).map((numString) => {
        return parseInt(numString,10)
    }
    )
}

export function extractLiterAlcohol(input) {
    return input.map((entry) => {
        return entry.total_litres_of_pure_alcohol
    }).map((numString) => {
        return parseInt(numString,10)
    }
    )
}

export function extractCountry(input) {
    return input.map((entry) => {
        return entry.country
    })
}
// export function extractDatasets(input) {
//     return []
// }