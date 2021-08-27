import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0;
`

export const Row = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-flow: row;

    &:nth-child(1) {
      border-top: 4px solid ${theme.colors.black};
    }

    &:nth-child(3), &:nth-child(6) {
      border-bottom: 3px solid ${theme.colors.black};
    }

    &:nth-child(9) {
      border-bottom: 4px solid ${theme.colors.black};
    }
  `}
`