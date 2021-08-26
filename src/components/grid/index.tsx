import React from 'react';
import { Container, Row } from './styles';
import Block from './block';

export const Grid: React.FC = () => {
    return (
        <Container data-cy="grid-container">
            {React.Children.toArray([...Array(9)].map((_, rowIndex) => (
                <Row data-cy="grid-row-container">
                    {React.Children.toArray([...Array(9)].map((_, colIndex) => 
                        <Block colIndex={colIndex} rowIndex={rowIndex}/>
                    ))}
                </ Row>
            )))}
        </ Container>
    )
}