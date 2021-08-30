import React from 'react'
import Container from './styles'
import { INDEX, N } from 'typings'
import { IReducer, setSelectedBlock } from 'reducers'
import { useDispatch, useSelector } from 'react-redux'
import { Dispatch, AnyAction } from 'redux'

interface IProps {
    colIndex: INDEX;
    rowIndex: INDEX;
}

interface IState {
    value: N;
    isActive: boolean;
}

const Index: React.FC<IProps> = ({ colIndex, rowIndex }) => {
    const dispatch = useDispatch<Dispatch<AnyAction>>();
    const state = useSelector<IReducer, IState>((state) => ({
        value: state.grid ? state.grid[rowIndex][colIndex] : 0,
        isActive: state.selectedBlock && (state.selectedBlock[0] === rowIndex && state.selectedBlock[1] === colIndex) ? true : false,
    }))
    
    const handleClick = () => {
        return !state.isActive && dispatch(setSelectedBlock([rowIndex, colIndex]));
    }

    return <Container isActive={state.isActive} data-cy={`Block:${rowIndex}${colIndex}`} onClick={handleClick}>
        {state.value === 0 ? '' : state.value}
    </Container>
}

export default Index;