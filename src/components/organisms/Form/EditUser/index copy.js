import { React, connect, useEffect, useState, qs } from "libraries";
import { Drawer, Form, message, Button, Col, Row, Input } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import { getIdUsers, getAllUsers, patchUser } from 'redux/actions';
import '../../../../assets/scss/main.scss';

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
    // e.preventDefault()
    const id = props.auth.data.id
    const token = props.auth.data.tokenLogin
    const formData = new FormData();
    formData.append('username', user.username)
    // console.log(username, 'l', user.username )
    props.patchUser(id, formData, token)
      .then(() => {
        message.success('Update Profile Successfully')
        setVisible(false)
        window.location.reload();
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
        {/* <form onSubmit={handleSubmit}> */}
        <Form layout="vertical" hideRequiredMark onFinish={handleSubmit}>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                label="Username"
                // rules={[{ required: true, message: 'Please enter user username' }]}
              >
                <Input
                  value={user.username}
                  placeholder="Please enter user username"
                  // onChange={e => setUser(e.target.value)}
                  onChange={(e) => setUser({ username: e.target.value })}
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="email"
                label="Email"
                // rules={[{ required: true, message: 'Please enter user Email' }]}
              >
                <Input placeholder="Please enter user Email" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="fullname"
                label="Fullname"
                // rules={[{ required: true, message: 'Please enter user Fullname' }]}
              >
                <Input placeholder="Please enter user Fullname" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="photo"
                label="Photo"
                // rules={[{ required: true, message: 'Please enter user photo' }]}
              >
                <Input type="file" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="password"
                label="Password"
                // rules={[{ required: true, message: 'Please enter user password' }]}
              >
                <Input placeholder="Please enter user password" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="Pin"
                label="Pin"
                // rules={[{ required: true, message: 'Please enter user Pin' }]}
              >
                <Input placeholder="Please enter user Pin" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="verify"
                label="Verify"
                // rules={[{ required: true, message: 'Please enter user verify' }]}
              >
                <Input placeholder="Please enter user verify" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="phone"
                label="Phone"
                // rules={[{ required: true, message: 'Please enter user Phone' }]}
              >
                <Input placeholder="Please enter user Phone" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            {/* <Col span={12}>
                <Form.Item
                  name="photo"
                  label="Photo"
                  // rules={[{ required: true, message: 'Please enter user photo' }]}
                >
                  <Input type="file" />
                </Form.Item>
              </Col> */}
            <Col span={12}>
              <Form.Item
                name="role"
                label="Role"
                // rules={[{ required: true, message: 'Please enter user role' }]}
              >
                <Input placeholder="Please enter user Role" />
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
        {/* </form> */}
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