import { createGlobalStyle, css } from 'styled-components'
import bgImage from 'images/bgImage.png'

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
                    background-image: ${`url(${bgImage})`};
                    background-position: center;
                    background-size: cover;
                    color: ${theme.colors.black};
                    height: 100%;
                    font-family: sans-serif;
                }
            }
        }`
}`