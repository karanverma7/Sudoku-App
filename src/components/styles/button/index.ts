import styled, { css } from "styled-components";

const index = styled.div`
${({ theme }) => css`   
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${theme.colors.black};
    color: ${theme.colors.white};
    border-radius: 5px;
    border: 2px solid ${theme.colors.black};
    padding: 4px 8px;
    cursor: pointer;
    transition: ${theme.transition};

    &:hover {
        background-color: transparent;
        color: ${theme.colors.black};
        font-weight: bold;
    }
`}`

export default index;