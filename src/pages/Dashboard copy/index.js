import { React, Link } from "libraries";
import { Layout, Space, Typography } from 'antd';
import { Footers, Headers, Navigation } from "components/organisms";
import '../../assets/scss/main.scss'
const { Header, Footer, Sider, Content } = Layout;

const { Text } = Typography;
const Dashboard = () => {
    return (
        <>
            <Layout className="dashboard__temp">
                <Headers/>
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
                        {/* <div className="nav"> */}
                            <Navigation/>
                        {/* </div> */}
                    </Sider>
                    <div  className="main__content">
                        <Content>Content</Content>
                    </div>
                   
                </Layout>
                <Footers/>
            </Layout>
        </>
    )
}

export default Dashboard
