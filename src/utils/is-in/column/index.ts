import { GRID, NUMBER } from 'typings'

interface IInput {
    grid: GRID
    column: number
    value: NUMBER
}

//  Checking if the value is in column of the grid 
const index = ({ grid, column, value}: IInput): boolean => {
    for(let i = 0; i < 9 ; i++) if(value === grid[i][column]) return true
    return false
}

export default index