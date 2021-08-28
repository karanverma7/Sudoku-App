import { isInColumn, isInRow, isInSquare } from 'utils'
import { GRID, SQUARE, NUMBER } from 'typings'

describe('isInCol', () => {
    it('Returns true when value is in Grid column', () => {
        const grid: GRID = [
            [8, 4, 2, 6, 5, 1, 3, 9, 7],
            [5, 3, 7, 2, 8, 9, 6, 4, 1],
            [6, 9, 1, 7, 3, 4, 5, 2, 8],
            [1, 6, 3, 8, 4, 5, 9, 7, 2],
            [7, 5, 8, 1, 9, 2, 4, 6, 3],
            [9, 2, 4, 3, 7, 6, 1, 8, 5],
            [4, 7, 6, 5, 1, 8, 2, 3, 9],
            [2, 8, 5, 9, 6, 3, 7, 1, 4],
            [3, 1, 9, 3, 1, 7, 8, 5, 6],
          ]
          expect(isInColumn({grid, column: 0, value: 6})).toBeTruthy()
          expect(isInColumn({grid, column: 5, value: 6})).toBeTruthy()
          expect(isInColumn({grid, column: 8, value: 6})).toBeTruthy()
    })

    it('Returns false when value is not in Grid column', () => {
        const grid: GRID = [
            [8, 4, 2, 6, 5, 1, 3, 9, 7],
            [5, 3, 7, 2, 8, 0, 6, 4, 1],
            [6, 9, 1, 7, 3, 4, 5, 2, 8],
            [1, 6, 3, 8, 4, 5, 9, 7, 2],
            [7, 5, 8, 1, 9, 2, 4, 6, 3],
            [0, 2, 4, 3, 7, 6, 1, 8, 5],
            [4, 7, 6, 5, 1, 8, 2, 3, 0],
            [2, 8, 5, 9, 6, 3, 7, 1, 4],
            [3, 1, 9, 3, 1, 7, 8, 5, 6],
          ]
          expect(isInColumn({grid, column: 0, value: 9})).toBeFalsy()
          expect(isInColumn({grid, column: 5, value: 9})).toBeFalsy()
          expect(isInColumn({grid, column: 8, value: 9})).toBeFalsy()
    }) 
})

describe('isInRow', () => {
    it('Returns true when value is in Grid row', () => {
        const grid: GRID = [
            [8, 4, 2, 6, 5, 1, 3, 9, 7],
            [5, 3, 7, 2, 8, 9, 6, 4, 1],
            [6, 9, 1, 7, 3, 4, 5, 2, 8],
            [1, 6, 3, 8, 4, 5, 9, 7, 2],
            [7, 5, 8, 1, 9, 2, 4, 6, 3],
            [9, 2, 4, 3, 7, 6, 1, 8, 5],
            [4, 7, 6, 5, 1, 8, 2, 3, 9],
            [2, 8, 5, 9, 6, 3, 7, 1, 4],
            [3, 1, 9, 3, 1, 7, 8, 5, 6],
          ]
          expect(isInRow({grid, row: 0, value: 6})).toBeTruthy()
          expect(isInRow({grid, row: 5, value: 6})).toBeTruthy()
          expect(isInRow({grid, row: 8, value: 6})).toBeTruthy()
    })

    it('Returns false when value is not in Grid row', () => {
        const grid: GRID = [
            [8, 4, 2, 6, 5, 1, 3, 0, 7],
            [5, 3, 7, 2, 8, 9, 6, 4, 1],
            [6, 9, 1, 7, 3, 4, 5, 2, 8],
            [1, 6, 3, 8, 4, 5, 9, 7, 2],
            [7, 5, 8, 1, 9, 2, 4, 6, 3],
            [0, 2, 4, 3, 7, 6, 1, 8, 5],
            [4, 7, 6, 5, 1, 8, 2, 3, 9],
            [2, 8, 5, 9, 6, 3, 7, 1, 4],
            [3, 1, 0, 3, 1, 7, 8, 5, 6],
          ]
          expect(isInRow({grid, row: 0, value: 9})).toBeFalsy()
          expect(isInRow({grid, row: 5, value: 9})).toBeFalsy()
          expect(isInRow({grid, row: 8, value: 9})).toBeFalsy()
    }) 
})

describe('isInSquare', () => {
    it('Returns true if value is present in the square', () => {
        const square: SQUARE = [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9]
        ]

        expect(isInSquare({ square, value: 8})).toBeTruthy()
        expect(isInSquare({ square, value: 1})).toBeTruthy()
    })

    it('Returns false if value is not present in the square', () => {
        const square: SQUARE = [
            [0, 2, 3],
            [4, 5, 6],
            [7, 8, 0]
        ]

        expect(isInSquare({ square, value: 9})).toBeFalsy()
        expect(isInSquare({ square, value: 1})).toBeFalsy()
    })
})