import { Dropdown, Avatar } from 'antd';
import React from 'react';
import {
    LogoutOutlined,
} from '@ant-design/icons'
import type { MenuProps } from 'antd'
import './index.less'
import { useSetState } from 'ahooks';
export const TaiAvatarLogin = (props: any) => {
    const { logout, authCode, userIcon, login, size = {} } = props
    const dropDownItems = [
        {
            label: '退出登录',
            key: 'logout',
            icon: <LogoutOutlined />,
        },
    ]
    const dropdownSelect: MenuProps['onClick'] = ({ key }) => {
        switch (key) {
            case 'logout':
                logout()
                break
        }
    }


    return (
        <div>
            {authCode ? (
                <Dropdown
                    menu={{
                        items: dropDownItems,
                        onClick: dropdownSelect,
                    }}
                >
                    <div className="userIcon" style={{ width: size.width, height: size.height }}>
                        <Avatar src={userIcon} />
                    </div>
                </Dropdown>
            ) : (
                <div
                    className="gologin"
                    onClick={login}
                >
                    登录
                </div>
            )}
        </div>

    )

}