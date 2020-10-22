import { React, connect, useEffect, useState, qs } from "libraries";
import { Drawer, Form, message, Button, Col, Row, Input, Image } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import { getIdTopUp, getAllTopUp, patchTopUp } from 'redux/actions';
import '../../../../assets/scss/main.scss';
import config from '../../../../configs/index';

const EditTopup = (props) => {
  const [visible, setVisible] = useState(false)
  const { num, description } = props.detailTopup
  const [topup, setTopup] = useState({ num, description })

  const showDrawer = () => {
    setVisible(true)
  }

  const onClose = () => {
    setVisible(false)
  }

  const handleSubmit = () => {
    const id = props.auth.data.id
    const token = props.auth.data.tokenLogin
    const data = {
      'num': num,
      'description': description
    }
    
    props.patchTopUp(token, id, data)
      .then(() => {
        message.success('Update Profile Successfully')
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
        <Form layout="vertical" hideRequiredMark onFinish={handleSubmit}>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item name="Number" label="Number">
                <Input
                  value={topup.num}
                  onChange={(e) => setTopup({ ...topup, num: e.target.value })}
                  placeholder="Please enter number"
                />
                {console.log(topup.num)}
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
              <Col span={24}>
                <Form.Item
                  name="description"
                  label="Description"
                >
                <Input.TextArea rows={4} placeholder="please enter description" value={topup.description}
                  onChange={(e) => setTopup({ ...topup, description: e.target.value })} />
                {console.log(topup.description)}
                </Form.Item>
              </Col>
            </Row>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item>
                <Button style={{ marginRight: "20px" }} type="primary" htmlType="submit" className="btn__primary">
                  Update Top Up
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
const mapDispatchToProps = { getIdTopUp, getAllTopUp, patchTopUp }

export default connect(mapStateToProps, mapDispatchToProps)(EditTopup)