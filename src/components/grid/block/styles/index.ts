import styled, { css } from "styled-components";

interface IProps {
    isActive?: boolean;
}

const index = styled.div<IProps>`
    ${({ isActive, theme }) => css`
        align-items: center;
        border: solid 1px ${theme.colors.black};
        background-color: ${isActive ? theme.colors.black : ''};
        color: ${isActive ? theme.colors.white : ''};
        cursor: pointer;
        display: flex;
        flex-grow: 1;
        font-size: 18px;
        height: auto;
        justify-content: center;
        transition: ${theme.transition};
        user-select: none;

        &:before {
        padding-top: 100%;
        content: '';
        float: left;
        }

        &:hover {
        background-color: ${theme.colors.black};
        color: ${theme.colors.white}
        }

        &:nth-child(1) {
        border-left: 4px solid ${theme.colors.black};
        }

        &:nth-child(3), &:nth-child(6) {
        border-right: 3px solid ${theme.colors.black};
        }

        &:nth-child(9) {
        border-right: 4px solid ${theme.colors.black};
        }
    `}
`

export default index