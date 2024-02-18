import React, {
    useState,
} from 'react'
import styled from 'styled-components'
import { Button, Form, Input } from 'antd'
import { useRouter } from 'next/router'
import { login } from '../../utils/auth'
import Cookies from 'js-cookie'

const users:any = {
    'nakrit@gmail.com':{
        username:'nakrit@gmail.com',
        password:'1234'
    },
    'wiriya@gmail.com':{
        username:'wiriya@gmail.com',
        password:'1234'
    }

}
const Login = () =>{
    const router = useRouter()

    const [username, setUsername] = useState('nakrit@gmail.com');
    const [password, setPassword] = useState('');
    const [form] = Form.useForm()

    const handleSubmit = async (e:any) => {
        console.log(users ,password,"console.log");
        if(users[username] && users[username]?.password === password){
            Cookies.set('username', username)
            login();
            router.push('/');
        }else{
            alert('Invalid username or password')
        }
    }

    return(
        <Styled>
        <LoginImage />
        <LoginFormSection>
            <WrapperFormSection>
                <StyleTextTitle>เข้าสู่ระบบ</StyleTextTitle>
                <FormLogin className='form-login'>
                    <Form form={form} layout='vertical' name='form_login' initialValues={{ username: username}} onFinish={handleSubmit}>
                        <Form.Item
                            label='อีเมล'
                            name='username'
                            rules={[
                                { required: true, message: 'กรุณากรอก username ของคุณ' },
                            ]}
                        >
                            <StyledInput placeholder='ใส่ username ของคุณ' onChange={(e) => setUsername(e.target.value)}/>
                        </Form.Item>
                        <Form.Item
                            label='รหัสผ่าน'
                            name='password'
                            rules={[{ required: true, message: 'กรุณากรอกรหัสผ่านของคุณ' }]}
                        >
                            <StyledInputPassword placeholder='ใส่รหัสผ่านของคุณ' type='password' onChange={(e) => setPassword(e.target.value)} />
                        </Form.Item>

                        <Button className='login-form-button' htmlType='submit' >
                            ลงชื่อเข้าใช้งาน
                        </Button>
                    </Form>
                </FormLogin>
            </WrapperFormSection>
        </LoginFormSection>
    </Styled>
    )
}


export default Login

const Styled = styled.div`
    // display: flex;
    display: grid;
    grid-template-columns: repeat(12, minmax(0, 1fr));
    width: 100vw;
    height: 100vh;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 1200px) {
        grid-template-columns: repeat(1, minmax(0, 1fr));
    }
`

const LoginImage = styled.div`
    grid-column: span 5 / span 5;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url('/login.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    @media screen and (max-width: 1200px) {
        display: none;
    }
`

const LoginFormSection = styled.div`
    background-color: #ffff;
    grid-column: span 7 / span 7;
    width: 100%;
    height: 100%;
    overflow-y: scroll;

    ::-webkit-scrollbar {
        display: none;
    }
`

const WrapperFormSection = styled.div`
    width: 100%;
    min-height: calc(100% - 80px);
    margin: 40px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 1200px) {
        grid-column: span 1 / span 1;
    }
`

const StyleTextTitle = styled.span`
    font-size: 72px;
    font-weight: 700;
    background-color: #343f54;
    background-size: 100%;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
    margin-top: 8px;
    margin-bottom: 8px;
`

const FormLogin = styled.div`
    width: 549px;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: #111111;

    span {
        font-weight: 300;
    }

    @media screen and (max-width: 600px) {
        width: 300px;
    }

    .ant-form {
        width: 100%;
    }

    .ant-form-item {
        margin-bottom: 24px;
        min-width: 100%;

        @media screen and (max-width: 600px) {
            min-width: 100%;
        }
    }

    .ant-checkbox-inner {
        position: relative;
        top: 0;
        left: 0;
        display: block;
        width: 16px;
        height: 16px;
        direction: ltr;
        background-color: #fff;
        border: 1px solid #d9d9d9;
        border-radius: 4px;
        border-collapse: separate;
        transition: all 0.3s;
    }

    .ant-form-item-control-input-content {
        display: flex;
        justify-content: space-between;
    }

    .remember-item {
        margin-top: -12px;
        margin-bottom: 0;
    }

    .ant-form-item-control-input-content {
        @media screen and (max-width: 600px) {
            display: flex;
            flex-flow: column;
            justify-content: center;
            align-items: center;
        }
    }

    .ant-form-vertical .ant-form-item-label > label {
        color: #343f54;
    }

    .ant-checkbox-wrapper + .ant-checkbox-wrapper {
        margin-left: 0px;
    }

    .login-form-button {
        min-width: 100%;
        min-height: 56px;
        padding: 16px 20px;
        margin: 24px 0px;
        background-color: #B81F20;
        color: #ffff;

        span {
            font-size: 1rem;
            font-weight: 600;
        }

        :disabled {
            color: #d0d5dd;
            background: #f2f4f7;
            border: 1px solid #f2f4f7;
        }
    }
`

const StyledInput = styled(Input)`
    margin-bottom: 0;
    padding: 10px 14px;
`

const StyledInputPassword = styled(Input.Password)`
    min-height: 48px;
    margin-bottom: 0;
    padding: 10px 14px;
    border-radius: 8px;
`