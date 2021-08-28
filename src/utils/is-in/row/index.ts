import { GRID, NUMBER } from "typings";

interface IInput {
    grid: GRID;
    row: number;
    value: NUMBER;
}

//  Checking if the value is in row of the grid 
const index = ({ grid, row, value }: IInput): boolean => {
    return grid[row].includes(value)
}

export default index