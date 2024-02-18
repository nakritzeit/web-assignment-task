import React , {useState} from 'react'
import styled from 'styled-components'
import { Button, Layout } from 'antd'
import MenuProfile from './Profile'
import { useRouter } from 'next/router'
import Cookies from 'js-cookie'
import { isAuthenticate,logout } from '../utils/auth'

const { Header } = Layout


const HeaderComponent = () => {
    const router = useRouter()
    const username = Cookies.get('username');

    const handdleClick = () => {
        router.push('/')
        logout();
    }

    return (
        <HeaderContainer>
            <HeadLogo onClick={() => router.push('/')} > Nakrit</HeadLogo>
            {isAuthenticate() ? (
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <MenuProfile />
                    <div style={{ marginRight: '8px' }}>{username}</div>
                    <LoginButton onClick={handdleClick}>
                    Logout
                    </LoginButton>
                </div>
            ) : (
                <LoginButton onClick={() => router.push('/login')}>
                    Login
                </LoginButton>
            )}
        </HeaderContainer>
    )
}
export default HeaderComponent

const HeaderContainer = styled.header`
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 70px;
    background-color:#B81F20;
    color: white;
    
    @media only screen and (max-width: 1240px) {
        padding: 16px 50px;
    }
`

// const WrapHeader = styled(Header)`
//     width: 100%;
//     height: 70px;
//     padding: 16px 70px;
//     display: flex;
//     align-items: center;
//     justify-content: space-between;
//     background-color: #333;
//     box-shadow: 0px 2px 4px -2px rgba(16, 24, 40, 0.06);
//     top: 0px;
//     z-index: 10;

//     @media only screen and (max-width: 1240px) {
//         padding: 16px 50px;
//     }
// `

const HeadLogo = styled.div`
    width: 80px;
    height: auto;
    cursor: pointer;
    font-size: 1.5rem;
    font-weight: 600
`

const LoginButton = styled.button`
    padding: 0.5rem 1rem;
    border: none;
    background-color: #848484;
    color: white;
    border-radius: 5px;
    cursor: pointer;
`

// const StyledButton = styled(Button)`
//     height: 40px;
//     padding: 8px 16px;
//     font-size: 0.875rem;
// `


// const StyledButtonLogout = styled(Button)`
//     margin-left: 8px;
//     margin-top: 16px;
//     height: 30px;
//     padding: 8px;
//     font-size: 0.4rem;
// `