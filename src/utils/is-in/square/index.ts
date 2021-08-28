import { SQUARE, NUMBER } from 'typings'

interface IInput {
    square: SQUARE;
    value: NUMBER;
}

//  Checking if the value is present in the given sqaure
const index = ({ square, value }: IInput): boolean => {
    return [...square[0], ...square[1], ...square[2]].includes(value);
}

export default index