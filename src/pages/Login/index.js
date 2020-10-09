import { Link, React, useHistory, connect, history, useState, Component } from "libraries";
import { Row, Col, Typography, Input, Button, Form } from 'antd';
import { LeftAuth } from "components/organisms";
import { 
    EyeInvisibleOutlined, 
    EyeTwoTone, 
    MailOutlined, 
    LockOutlined 
} from '@ant-design/icons';
import {login} from '../../redux/actions/auth';
import '../../assets/scss/main.scss';

const { Title, Text } = Typography;

class Login extends Component{
    constructor(props){
        super(props)
            this.state = {
                username: '',
                password: ''
        }
    }

    handleSubmit = (e) =>{
        e.preventDefault()
        const log = {
            email: this.state.email,
            password: this.state.password
        }
        this.props.login(log)
        .then(()=>{
            // history.push("/dashboard")
            alert('success')
            this.props.history.push("/dashboard")
        // }).then((result) => {
        //     if(result)
        //     this.props.history.push("/dashboard")
        //     // this.props.users.data.token
        // })
        })
        .catch((error)=>{
            console.log(error);
        })
        
    }
    render(){
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
                    <form className="form__input" onSubmit={this.handleSubmit}>
                        {/* <Form form={form} name="control-hooks">
                        <Form.Item name="note" label="Note" rules={[{ required: true }]}>
                            <Input value={user.email}
                            onChange={(id, val)=>setUsers({...user, email: val})}
                             />
                        </Form.Item>
                        </Form> */}
                        <Input
                            // name={user.email}
                            value={this.props.email}
                            onChange={(e)=>this.setState({email: e.target.value})}
                            size="large"
                            placeholder="Enter your e-mail"
                            prefix={<MailOutlined className="site-form-item-icon" />}
                        />
                        <Input.Password
                            // password={log.password}
                            value={this.props.password}
                            onChange={(e)=>this.setState({password: e.target.value})}
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
                    
                        <Button type="primary" htmlType="submit" block className="btn__primary">
                            Login
                        </Button>
                    </form>
                    <div className="footer__auth">
                        <Text>Don’t have an account? Let’s <Link to="/auth/sign-up">Sign Up</Link></Text>
                    </div>  
                </Col>
            </Row>
        </>
    )
}
}

const mapStateToProps = (state) => ({
  users: state.users
})

const mapDispatchToProps = {login}


export default connect(mapStateToProps, mapDispatchToProps)(Login)