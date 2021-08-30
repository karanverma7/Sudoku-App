import { IReducer } from "./interfaces"
import { AnyAction } from "redux"
import * as types from "./types"
import { createFullGrid } from 'utils'

const initialState: IReducer = {}

const reducer = (state = initialState, action: AnyAction ): IReducer => {
    switch(action.type) {
        case types.CREATE_GRID: 
            return {
                ...state,
                grid: createFullGrid()
            }
        case types.SET_SELECTED_BLOCK: 
            return {
                ...state,
                selectedBlock: action.payload
            }
        default:
            return state
    }
}

export default reducer