import { React, connect, useEffect, useState } from "libraries";
import { Drawer, Form, message, Button, Col, Row, Input } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { getIdTopUp, getAllTopUp, postTopUp } from 'redux/actions';
import '../../../../assets/scss/main.scss';

const AddTopUp = (props) => {
  const [visible, setVisible] = useState(false)
  const [num, setNum] = useState("")
  const [description, setDescription] = useState("")

  const showDrawer = () => {
    setVisible(true)
  }

  const onClose = () => {
    setVisible(false)
  }

  const handleSubmit = () => {
    const token = props.auth.data.tokenLogin
    const data = {
      'num': num,
      'description': description
    }
    
    props.postTopUp(token, data)
      .then((res) => {
        message.success(res.value.data.message)
        window.location.reload();
      })
      .catch((error) => {
        message.error('Upss Add TopUp Not Successful...')
        console.log(error);
      })
  }

  return (
    <>
      <Button type="primary" onClick={showDrawer}>
        <PlusOutlined /> Add Data
      </Button>
      <Drawer
        title="Create a new account"
        width={720}
        onClose={onClose}
        visible={visible}
        okButtonProps={{ hidden: true }}
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
            <Col span={24}>
              <Form.Item name="Number" label="Number" rules={[{ required: true, message: 'Please enter number' }]}>
                <Input
                  value={num}
                  onChange={(e) => setNum(e.target.value)}
                  placeholder="Please enter number"
                />
                {console.log(num)}
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
              <Col span={24}>
                <Form.Item
                  name="description"
                  label="Description"
                  rules={[{ required: true, message: 'Please enter description' }]}
                >
                <Input.TextArea rows={4} placeholder="please enter description" value={description}
                  onChange={(e) => setDescription(e.target.value)} />
                {console.log(description)}
                </Form.Item>
              </Col>
            </Row>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item>
                <Button style={{ marginRight: "20px" }} type="primary" htmlType="submit" className="btn__primary">
                  Add Top Up
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
  topup: state.topup,
  auth: state.auth
})
const mapDispatchToProps = { getIdTopUp, getAllTopUp, postTopUp }

export default connect(mapStateToProps, mapDispatchToProps)(AddTopUp)