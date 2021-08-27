import styled, { css } from "styled-components";

export const Container = styled.div`
    ${({ theme }) => css`
        align-items: center;
        background-color: ${theme.colors.white};
        border: solid 1px ${theme.colors.black};
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
        background-color: ${theme.colors.lightBlue};
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