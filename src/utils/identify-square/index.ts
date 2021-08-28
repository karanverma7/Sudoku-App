import { GRID, SQUARE } from "typings";

interface IInput {
    grid: GRID,
    row: number,
    column: number,
}

interface IHelperInput {
    grid: GRID,
    column: number,
    rMax: number,
}

/* 
    Ways of creating a function with types:
    1. Providing a type on the function itself i.e Functional type
    2. Providing a type on params and a type on returned value
*/

//  First way:
type IWS = (params: IInput) => SQUARE

const squareHelper = ({ grid, column, rMax }: IHelperInput): SQUARE => {
    let square = []

    if( column < 3) 
        for( let x = rMax-3; x < rMax; x++ ) square.push([grid[x][0], grid[x][1], grid[x][2]])
    else if( column < 6) 
        for( let x = rMax-3; x < rMax; x++ ) square.push([grid[x][3], grid[x][4], grid[x][5]])
    else   
        for( let x = rMax-3; x < rMax; x++ ) square.push([grid[x][6], grid[x][7], grid[x][8]])
    
    return square as SQUARE
}

const index: IWS = ({ grid, row, column }) => {
    if( row < 3) return squareHelper({ grid, column, rMax: 3 })
    else if ( row < 6 ) return squareHelper({ grid, column, rMax: 6 }) 
    else return squareHelper({ grid, column, rMax: 9 })
}

//  Second way:
//  export const getWorkingSquare2 = ({ grid, row, column }: IInput): SQUARE => {
//     return [[0,0,0], [0,0,0], [0,0,0]]
//  }

export default index