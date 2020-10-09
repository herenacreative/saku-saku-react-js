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
const { Header, Footer, Sider, Content } = Layout;

const { Text, Title } = Typography;
const ChangePassword
 = () => {
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
                                    You must enter your current password and then type your new password twice.
                                </Text>
                            </div>
                            <div style={{width: "300px", margin: "20px 0 20px 0"}}>
                                <Input.Password
                                    size="large"
                                    style={{margin: "10px 0 10px"}}
                                    prefix={<LockOutlined className="site-form-item-icon" />}
                                    placeholder="Enter your password"
                                    iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                                />
                                <Input.Password
                                    size="large"
                                    style={{margin: "10px 0 10px"}}
                                    prefix={<LockOutlined className="site-form-item-icon" />}
                                    placeholder="Enter your password"
                                    iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                                />
                                <Input.Password
                                    size="large"
                                    style={{margin: "10px 0 10px"}}
                                    prefix={<LockOutlined className="site-form-item-icon" />}
                                    placeholder="Enter your password"
                                    iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                                />
                                <Button type="primary" block>
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

export default ChangePassword

