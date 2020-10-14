import { React, useHistory } from "libraries";
import { Menu, Layout } from 'antd';
import {
  PlusOutlined, 
  UserOutlined,
  LogoutOutlined, 
  ArrowUpOutlined, 
  HomeOutlined
} from '@ant-design/icons';
import style from './navigations.module.scss';

const { Sider } = Layout;
const Navigation = () => {
  const history = useHistory()
  return (
    <>
      <Sider
        className="nav__nav"
        breakpoint="xs"
        collapsedWidth="0"
        onBreakpoint={broken => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <Menu theme="light" mode="inline" defaultSelectedKeys={['5']} className={style.nav__menu}>
          <Menu.Item key="1" icon={<HomeOutlined />} onClick={() => history.push("dashboard")}>
            Dashboard
            </Menu.Item>
          <Menu.Item key="2" icon={<ArrowUpOutlined />} onClick={() => history.push("transfer")}>
            Transfer
            </Menu.Item>
          <Menu.Item key="3" icon={<PlusOutlined />} onClick={() => history.push("top-up")}>
            Top Up
            </Menu.Item>
          <Menu.Item key="4" icon={<UserOutlined />} onClick={() => history.push("profile")}>
            Profil
            </Menu.Item>
          <br />
          <Menu.Item key="5" icon={<LogoutOutlined />} onClick={() => history.push("auth/login")}>
            Logout
            </Menu.Item>
        </Menu>
      </Sider>
    </>
  );
}

export default Navigation