import { React, useState, useHistory, connect } from "libraries";
import { Layout, Typography, Button, message, Input } from 'antd';
import { Footers, Headers, Navigation } from "components/organisms";
import '../../../assets/scss/main.scss';
import {
  EyeInvisibleOutlined,
  EyeTwoTone,
  LockOutlined
} from '@ant-design/icons';
import { patchUser } from 'redux/actions';

const { Content } = Layout;
const { Text, Title } = Typography;

const ChangePassword = (props) => {
  const [oldPassword, setOldPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    const id = props.auth.data.id
    const token = props.auth.data.tokenLogin
    const formData = {
      'password': confirmPassword
    }
    console.log(props.auth.data, 'kkk')
    if (oldPassword === props.auth.data.password) {
      if(newPassword === confirmPassword){
        props.patchUser(id, formData, token)
        .then(() => {
          message.success('Change Password Successfully')
        })
        .catch((error) => {
          message.error('Upss Change Password Not Successful...')
          console.log(error);
        })
      }else{
        message.error('Password Baru Tidak Sama')
      }
    }else{
      message.error('Password lama Salah')
    }
  }

  return (
    <>
      <Layout className="dashboard__temp">
        <Headers />
        <Layout className="sider__nav">
          <Navigation />
          <div className="main__content">
            <Content>
              <Title level={5}> Change Password </Title>
              <div style={{ width: "300px", margin: "20px 0 20px 0" }}>
                <Text type="secondary">
                  You must enter your current password and then type your new password twice.
                  </Text>
              </div>
              <form onSubmit={handleSubmit}>
              <div style={{ width: "300px", margin: "20px 0 20px 0" }}>
                <Input.Password
                  onChange={e => setOldPassword(e.target.value)}
                  value={oldPassword}
                  className="input__line"
                  bordered={false}
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  placeholder="Current password"
                  iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                />
                <Input.Password
                  onChange={e => setNewPassword(e.target.value)}
                  value={newPassword}
                  className="input__line"
                  bordered={false}
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  placeholder="New password"
                  iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                />
                <Input.Password
                  onChange={e => setConfirmPassword(e.target.value)}
                  value={confirmPassword}
                  className="input__line"
                  bordered={false}
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  placeholder="Repeat New password"
                  iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                />
                <Button htmlType="submit" block className="btn__primary" block>
                  Change Password
                </Button>
              </div>
              </form>
            </Content>
          </div>

        </Layout>
        <Footers />
      </Layout>
    </>
  )
}

  const mapStateToProps = (state) => ({
    users: state.users,
    auth: state.auth
  })
  const mapDispatchToProps = { patchUser }

  export default connect(mapStateToProps, mapDispatchToProps)(ChangePassword)