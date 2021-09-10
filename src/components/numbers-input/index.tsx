import React, { useCallback } from "react";
import { Button } from 'components'
import { Container } from './styles'
import { Dispatch, AnyAction } from 'redux'
import { useDispatch, useSelector} from 'react-redux'
import { BLOCK_COORDS, N, NUMBER } from 'typings'
import { IReducer, fillSelectedBlock } from 'reducers'

interface IState {
    selectedBlockCoords?: BLOCK_COORDS,
    selectedValue?: N,
}

export const NumbersInput: React.FC = () => {
    const dispatch = useDispatch<Dispatch<AnyAction>>()
    const { selectedBlockCoords, selectedValue } = useSelector<IReducer, IState>(({ selectedBlock, workingGrid }) => ({
        selectedBlockCoords: selectedBlock,
        selectedValue: workingGrid && selectedBlock
            ? workingGrid[selectedBlock[0]][selectedBlock[1]]
            : 0,
    }))

    const fillBlock = useCallback(
        (value: NUMBER) => {
          if (selectedBlockCoords && selectedValue === 0)
            dispatch(fillSelectedBlock(value, selectedBlockCoords))
        },
        [dispatch, selectedBlockCoords, selectedValue]
      )

    return (
        <Container>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(value => 
                <Button onClick={() => fillBlock(value as NUMBER)}>{value}</Button>
            )}
        </ Container>
    )
}