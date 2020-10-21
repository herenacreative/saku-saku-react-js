import { React, connect, Link, useEffect, useState, qs } from "libraries";
import { Drawer, Form, Button, Col, Row, Input } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

const EditUser = () => {
  const [visible, setVisible] = useState(false)

  const showDrawer = () => {
    setVisible(true)
  }

  const onClose = () => {
    setVisible(false)
  }

  return (
    <>
      <Button type="primary" onClick={showDrawer}>
        <PlusOutlined />
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
        <Form layout="vertical" hideRequiredMark>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="username"
                label="Username"
                rules={[{ required: true, message: 'Please enter user username' }]}
              >
                <Input placeholder="Please enter user username" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="email"
                label="Email"
                rules={[{ required: true, message: 'Please enter user Email' }]}
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
                rules={[{ required: true, message: 'Please enter user Fullname' }]}
              >
                <Input placeholder="Please enter user Fullname" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="photo"
                label="Photo"
                rules={[{ required: true, message: 'Please enter user photo' }]}
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
                rules={[{ required: true, message: 'Please enter user password' }]}
              >
                <Input placeholder="Please enter user password" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="Pin"
                label="Pin"
                rules={[{ required: true, message: 'Please enter user Pin' }]}
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
                rules={[{ required: true, message: 'Please enter user verify' }]}
              >
                <Input placeholder="Please enter user verify" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="phone"
                label="Phone"
                rules={[{ required: true, message: 'Please enter user Phone' }]}
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
                  rules={[{ required: true, message: 'Please enter user photo' }]}
                >
                  <Input type="file" />
                </Form.Item>
              </Col> */}
            <Col span={12}>
              <Form.Item
                name="role"
                label="Role"
                rules={[{ required: true, message: 'Please enter user role' }]}
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
                  rules={[
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
        </Form>
      </Drawer>
    </>
  );
}

export default EditUser