import { React } from "libraries";
import { Row, Col, Typography, Input, Button } from 'antd';
import { LeftAuth } from "components/organisms";
import {
  EyeInvisibleOutlined,
  EyeTwoTone,
  LockOutlined
} from '@ant-design/icons';
import '../../../assets/scss/main.scss'

const { Title, Text } = Typography;

const CreateNewPassword = () => {
  return (
    <>
      <Row className="main__auth">
        <Col flex="1 1" className="left__auth">
          <LeftAuth />
        </Col>
        <Col flex="1 1" className="right__auth">
          <Title level={2} className="font__large">
            Did You Forgot Your Password? Don’t Worry,
            You Can Reset Your Password In a Minutes.
          </Title>
          <Text type="secondary">
            Now you can create a new password for your Zwallet account.
            Type your password twice so we can confirm your new passsword.
          </Text>
          <div className="form__input">
            <Input.Password
              bordered={false}
              className="input__line"
              prefix={<LockOutlined className="site-form-item-icon" />}
              placeholder="Enter your password"
              iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
            />
            <Input.Password
              bordered={false}
              className="input__line"
              prefix={<LockOutlined className="site-form-item-icon" />}
              placeholder="Enter your password"
              iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
            />
          </div>
          <Button type="primary" block className="btn__primary">
            Reset Password
          </Button>
        </Col>
      </Row>
    </>
  )
}

export default CreateNewPassword