import React, { useEffect, useCallback } from 'react'
import { Container, Row } from './styles'
import Block from './block'
import { Dispatch, AnyAction } from 'redux'
import { useDispatch } from 'react-redux'
import { createGrid } from 'reducers'


export const Grid: React.FC = () => {
    const dispatch = useDispatch<Dispatch<AnyAction>>()
    const createGridHelper = useCallback(() => dispatch(createGrid()), [dispatch])
    
    useEffect(() => {
        createGridHelper()
    }, [createGridHelper])

    return (
        <Container data-cy="grid-container">
            {React.Children.toArray([...Array(9)].map((_, rowIndex) => (
                <Row data-cy="grid-row-container">
                    {React.Children.toArray([...Array(9)].map((_, colIndex) => 
                        <Block colIndex={colIndex} rowIndex={rowIndex} />
                    ))}
                </ Row>
            )))}
        </ Container>
    )
}