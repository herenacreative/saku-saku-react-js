import { React, connect, useState, moment } from "libraries";
import { Layout, Typography, Button, Skeleton, Empty, Modal, message, Input, Row, Col } from 'antd';
import { Footers, Headers, Navigation } from "components/organisms";
import '../../../assets/scss/main.scss'
import { Cards, CardsText } from "components/molecules";
import { postTransfer, getIdUsers } from "redux/actions";
import config from "../../../configs/index";

const { Content } = Layout;
const { Title, Text } = Typography;

const Confirmation = (props) => {
  const [visible, setVisible] = useState(false)
  const [pin, setPin] = useState(new Array(6).fill(""))
  const getDetail = props.location.input

  //  modal
  const showModal = () => {
    setVisible(true)
  }
  const handleCancel = () => {
    setVisible(false)
  }

  //pin
  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;
    setPin([...pin.map((d, idx) => (idx === index ? element.value : d))]);

    if (element.nextSibling) {
      element.nextSibling.focus()
    }
  }

  const handleSubmit = e => {
    e.preventDefault()
    const token = props.auth.data.tokenLogin
    const getDetail = props.location.input
    const data = {
      receiver_id: getDetail.receiver_id,
      sender_id: props.auth.data.id,
      amount: getDetail.amount,
      notes: getDetail.notes,
    }
    props.postTransfer(token, data)
      .then(() => {
        const pins = pin.join('')
        const pinOri = props.auth.data.pin
        const results = (pins != pinOri)
        if (results) {
          message.error('Ups... Pin is Wrong!!')
          props.history.push({
            pathname: "/failed-transaction",
            input: { getDetail }
          })
        }else{
          message.success('Transfer Successfully')
          props.history.push({
            pathname: "/success-transaction",
            input: { getDetail }
          })
          setVisible(false)
        }
      })
      .catch((error) => {
        message.error('Upss Transfer Not Successful...')
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
            {props.users.data
              ? props.users.data.length > 0
                ? props.users.data.map((item, id) => {

                  const time = moment(getDetail.created_at || moment.now()).format("lll");

                  return (
                    <Content key={id}>
                      <Title level={5}>Transfer To</Title>
                      <Cards image={`${config.imgURL}/${item.photo}`} nameUser={item.fullname} numPhone={item.phone} />
                      <div className="m__10">
                        <Title level={5}>Detail</Title>
                        <CardsText title="Amount" desc={getDetail ? getDetail.amount : '-'} />
                        <CardsText title="Balance Left" desc={getDetail ? getDetail.balance : '-'} />
                        <CardsText title="Date & Time" desc={getDetail ? time : '-'} />
                        <CardsText title="Notes" desc={getDetail ? getDetail.notes : '-'} />
                        <Button onClick={showModal} 
                          style={{ float: 'right', borderRadius: '5px', backgroundColor: "#6379F4", color: "#fff" }}
                        >
                          Confirm
                        </Button>
                      </div>
                    </Content>
                  )
                })
                : <p><Skeleton active /></p>
              : <p><Empty /></p>
            }
          </div>
        </Layout>
        <Footers />
      </Layout>

      {/* modal */}
      <Modal
        visible={visible}
        width={350}
        okButtonProps={{ hidden: true }}
        cancelButtonProps={{ hidden: true }}
      >
        <Title level={5}>Enter PIN to Transfer</Title>
        <Text type="secondary">Enter your 6 digits PIN for confirmation to continue transferring money. </Text>
        <form onSubmit={handleSubmit} className="form__input">
          <Row gutter={12} className="m__10">
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
            {console.log(pin.join(''), 'pin', props.auth.data.pin)}
          </Row>
          <Button style={{ margin: '20px 0 10px' }} type="primary" block htmlType="submit" className="btn__primary">
            Confirm
          </Button>
          <Button onClick={handleCancel} type="primary" block className="btn__primary">
            Cancel
          </Button>
        </form>
      </Modal>
      {/* modal */}

    </>
  )
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  transfer: state.transfer,
  users: state.users
})
const mapDispatchToProps = { postTransfer, getIdUsers }
export default connect(mapStateToProps, mapDispatchToProps)(Confirmation)