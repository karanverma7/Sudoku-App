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
    isUserInput: boolean;
}

const Index: React.FC<IProps> = ({ colIndex, rowIndex }) => {
    const dispatch = useDispatch<Dispatch<AnyAction>>();
    const { value, isActive, isUserInput } = useSelector<IReducer, IState>
    (({selectedBlock, workingGrid, challengeGrid}) => ({
        value: workingGrid ? workingGrid[rowIndex][colIndex] : 0,
        isActive: selectedBlock 
            && (selectedBlock[0] === rowIndex 
            && selectedBlock[1] === colIndex)
            ? true 
            : false,
        isUserInput: challengeGrid 
            ? challengeGrid[rowIndex][colIndex] === 0 
            : false,
    }))
    
    const handleClick = () => {
        return !isActive && dispatch(setSelectedBlock([rowIndex, colIndex]));
    }
    console.log({isUserInput})

    return <Container isUserInput={isUserInput} isActive={isActive} data-cy={`Block:${rowIndex}${colIndex}`} onClick={handleClick}>
        {value === 0 ? '' : value}
    </Container>
}

export default Index;