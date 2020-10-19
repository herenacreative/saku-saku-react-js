import { React, useHistory, connect, withRouter } from "libraries";
import { Menu, Layout } from 'antd';
import {
  PlusOutlined, 
  UserOutlined,
  LogoutOutlined, 
  ArrowUpOutlined, 
  HomeOutlined
} from '@ant-design/icons';
import style from './navigations.module.scss';
import { logout } from 'redux/actions';

const { Sider } = Layout;

const Navigation = (props) => {
  const history = useHistory()

  const logout = () => {
    console.log(localStorage, 'sl')
    const TokenLogin = props.auth
    localStorage.removeItem(TokenLogin);
    props.logout()
    console.log(props.auth.data, 'jjj')
    props.history.push("/auth/login")
  }

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
          <Menu.Item key="5" icon={<LogoutOutlined />} onClick={logout}>
            Logout
            </Menu.Item>
        </Menu>
      </Sider>
    </>
  );
}

const mapStateToProps = (state) => ({
  auth: state.auth
})
const mapDispatchToProps = { logout }
const pushRoute = withRouter(Navigation)
export default connect(mapStateToProps, mapDispatchToProps)(pushRoute)