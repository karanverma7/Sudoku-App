import { GRID, NUMBER } from 'typings'

interface IInput {
    grid: GRID
    column: number
    value: NUMBER
}

const isInColumn = ({ grid, column, value}: IInput): boolean => {
    for(let i = 0; i < 9 ; i++) if(value === grid[i][column]) return true
    return false
}

export default isInColumn