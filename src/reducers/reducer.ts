import { IReducer } from "./interfaces"
import { AnyAction } from "redux"
import * as types from "./types"
import { createFullGrid } from 'utils'
import { getCopyGrid, removeNumbers,compareArrays } from "utils"
import { GRID } from "typings"

const initialState: IReducer = {}

const reducer = (state = initialState, action: AnyAction ): IReducer => {
    switch(action.type) {
        case types.CREATE_GRID: {
            const solvedGrid = createFullGrid()
            const challengeGrid = removeNumbers(getCopyGrid(solvedGrid))
            const workingGrid = getCopyGrid(challengeGrid)
            
            return {
                ...state,
                solvedGrid,
                challengeGrid,
                workingGrid,
            }
        }
        case types.SET_SELECTED_BLOCK: 
            return {
                ...state,
                selectedBlock: action.payload
            }

        case types.FILL_SELECTED_BLOCK: {
            const { value, coords } = action.payload
            if (state.workingGrid && state.solvedGrid) {
                if (
                  state.solvedGrid[coords[0]][coords[1]] !== value
                ) {
                  alert('Incorrect Value Entered!')
                  return state
                }

                state.workingGrid[coords[0]][coords[1]] = value
                
                if (compareArrays(state.workingGrid, state.solvedGrid))
                alert('Sudoku Completed!')

                return { ...state, workingGrid: [...state.workingGrid] as GRID }
              }

              return state
        }   

        default:
            return state
    }
}

export default reducer