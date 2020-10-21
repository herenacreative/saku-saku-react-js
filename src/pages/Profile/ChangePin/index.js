import { React, useState, useHistory, connect } from "libraries";
import { Layout, Typography, Button, message, Row, Col, Input } from 'antd';
import { Footers, Headers, Navigation } from "components/organisms";
import '../../../assets/scss/main.scss';
import { patchUser } from 'redux/actions';

const { Content } = Layout;
const { Text, Title } = Typography;

const ChangePin = (props) => {
  const [pin, setPin] = useState(new Array(6).fill(""))
  const history = useHistory()

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;
    setPin([...pin.map((d, idx) => (idx === index ? element.value : d))]);

    if (element.nextSibling) {
      element.nextSibling.focus()
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const id = props.auth.data.id
    const token = props.auth.data.tokenLogin
    const formData = {
      'pin': pin.join(''),
      'verify': 1
    }
    props.patchUser(id, formData, token)
      .then(() => {
        message.success('Create Pin Successfully')
        // history.push("/auth/success-create-pin")
      })
      .catch((error) => {
        message.error('Upss Create Pin Not Successful...')
        console.log(error);
      })
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
                  Enter your current 6 digits Zwallet PIN below to continue to the next steps.
                </Text>
              </div>
              <div style={{ width: "300px", margin: "20px 0 20px 0" }}>
                <form onSubmit={handleSubmit} className="form__input">
                  <Row gutter={12}>
                    {pin.map((data, id) => {
                      return (
                        <>
                          <Col span={4}>
                            <Input onChange={e => handleChange(e.target, id)}
                              onFocus={e => e.target.select()}
                              value={data.pin}
                              key={id}
                              maxLength="1" />
                          </Col>
                        </>
                      )
                    })}
                  </Row>
                  <Button style={{marginTop: '20px'}} type="primary" htmlType="submit" block className="btn__primary">
                    Change Pin
                  </Button>
                </form>
              </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(ChangePin)