import React from "react";
import { Button } from 'components'
import { Dispatch, AnyAction } from 'redux'
import { useDispatch } from 'react-redux'
import { createGrid } from 'reducers'

export const NewGameButton: React.FC = () => {
    const dispatch = useDispatch<Dispatch<AnyAction>>()

    const getNewGame = () => {
        if(window.confirm('All your progress will be lost, are you sure?'))
            dispatch(createGrid())
    }

    return (
        <Button onClick={getNewGame}>
            NEW GAME
        </Button>
    )
}