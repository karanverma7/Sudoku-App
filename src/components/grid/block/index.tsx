import React from 'react'
import Container from './styles'
import { N } from 'typings'
import { IReducer } from 'reducers'
import { useSelector } from 'react-redux'

interface IProps {
    colIndex: number;
    rowIndex: number;
}

interface IState {
    value: N;
}

const Index: React.FC<IProps> = ({ colIndex, rowIndex }) => {
    const state = useSelector<IReducer, IState>(({ grid }) => ({
        value: grid ? grid[rowIndex][colIndex] : 0
    }))
    
    return <Container data-cy={`Block:${rowIndex}${colIndex}`}>
        {state.value === 0 ? '' : state.value}
    </Container>
}

export default Index;