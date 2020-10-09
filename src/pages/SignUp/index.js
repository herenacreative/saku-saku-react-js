import { Link, React, useHistory, connect, useState } from "libraries";
import { Row, Col, Typography, Input, Button, Form } from 'antd';
import { LeftAuth } from "components/organisms";
import { 
    EyeInvisibleOutlined, 
    EyeTwoTone, 
    MailOutlined, 
    LockOutlined,
    UserOutlined
} from '@ant-design/icons';
import '../../assets/scss/main.scss';
import {register} from '../../redux/actions/auth';

const { Title, Text } = Typography;

const SignUp = (props) => {
    const [user, setUsers] = useState({email:'', password: '', username: ''})
    const [form] = Form.useForm();
    const history= useHistory();

    const handleSubmit = (e) =>{
        e.preventDefault()
        props.register().then(()=>{
            // history.push("/dashboard")
            alert('success')
        }).then((result) => {
            if(result)
            history.push("auth/login")
        })

        .catch((error)=>{
            console.log(error);
        })
        
    }

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
                    <form onSubmit={handleSubmit}>
                    <div className="form__input">
                        <Input
                            value={user.username}
                            onChange={(id, val)=>setUsers({...user, username: val})}
                            size="large"
                            placeholder="Enter your username"
                            prefix={<UserOutlined className="site-form-item-icon" />}
                        />
                        <Input
                        value={user.email}
                            onChange={(id, val)=>setUsers({...user, email: val})}
                            size="large"
                            style={{margin: "10px 0 5px"}}
                            placeholder="Enter your e-mail"
                            prefix={<MailOutlined className="site-form-item-icon" />}
                        />
                        <Input.Password
                        value={user.password}
                            onChange={(id, val)=>setUsers({...user, password: val})}
                            size="large"
                            style={{margin: "5px 0 10px"}}
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
                    <Link to="/auth/create-new-pin">
                    <Button type="primary" htmlType="submit" block className="btn__primary">
                        Sign Up
                    </Button>
                    </Link>
                    </form>
                    <div className="footer__auth">
                        <Text>Don’t have an account? Let’s <Link to="/auth/login">Login</Link></Text>
                    </div>  
                </Col>
            </Row>
        </>
    )
}


const mapStateToProps = (state) => ({
  users: state.users
})

const mapDispatchToProps = {register}


export default connect(mapStateToProps, mapDispatchToProps)(SignUp)