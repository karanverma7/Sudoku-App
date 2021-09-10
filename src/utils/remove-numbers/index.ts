import { GRID, INDEX, NUMBER } from 'typings'
import global from 'global'
import { checkGrid, getWorkingSquare, isInColumn, isInRow, isInSquare } from 'utils'

export const getRandomIndex = (): INDEX => {
    return Math.floor(Math.random() * Math.floor(9)) as INDEX
}

export const getCopyGrid = (grid: GRID): GRID=> {
    const copyGrid: GRID = [
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

    for(let r: INDEX = 0; r < 9; r++)
        for(let c: INDEX = 0; c < 9; c++) 
            copyGrid[r][c] = grid[r][c];

    return copyGrid
}

export const solveGrid = (grid: GRID) => {
    const numbers: NUMBER[] = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    let row = 0
    let column = 0

    for (let i = 0; i < 81; i++) {
        row = Math.floor(i / 9)
        column = i % 9

        if (grid[row][column] === 0) {
        for (let value of numbers)
            if (!isInRow({ grid, row, value }))
            if (!isInColumn({ column, grid, value })) {
                const square = getWorkingSquare({ column, grid, row })
                if (!isInSquare({ square, value })) {
                grid[row][column] = value
                if (checkGrid(grid)) {
                    global.counter++
                    break
                } else if (solveGrid(grid)) return true
                }
            }
        break
        }
    }

    grid[row][column] = 0
}

export const removeNumbers = (grid: GRID, attempts = 5): GRID => {
    while (attempts > 0) {
      let row = getRandomIndex()
      let col = getRandomIndex()
  
      while (grid[row][col] === 0) {
        row = getRandomIndex()
        col = getRandomIndex()
      }
  
      const backup = grid[row][col]
      grid[row][col] = 0
  
      const gridCopy = getCopyGrid(grid)
  
      global.counter = 0
      solveGrid(gridCopy)
  
      if (global.counter !== 1) {
        grid[row][col] = backup
        attempts--
      }
    }
  
    return grid
  }