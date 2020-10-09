import { React, Link } from "libraries";
import { Layout, Space, Typography, Button, Input } from 'antd';
import { Footers, Headers, Navigation } from "components/organisms";
import '../../assets/scss/main.scss';
import { 
    EyeInvisibleOutlined, 
    EyeTwoTone, 
    MailOutlined, 
    LockOutlined 
} from '@ant-design/icons';
import { InputPin } from "components/molecules";
const { Header, Footer, Sider, Content } = Layout;

const { Text, Title } = Typography;
const ChangePin= () => {
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
                        <Content>
                            <Title level={5}> Change Password </Title>
                            <div  style={{width: "300px", margin: "20px 0 20px 0"}}>
                                <Text type="secondary">
                                    Enter your current 6 digits Zwallet PIN below to continue to the next steps.
                                </Text>
                            </div>
                            <div style={{width: "300px", margin: "20px 0 20px 0"}}>
                                <InputPin/>
                                <Button type="primary" block style={{margin: "20px 0 20px 0"}}>
                                    Primary
                                </Button>
                            </div>
                        </Content>
                    </div>
                   
                </Layout>
                <Footers/>
            </Layout>
        </>
    )
}

export default ChangePin

