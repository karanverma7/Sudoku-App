import React, { useEffect, useCallback } from 'react'
import useMouseTrap from 'react-hook-mousetrap'
import { Container, Row } from './styles'
import Block from './block'
import { Dispatch, AnyAction } from 'redux'
import { useDispatch, useSelector} from 'react-redux'
import { createGrid, setSelectedBlock, IReducer } from 'reducers'
import { BLOCK_COORDS, INDEX } from 'typings'

interface IState {
    selectedBlock?: BLOCK_COORDS
}

export const Grid: React.FC = () => {
    const dispatch = useDispatch<Dispatch<AnyAction>>()
    const createGridHelper = useCallback(() => dispatch(createGrid()), [dispatch])
    const state = useSelector<IReducer, IState>(({ selectedBlock }) => ({
        selectedBlock
    }))

    useEffect(() => {
        createGridHelper()
    }, [createGridHelper])

    const moveUp = () => {
        return state.selectedBlock && state.selectedBlock[0] > 0 &&
            dispatch(setSelectedBlock([(state.selectedBlock[0]-1 as INDEX), state.selectedBlock[1]]))
    }

    const moveDown = () => {
        return state.selectedBlock && state.selectedBlock[0] < 8 &&
            dispatch(setSelectedBlock([(state.selectedBlock[0]+1 as INDEX), state.selectedBlock[1]]))
    }

    const moveLeft = () => {
        return state.selectedBlock && state.selectedBlock[1] > 0 &&
            dispatch(setSelectedBlock([state.selectedBlock[0], (state.selectedBlock[1]-1 as INDEX)]))
    }

    const moveRight = () => {
        return state.selectedBlock && state.selectedBlock[1] < 8 &&
            dispatch(setSelectedBlock([state.selectedBlock[0], (state.selectedBlock[1]+1 as INDEX)]))
    }

    useMouseTrap('up', moveUp)
    useMouseTrap('down', moveDown)
    useMouseTrap('left', moveLeft)
    useMouseTrap('right', moveRight)

    return (
        <Container data-cy="grid-container">
            {React.Children.toArray([...Array(9)].map((_, rowIndex) => (
                <Row data-cy="grid-row-container">
                    {React.Children.toArray([...Array(9)].map((_, colIndex) => 
                        <Block colIndex={colIndex as INDEX} rowIndex={rowIndex as INDEX} />
                    ))}
                </ Row>
            )))}
        </ Container>
    )
}