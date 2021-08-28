import { GRID } from 'typings'
import { emptyGrid, fillGrid } from 'utils'

// Returns a completely filled & valid Sudoku grid
const index = (): GRID => {
    const grid = emptyGrid
    fillGrid(grid)
    return grid
}

export default index