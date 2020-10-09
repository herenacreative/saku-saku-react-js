import { Link, React, useHistory, connect, useState } from "libraries";
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

const Login = (props) => {
    const [log, setLog] = useState({email:'', password: ''})
    const [form] = Form.useForm();
    const history= useHistory();

    const handleSubmit = (e) =>{
        // const log = {
        //     email: log.email,
        //     password: log.password
        // }
        e.preventDefault()
        props.login(log).then(()=>{
            // history.push("/dashboard")
            alert('success')
        }).then((result) => {
            if(result)
            history.push("/dashboard")
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
                    <form className="form__input" onSubmit={handleSubmit}>
                        {/* <Form form={form} name="control-hooks">
                        <Form.Item name="note" label="Note" rules={[{ required: true }]}>
                            <Input value={user.email}
                            onChange={(id, val)=>setUsers({...user, email: val})}
                             />
                        </Form.Item>
                        </Form> */}
                        <Input
                            // name={user.email}
                            value={log.email}
                            onChange={(id, val)=>setLog({...log, email: val})}
                            size="large"
                            placeholder="Enter your e-mail"
                            prefix={<MailOutlined className="site-form-item-icon" />}
                        />
                        <Input.Password
                            // password={log.password}
                            value={log.password}
                            onChange={(id, val)=>setLog({...log, password: val})}
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

const mapStateToProps = (state) => ({
  users: state.users
})

const mapDispatchToProps = {login}


export default connect(mapStateToProps, mapDispatchToProps)(Login)