import { GRID } from 'typings'
import { Shuffle, isInRow, isInColumn, numbersList } from 'utils'

const fillGrid = (grid: GRID) => {
    let row = 0;
    let column = 0;

    for(let i = 0; i < 81; i++){
        row = Math.floor(i / 9)
        column = i % 9; 

        if(grid[row][column] === 0){
            Shuffle(numbersList)
            let value: any

            for(value in numbersList){
                if(!isInRow({ grid, row, value })) 
                    if(!isInColumn({ grid, column, value })) {

                    }
            }
        }
    }
}

export default fillGrid