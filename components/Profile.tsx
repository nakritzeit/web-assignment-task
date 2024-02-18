import { UserOutlined } from '@ant-design/icons'
import { Avatar } from 'antd'
import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Cookies from 'js-cookie'

const MenuProfile = () => {
    const token = Cookies.get('accessToken')
    const [dataProfile, setProfile] = useState<any>()

    useEffect(() => {
        const data = token
        setProfile(data)
    }, [token])

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <span style={{ paddingRight: 8 }}>
                <Avatar icon={<UserOutlined />} size={24} />
            </span>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <ProfileNameText>{dataProfile?.email}</ProfileNameText>
            </div>
        </div>
    )
}

const ProfileNameText = styled.span`
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
    color: #141414;
`

export default MenuProfile
