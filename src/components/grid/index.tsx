import React, { useEffect, useCallback } from 'react'
import useMouseTrap from 'react-hook-mousetrap'
import { Container, Row } from './styles'
import Block from './block'
import { Dispatch, AnyAction } from 'redux'
import { useDispatch, useSelector} from 'react-redux'
import { createGrid, setSelectedBlock, IReducer, fillSelectedBlock } from 'reducers'
import { BLOCK_COORDS, INDEX, N, NUMBER, GRID } from 'typings'

interface IState {
    selectedBlockCoords?: BLOCK_COORDS,
    selectedValue?: N,
    solvedGrid?: GRID,
}

export const Grid: React.FC = () => {
    const dispatch = useDispatch<Dispatch<AnyAction>>()
    const createGridHelper = useCallback(() => dispatch(createGrid()), [dispatch])
    const { selectedBlockCoords, selectedValue, solvedGrid } = useSelector<IReducer, IState>
    (({ selectedBlock, workingGrid, solvedGrid }) => ({
        selectedBlockCoords: selectedBlock,
        selectedValue: workingGrid && selectedBlock
            ? workingGrid[selectedBlock[0]][selectedBlock[1]]
            : 0,
        solvedGrid
    }))

    useEffect(() => {
        !solvedGrid && createGridHelper()
    }, [createGridHelper, solvedGrid])

    const fillBlock = useCallback(
        (value: NUMBER) => {
          if (selectedBlockCoords && selectedValue === 0)
            dispatch(fillSelectedBlock(value, selectedBlockCoords))
        },
        [dispatch, selectedBlockCoords, selectedValue]
      )
    
    useMouseTrap('1', () => fillBlock(1))
    useMouseTrap('2', () => fillBlock(2))
    useMouseTrap('3', () => fillBlock(3))
    useMouseTrap('4', () => fillBlock(4))
    useMouseTrap('5', () => fillBlock(5))
    useMouseTrap('6', () => fillBlock(6))
    useMouseTrap('7', () => fillBlock(7))
    useMouseTrap('8', () => fillBlock(8))
    useMouseTrap('9', () => fillBlock(9))

    useMouseTrap('up', () => {
        return selectedBlockCoords && selectedBlockCoords[0] > 0 &&
            dispatch(setSelectedBlock([(selectedBlockCoords[0]-1 as INDEX), selectedBlockCoords[1]]))
    })
    useMouseTrap('down', () => {
        return selectedBlockCoords && selectedBlockCoords[0] < 8 &&
            dispatch(setSelectedBlock([(selectedBlockCoords[0]+1 as INDEX), selectedBlockCoords[1]]))
    })
    useMouseTrap('left', () => {
        return selectedBlockCoords && selectedBlockCoords[1] > 0 &&
            dispatch(setSelectedBlock([selectedBlockCoords[0], (selectedBlockCoords[1]-1 as INDEX)]))
    }
)
    useMouseTrap('right', () => {
        return selectedBlockCoords && selectedBlockCoords[1] < 8 &&
            dispatch(setSelectedBlock([selectedBlockCoords[0], (selectedBlockCoords[1]+1 as INDEX)]))
    })

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