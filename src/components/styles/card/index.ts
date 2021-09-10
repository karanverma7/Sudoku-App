import styled, { css } from "styled-components";
import gameBg from 'images/gameBg.jpg';

const index = styled.div`
    ${({theme}) => css`
        background-color: ${theme.colors.white};
        border-radius: 15px;
        display: flex;
        flex-direction: column;
        padding: 15px;
        margin: 0 20px;
        box-shadow: 4px 4px 5px rgba(0, 0, 0, 0.6);
        background-image: ${`url(${gameBg})`};
        background-size: contain;
    `}
`
export default index;