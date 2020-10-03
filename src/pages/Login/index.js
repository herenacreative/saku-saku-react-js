import { Link, React } from "libraries";
import { Row, Col, Typography, Input, Button } from 'antd';
import { LeftAuth } from "components/organisms";
import { 
    EyeInvisibleOutlined, 
    EyeTwoTone, 
    MailOutlined, 
    LockOutlined 
} from '@ant-design/icons';
import '../../assets/scss/main.scss'

const { Title, Text } = Typography;

const Login = () => {
    return (
        <>
            <Row className="main__auth">
                <Col flex="1 1" className="left__auth">
                    <LeftAuth/>
                </Col>
                <Col flex="1 1" className="right__auth">
                    <Title level={2} className="font__large">
                        Start Accessing Banking Needs With All Devices and All Platforms
                        With 30.000+ Users
                    </Title>
                    <Text type="secondary">
                        Transfering money is eassier than ever, you can access Saku Saku wherever 
                        you are. Desktop, laptop, mobile phone? we cover all of that for you!
                    </Text>
                    <div className="form__input">
                        <Input
                            size="large"
                            placeholder="Enter your e-mail"
                            prefix={<MailOutlined className="site-form-item-icon" />}
                        />
                        <Input.Password
                            size="large"
                            style={{margin: "10px 0 10px"}}
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            placeholder="Enter your password"
                            iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                        />
                        <div style={{textAlign: "right"}}>
                            <Link to="/auth/forgot-password">
                                <Text>Forgot Password?</Text>
                            </Link>
                        </div>
                    </div>
                    <Button type="primary" block className="btn__primary">
                        Login
                    </Button>
                    <div className="footer__auth">
                        <Text>Don’t have an account? Let’s <Link to="/auth/sign-up">Sign Up</Link></Text>
                    </div>  
                </Col>
            </Row>
        </>
    )
}

export default Login