import { GRID, BLOCK_COORDS } from 'typings'

export interface IReducer {
    solvedGrid?: GRID;
    challengeGrid?: GRID;
    workingGrid?: GRID;
    selectedBlock?: BLOCK_COORDS
}