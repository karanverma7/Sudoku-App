import styled, { css } from "styled-components"

const index = styled.h1`
    ${({ theme }) => css`
        color: ${theme.colors.white};
        text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.7);
        margin-top: 0;
        text-align: center;
        user-select: none;
    `}
`

export default index;