import { useState } from "react";
import styled, { ThemeProvider } from 'styled-components'
import { Layout } from "antd";
import { theme } from "theme/themeConfig";
import Header from 'components/Header'

// const { Content } = Layout


const CustomLayout = ({ children } : any) => {    
    return(
        <ThemeProvider theme={theme}>
            <Layout>
                <StyledLayout>
                    <Header/>
                    <Content>{children}</Content>
                </StyledLayout>
            </Layout>
        </ThemeProvider>
    )
}

export default CustomLayout

const Tab = styled.div`
    cursor: pointer;
    padding: 10px;
    border-bottom : ${(props) => (props.about ? '2px solid white' : '2px solid transparent')};
`
const Content = styled.div`
    padding: 20px;
`

const StyledLayout = styled(Layout)`
    min-height: 100vh
`