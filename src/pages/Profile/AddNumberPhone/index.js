import { React, connect, useState, useHistory } from "libraries";
import { Layout, Input, message, Typography, Button } from 'antd';
import { Footers, Headers, Navigation } from "components/organisms";
import '../../../assets/scss/main.scss';
import { patchUser } from 'redux/actions';

const { Content } = Layout;

const { Text, Title } = Typography;
const AddNumberPhone = (props) => {
  const phn = props.auth.data.phone
  const [phone, setPhone] = useState(phn)
  const history = useHistory()

  const handleSubmit = (e) => {
    e.preventDefault()
    const id = props.auth.data.id
    const token = props.auth.data.tokenLogin
    const formData = {
      'phone': phone
    }
    props.patchUser(id, formData, token)
      .then(() => {
        message.success('Update Phone Successfully')
        history.push('/manage-number-phone')
      })
      .catch((error) => {
        message.error('Upss Update Phone not Successful...')
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
              <Title level={5}>Add Phone Number</Title>
              <div style={{ width: "300px", margin: "20px 0 20px 0" }}>
                <Text type="secondary">
                  Add at least one phone number for the transfer ID 
                  so you can start transfering your money to another user.
                </Text>
              </div>
              
              <div style={{ width: "300px", margin: "20px 0 20px 0" }}>
                <form onSubmit={handleSubmit}>
                <Input
                  value={phone}
                  style={{width: "100%"}}
                  onChange={e => setPhone(e.target.value)}
                />
                <Button type="primary" htmlType="submit" block style={{ margin: "20px 0 20px 0" }}>
                  submit
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
  auth: state.auth
})
const mapDispatchToProps = { patchUser }

export default connect(mapStateToProps, mapDispatchToProps)(AddNumberPhone)
