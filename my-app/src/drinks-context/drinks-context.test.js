import { readFileSync} from 'fs'
import {execPath} from 'process'
import { loadDrinksData } from './'

describe('drinks-context', () => {
  describe('loadDrinksData', () => {
      it('should provide drinks.csv as json promise', async () => {
        //Synchrones Lesen der csv Datei direkt lokal
        const csvContent = readFileSync(__dirname + '/../../public/drinks.csv','utf8')
        const rows = csvContent.split('\n') // Unter Windows '\r\n'
        const labels = rows[0].split(',')
        console.log(labels)
        fetch.mockResponseOnce(csvContent)

        // Asynchrones Lesen der CSV-Datei über unsere FUnktion loadDrinksData
        const data =  await loadDrinksData();
        console.log('####', data)
        // Vergleich Synchron <=> Asynchron der Anszahl Datensätze
        expect(data.length).toEqual(rows.length-1)

        // Vergleich Synchron <=> Asynchron
        // Sind alle Spaltenüberschriften im Objekt auch in labels?
        data.forEach((country) => {
            expect(Object.keys(country)).toEqual(labels)
        })
        }
      )
    }
  )
}
)

