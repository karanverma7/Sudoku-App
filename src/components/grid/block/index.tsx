import React from "react";
import { Container } from './styles';

interface IProps {
    colIndex: number;
    rowIndex: number;
}

const Index: React.FC<IProps> = ({ colIndex, rowIndex }) => {
    return <Container data-cy={`Block:${rowIndex}${colIndex}`}>X</Container>
}

export default Index;