import { extractBeerServings,
    extractWineServings,
    extractSpiritServings,
    extractLiterAlcohol,
    extractCountry
} from '.'

describe('charthelper', () => {
    describe('extractBeerServings', () => {
        it('should return empty list on empty input', () => {
            expect(extractBeerServings([])).toEqual([])
        })
        it('should extract beer_servings only as number', () => {
            const input = [{
            beer_servings: "0",
            country: "Afghanistan",
            spirit_servings: "0",
            total_litres_of_pure_alcohol: "0.0",
            wine_servings: "0",
            }]

            expect(extractBeerServings(input)).toEqual([parseInt(input[0].beer_servings,10)])
        }
        )

    })
    describe('extractWineServings', () => {
        it('should return empty list on empty input', () => {
            expect(extractWineServings([])).toEqual([])
        })
        it('should extract spirit_servings only as number', () => {
            const input = [{
            beer_servings: "0",
            country: "Afghanistan",
            spirit_servings: "0",
            total_litres_of_pure_alcohol: "0.0",
            wine_servings: "0",
            }]

            expect(extractWineServings(input)).toEqual([parseInt(input[0].wine_servings,10)])
        }
        )

    })
    describe('extractSpiritServings', () => {
        it('should return empty list on empty input', () => {
            expect(extractSpiritServings([])).toEqual([])
        })
        it('should extract spirit_servings only as number', () => {
            const input = [{
            beer_servings: "0",
            country: "Afghanistan",
            spirit_servings: "0",
            total_litres_of_pure_alcohol: "0.0",
            wine_servings: "0",
            }]

            expect(extractSpiritServings(input)).toEqual([parseInt(input[0].spirit_servings,10)])
        }
        )

    })
    describe('extractLiterAlcohol', () => {
        it('should return empty list on empty input', () => {
            expect(extractLiterAlcohol([])).toEqual([])
        })
        it('should extract total_litres_of_pure_alcohol only as number', () => {
            const input = [{
            beer_servings: "0",
            country: "Afghanistan",
            spirit_servings: "0",
            total_litres_of_pure_alcohol: "0.0",
            wine_servings: "0",
            }]

            expect(extractLiterAlcohol(input)).toEqual([parseInt(input[0].total_litres_of_pure_alcohol,10)])
        })
    })
    describe('extractCountry', () => {
        it('should return empty list on entry input', () => {
            expect(extractCountry([]).length).toBeDefined();
        })
        it('should extract country names as string', () => {
            const input = [{
                beer_servings: "0",
                country: "Afghanistan",
                spirit_servings: "0",
                total_litres_of_pure_alcohol: "0.0",
                wine_servings: "0",
                }]
    
            expect(extractCountry(input)).toEqual([input[0].country]);
        })
    })
    // describe('extractDatasets', () => {
    //     it('should return empty list on empty input', () => {
    //         expect(extractDatasets().length).toBeDefined()
    //     })
    //     it('should return array with one data set', () => {
    //         const input = [{
    //             beer_servings: "0",
    //             country: "Afghanistan",
    //             spirit_servings: "0",
    //             total_litres_of_pure_alcohol: "0.0",
    //             wine_servings: "0",
    //             }]
    
    //         expect(extractDatasets(input)).toEqual([{

    //         }])
    //     })
    // })
})