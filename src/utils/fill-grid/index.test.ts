import { GRID } from 'typings'
import { emptyGrid, fillGrid } from 'utils'
import column from 'utils/is-in/column'

describe('fillGrid', () => {
    it('Fills an empty grid', () => {
        const grid: GRID = emptyGrid

        fillGrid(grid)
        console.log(grid)
        for(let row in grid) 
            for( let column in grid[row]) {
                expect(grid[row][column]).toBeGreaterThanOrEqual(1)
                expect(grid[row][column]).toBeLessThanOrEqual(9)
            }   
    })

    it('Fills a partially filled grid', () => {
        const grid: GRID = [
            [1, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 2, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 3, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 4, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 5, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 6, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 7, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 8, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 9],
        ]

        fillGrid(grid)
        console.log(grid)
        for(let row in grid) 
            for( let column in grid[row]) {
                expect(grid[row][column]).toBeGreaterThanOrEqual(1)
                expect(grid[row][column]).toBeLessThanOrEqual(9)
            }   
    })
})