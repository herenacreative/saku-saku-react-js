import { React, Link } from "libraries";
import { Layout, Menu } from 'antd';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import style from './navigations.module.scss'
const { Header, Content, Footer, Sider } = Layout;

const Navigation = () => {

return(
    <>
        <Menu theme="light" mode="inline" defaultSelectedKeys={['4']} className={style.nav__menu}>
            <Menu.Item key="1" icon={<UserOutlined />}>
                Dashboard
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                Transfer
            </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined />}>
                Top Up
            </Menu.Item>
            <Menu.Item key="4" icon={<UserOutlined />}>
                Profil
            </Menu.Item>
        </Menu>
       
    </>
);
}

export default Navigation