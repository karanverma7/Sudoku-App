import { GRID } from 'typings'
import { 
    shuffle, 
    isInRow, 
    isInColumn, 
    isInSquare, 
    numbersList, 
    getWorkingSquare, 
    checkGrid, 
    fillGrid 
} from 'utils'

//  Fill the Sudoku grid with random numbers
const index = (grid: GRID) => {
    let row = 0;
    let column = 0;

    for(let i = 0; i < 81; i++){
        row = Math.floor(i / 9)
        column = i % 9; 

        if(grid[row][column] === 0){
            shuffle(numbersList)

            for(let value of numbersList)
                if(!isInRow({ grid, row, value })) 
                    if(!isInColumn({ grid, column, value })) {
                        const square = getWorkingSquare({ grid, row, column })
                        if(!isInSquare({ square, value })) {
                            grid[row][column] = value 
                            if(checkGrid(grid)) return true
                            else if(fillGrid(grid)) return true
                        }
                    }
            break
        }
    }
    grid[row][column] = 0
}

export default index