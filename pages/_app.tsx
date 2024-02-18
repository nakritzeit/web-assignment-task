import { createGlobalStyle,ThemeProvider } from 'styled-components'
import {theme} from 'theme/themeConfig'

function MyApp({ Component, pageProps } :any) {
    return (
        <>
            <GlobalStyle/>
            <ThemeProvider theme={theme}>
              <Component {...pageProps} />
            </ThemeProvider>
        </>
    )
}

const GlobalStyle = createGlobalStyle`
    body {
        margin:0;
        padding:0;
        font-family: 'Arial' , sans-serif;
        background-color: #d9d9d9;
        color: #000000a8;
    }
`
export default MyApp
