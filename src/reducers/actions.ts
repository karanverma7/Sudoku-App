import { Action, AnyAction } from 'redux'
import { BLOCK_COORDS, NUMBER } from 'typings'
import * as types from './types'

export const createGrid = (): Action => ({ type: types.CREATE_GRID })

export const setSelectedBlock = (coords: BLOCK_COORDS): AnyAction => ({
    type: types.SET_SELECTED_BLOCK,
    payload: coords,
})

export const fillSelectedBlock = (value: NUMBER, coords: BLOCK_COORDS): AnyAction => ({ 
    type: types.FILL_SELECTED_BLOCK,
    payload: { coords, value } 
})