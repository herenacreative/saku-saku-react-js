import { React, useState, useHistory, connect } from "libraries";
import { Row, Col, Input, Typography, Button, message } from 'antd';
import { LeftAuth } from "components/organisms";
import '../../../assets/scss/main.scss';
import { patchUser } from 'redux/actions';

const { Title, Text } = Typography;

const CreateNewPin = (props) => {
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
        history.push("/auth/success-create-pin")
      })
      .catch((error) => {
        message.error('Upss Create Pin Not Successful...')
        console.log(error);
      })
  }

  return (
    <>
      <Row className="main__auth">
        <Col flex="1 1" className="left__auth">
          <LeftAuth />
        </Col>
        <Col flex="1 1" className="right__auth">
          <Title level={2} className="font__large">
            Secure Your Account, Your Wallet, and Your Data
            With 6 Digits PIN That You Created Yourself.
          </Title>
          <Text type="secondary">
            Create 6 digits pin to secure all your money and your data in Saku Saku app.
            Keep it secret and don’t tell anyone about your Saku Saku account password and the PIN.
          </Text>

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
          {/* <p>{pin.join('')}</p> */}
          <Button style={{marginTop: '30px'}} type="primary" htmlType="submit" block className="btn__primary">
            Confirm
          </Button>
          </form>
        </Col>
      </Row>
    </>
  )
}

const mapStateToProps = (state) => ({
  users: state.users,
  auth: state.auth
})
const mapDispatchToProps = { patchUser }

export default connect(mapStateToProps, mapDispatchToProps)(CreateNewPin)