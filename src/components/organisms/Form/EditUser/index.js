import { React, connect, useEffect, useState, qs } from "libraries";
import { Drawer, Form, message, Button, Col, Row, Input, Image } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import { getIdUsers, getAllUsers, patchUser } from 'redux/actions';
import '../../../../assets/scss/main.scss';
import config from '../../../../configs/index';

const EditUser = (props) => {
  const [visible, setVisible] = useState(false)
  const { balance, email, photo, fullname, phone, role, username, verify } = props.detailUser
  const [user, setUser] = useState({
    balance,
    email,
    fullname,
    phone,
    photo,
    role,
    username,
    verify
  })
  const showDrawer = () => {
    setVisible(true)
  }

  const onClose = () => {
    setVisible(false)
  }

  useEffect(() => {
    console.log(props, 'ppp')
  })

  const handleSubmit = () => {
    const id = props.auth.data.id
    const token = props.auth.data.tokenLogin
    const formData = new FormData();
    formData.append('username', user.username)
    formData.append('email', user.email)
    formData.append('fullname', user.fullname)
    formData.append('photo', user.photo)
    formData.append('balance', user.balance)
    formData.append('phone', user.phone)
    formData.append('verify', user.verify)
    formData.append('role', user.role)
    delete formData['id'];
    
    props.patchUser(id, formData, token)
      .then(() => {
        message.success('Update Profile Successfully')
        // setVisible(false)
        // window.location.reload();
      })
      .catch((error) => {
        message.error('Upss Update Profile Not Successful...')
        console.log(error);
      })
  }

  return (
    <>
      <Button type="primary" shape="circle" onClick={showDrawer}>
        <EditOutlined />
      </Button>
      <Drawer
        title="Create a new account"
        width={720}
        onClose={onClose}
        visible={visible}
        bodyStyle={{ paddingBottom: 80 }}
        footer={
          <div
            style={{
              textAlign: 'right',
            }}
          >
            <Button onClick={onClose} style={{ marginRight: 8 }}>
              Cancel
              </Button>
            <Button onClick={onClose} type="primary">
              Submit
              </Button>
          </div>
        }
      >
        <Form layout="vertical" hideRequiredMark onFinish={handleSubmit}>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item name="username" label="Username">
                <Input
                  value={user.username}
                  onChange={(e) => setUser({ ...user, username: e.target.value })}
                  placeholder="Please enter user username"
                />
                {console.log(user.username)}
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="email" label="Email">
                <Input
                  value={user.email}
                  onChange={(e) => setUser({...user, email: e.target.value })}
                  placeholder="Please enter user email"
                />
                {console.log(user.email)}
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item name="fullname" label="Fullname">
                <Input
                  value={user.fullname}
                  onChange={(e) => setUser({...user, fullname: e.target.value })} 
                  placeholder="Please enter user fullname"
                />
                {console.log(user.fullname)}
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="photo" label="Photo">
                <Input 
                  type="file"
                  value={user.photo}
                  onChange={(e) => setUser({ ...user, photo: e.target.files[0] })}
                  placeholder="Please enter user photo"
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item name="balance" label="balance">
                <Input
                  value={user.balance}
                  onChange={(e) => setUser({ ...user, balance: e.target.value })}
                  placeholder="Please enter user balance"
                />
                {console.log(user.balance)}
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="Phone" label="Phone">
                <Input
                  value={user.phone}
                  onChange={(e) => setUser({ ...user, phone: e.target.value })}
                  placeholder="Please enter user phone"
                />
                {console.log(user.phone)}
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item name="verify" label="Verify" >
                <Input
                  value={user.verify}
                  onChange={(e) => setUser({ ...user, verify: e.target.value })}
                  placeholder="Please enter user verify"
                />
                {console.log(user.verify)}
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="role" label="role">
                <Input
                  value={user.role}
                  onChange={(e) => setUser({ ...user, role: e.target.value })}
                  placeholder="Please enter user role"
                />
                {console.log(user.role)}
              </Form.Item>
            </Col>
          </Row>
          {/* <Row gutter={16}>
              <Col span={24}>
                <Form.Item
                  name="description"
                  label="Description"
                  // rules={[
                    {
                      required: true,
                      message: 'please enter url description',
                    },
                  ]}
                >
                  <Input.TextArea rows={4} placeholder="please enter url description" />
                </Form.Item>
              </Col>
            </Row> */}
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item>
                <Button style={{ marginRight: "20px" }} type="primary" htmlType="submit" className="btn__primary">
                  Update Profile
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Drawer>
    </>
  );
}

const mapStateToProps = (state) => ({
  users: state.users,
  auth: state.auth
})
const mapDispatchToProps = { getIdUsers, getAllUsers, patchUser }

export default connect(mapStateToProps, mapDispatchToProps)(EditUser)