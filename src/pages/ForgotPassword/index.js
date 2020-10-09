import { React, Link } from "libraries";
import { Row, Col, Typography, Input, Button } from 'antd';
import { LeftAuth } from "components/organisms";
import { MailOutlined } from '@ant-design/icons';
import '../../assets/scss/main.scss'

const { Title, Text } = Typography;

const ForgotPassword = () => {
    return (
        <>
            <Row className="main__auth">
                <Col flex="1 1" className="left__auth">
                    <LeftAuth/>
                </Col>
                <Col flex="1 1" className="right__auth">
                    <Title level={2} className="font__large">
                        Did You Forgot Your Password? Don’t Worry, 
                        You Can Reset Your Password In a Minutes.
                    </Title>
                    <Text type="secondary">
                        To reset your password, you must type your e-mail and we will send a link 
                        to your email and you will be directed to the reset password screens.
                    </Text>
                    <div className="form__input">
                        <Input
                            size="large"
                            placeholder="Enter your e-mail"
                            prefix={<MailOutlined className="site-form-item-icon" />}
                        />
                    </div>
                    <Link to="/auth/create-new-password">
                    <Button type="primary" block className="btn__primary">
                        Confirm
                    </Button>
                    </Link>
                </Col>
            </Row>
        </>
    )
}

export default ForgotPassword