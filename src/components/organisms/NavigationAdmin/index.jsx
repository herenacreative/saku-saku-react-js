import { React, useHistory, connect, withRouter } from "libraries";
import { Menu, Layout, Divider } from 'antd';
import {
  PlusOutlined, 
  UserOutlined,
  LogoutOutlined, 
  ArrowUpOutlined, 
  HomeOutlined,
  SettingOutlined
} from '@ant-design/icons';
import style from './navigations.module.scss';
import { logout } from 'redux/actions';

const { Sider } = Layout;
const { SubMenu } = Menu;

const NavigationAdmin = (props) => {
  const history = useHistory()

  const onLogout = () => {
    props.logout();
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
          <Menu.Item key="1" icon={<HomeOutlined />} onClick={() => history.push("dashboard-admin-2")}>
            Dashboard
          </Menu.Item>
          <SubMenu
            key="sub1"
            title={
              <span>
                <SettingOutlined />
                <span>Data</span>
              </span>
            }
          >
            <Menu.Item key="2" icon={<UserOutlined />} onClick={() => history.push("data-user")}>User Table</Menu.Item>
            <Menu.Item key="3" icon={<PlusOutlined />} onClick={() => history.push("data-topup")}>Top Up Table</Menu.Item>
            <Menu.Item key="4" icon={<ArrowUpOutlined />} onClick={() => history.push("data-transfer-admin")}>Transfer Table</Menu.Item>
          </SubMenu>
          {/* <Menu.Item key="5" icon={<ArrowUpOutlined />} onClick={() => history.push("transfer")}>
            Transfer
          </Menu.Item> */}
          {/* <Menu.Item key="6" icon={<PlusOutlined />} onClick={() => history.push("top-up")}>
            Top Up
          </Menu.Item> */}
          <SubMenu
            key="sub2"
            title={
              <span>
                <SettingOutlined />
                <span>Setting</span>
              </span>
            }
          >
            <Menu.Item key="7" icon={<UserOutlined />} onClick={() => history.push("profile")}>
              Profil User
            </Menu.Item>
            <Menu.Item key="8">Profile Aplication</Menu.Item>
          </SubMenu>
          <br />
          <Divider />
          
          <Menu.Item key="9" icon={<LogoutOutlined />} onClick={onLogout}>
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
const pushRoute = withRouter(NavigationAdmin)
export default connect(mapStateToProps, mapDispatchToProps)(pushRoute)