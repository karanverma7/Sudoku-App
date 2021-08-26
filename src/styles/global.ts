import { createGlobalStyle, css } from 'styled-components';

export default createGlobalStyle`
    ${({ theme }) => css`
        html {
            height: 100%;

            body {
                display: flex;
                flex-direction: column;
                height: 100%;
                margin: 0;

                #root {
                    background: ${theme.colors.background};
                    color: ${theme.colors.black};
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    height: 100%;
                    font-family: sans-serif;
                    padding: 20px;
                }
            }
        }`
}`