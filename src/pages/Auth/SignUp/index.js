import { Link, React, useHistory, connect, useState } from "libraries";
import { Row, Col, message, Typography, Input, Button } from 'antd';
import { LeftAuth } from "components/organisms";
import {
  EyeInvisibleOutlined,
  EyeTwoTone,
  MailOutlined,
  LockOutlined,
  UserOutlined
} from '@ant-design/icons';
import '../../../assets/scss/main.scss';
import { register } from 'redux/actions';

const { Title, Text } = Typography;

const SignUp = (props) => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = {
      'username': username,
      'email': email,
      'password': password
    }
    props.register(data)
      .then(() => {
        message.success('Registers Successfully')
        history.push("/auth/login")
      })
      .catch((error) => {
        message.error('Upss Registers Not Successful...')
        console.log(error);
      })
  }

  return (
    <>
      <Row className="main__auth">
        <Col flex="1 1" className="left__auth">
          <LeftAuth />
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

          <form onSubmit={handleSubmit}>
            <div className="form__input">
              <Input
                value={username}
                onChange={e=> setUsername(e.target.value)}
                bordered={false}
                className="input__line"
                placeholder="Enter your username"
                prefix={<UserOutlined className="site-form-item-icon" />}
              />
              <Text type="secondary" className="font__12">*Min length username 3 character</Text>
              <Input
                value={email}
                onChange={e => setEmail(e.target.value)}
                bordered={false}
                className="input__line"
                placeholder="Enter your e-mail"
                prefix={<MailOutlined className="site-form-item-icon" />}
              />
              <Input.Password
                value={password}
                onChange={e => setPassword(e.target.value)}
                bordered={false}
                className="input__line"
                prefix={<LockOutlined className="site-form-item-icon" />}
                placeholder="Enter your password"
                iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
              />
              <Text type="secondary" className="font__12">*Min length password 3 character</Text>
              <div style={{ textAlign: "right" }}>
                <Link to="/auth/forgot-password">
                  <Text>Forgot Password?</Text>
                </Link>
              </div>
            </div>
            <Button type="primary" htmlType="submit" block className="btn__primary">
              Sign Up
            </Button>
          </form>
          
          <div className="footer__auth">
            <Text>Don’t have an account? Let’s
              <Link to="/auth/login"> Login</Link>
            </Text>
          </div>
        </Col>
      </Row>
    </>
  )
}

const mapStateToProps = (state) => ({
  users: state.users
})
const mapDispatchToProps = { register }

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)