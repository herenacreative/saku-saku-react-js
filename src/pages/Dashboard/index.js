import { React, Link } from "libraries";
import { Layout, Space, Typography } from 'antd';
import { Navigation } from "components/organisms";
import '../../assets/scss/main.scss'
const { Header, Footer, Sider, Content } = Layout;

const { Text } = Typography;
const Dashboard = () => {
    return (
        <>
            <Layout>
                <Header className="site-layout-sub-header-background header__nav" style={{ padding: 0 }} />
                <Layout className="sider__nav">
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
                        <div className="logo" />
                        <Navigation/>
                    </Sider>
                    <div  className="main__content">
                        <Content>Content</Content>
                    </div>
                   
                </Layout>
                <Footer className="footer__auth">
                    <div className="footer__sb">
                        <Text>Ant Design (default)</Text>
                        <div className="footer__start">
                            <div>Ant Design (default)</div>
                            <div>Ant Design (default)</div>
                        </div>
                    </div>
                    
                </Footer>
            </Layout>
        </>
    )
}

export default Dashboard
