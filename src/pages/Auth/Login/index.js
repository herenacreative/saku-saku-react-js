import { Link, React, connect, Component } from "libraries";
import { Row, Col, message, Typography, Input, Button } from 'antd';
import { LeftAuth } from "components/organisms";
import {
  EyeInvisibleOutlined,
  EyeTwoTone,
  MailOutlined,
  LockOutlined
} from '@ant-design/icons';
import { login } from 'redux/actions';
import '../../../assets/scss/main.scss';

const { Title, Text } = Typography;

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const log = {
      email: this.state.email,
      password: this.state.password
    }
    this.props.login(log)
      .then(() => {
        message.success('Success Login...');
        console.log(this.props.auth, 'sem')
        if(this.props.auth.data.verify === 1){
          if (this.props.auth.data.role === 3){
            this.props.history.push("/dashboard")
          }else{
            this.props.history.push("/profile")
          }
          // this.props.history.push("/auth/create-new-pin")
        }else{
          this.props.history.push("/auth/create-new-pin")
        }
        
        // this.props.history.push("/dashboard")
        
      })
      .catch((error) => {
        message.error('Email Or Password is Wrong')
        console.log(error);
      })
  }

  render() {
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
            
            <form className="form__input" onSubmit={this.handleSubmit}>
              <Input
                value={this.props.email}
                bordered={false}
                className="input__line"
                onChange={(e) => this.setState({ email: e.target.value })}
                placeholder="Enter your e-mail"
                prefix={<MailOutlined className="site-form-item-icon"/>}
              />
              <Input.Password
                value={this.props.password}
                bordered={false}
                className="input__line"
                onChange={(e) => this.setState({ password: e.target.value })}
                prefix={<LockOutlined className="site-form-item-icon" />}
                placeholder="Enter your password"
                iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
              />
              <div style={{ textAlign: "right" }}>
                <Link to="/auth/forgot-password">
                  <Text>Forgot Password?</Text>
                </Link>
              </div>
              <Button type="primary" htmlType="submit" block className="btn__primary">
                Login
              </Button>
            </form>
            
            <div className="footer__auth">
              <Text>Don’t have an account? Let’s 
                <Link to="/auth/sign-up"> Sign Up</Link>
              </Text>
            </div>
          </Col>
        </Row>
      </>
    )
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth
})
const mapDispatchToProps = { login }

export default connect(mapStateToProps, mapDispatchToProps)(Login)