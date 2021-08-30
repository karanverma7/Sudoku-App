import { Action, AnyAction } from 'redux'
import { BLOCK_COORDS } from 'typings'
import * as types from './types'

export const createGrid = (): Action => ({ type: types.CREATE_GRID })

export const setSelectedBlock = (coords: BLOCK_COORDS): AnyAction => ({
    type: types.SET_SELECTED_BLOCK,
    payload: coords,
})