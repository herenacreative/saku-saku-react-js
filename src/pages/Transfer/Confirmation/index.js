import { React, connect } from "libraries";
import { Layout, Typography, Button, Modal, message, Input, Row, Col } from 'antd';
import { Footers, Headers, Navigation } from "components/organisms";
import '../../../assets/scss/main.scss'
import { Cards, CardsText } from "components/molecules";
import { postTransfer } from "redux/actions";

const { Content } = Layout;

const { Title, Text } = Typography;
class Confirmation extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      ModalText: 'Content of the modal',
      visible: false,
      confirmLoading: false,
      pin: new Array(6).fill("")
    }
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = () => {
    this.setState({
      ModalText: 'The modal will be closed after two seconds',
      confirmLoading: true,
    });
    setTimeout(() => {
      this.setState({
        visible: false,
        confirmLoading: false,
      });
    }, 2000);
  };

  handleCancel = () => {
    this.setState({
      visible: false,
    });
  };

  handleChange = (element, index) => {
    if (isNaN(element.value)) return false;
    this.setState([...this.state.pin.map((d, idx) => (idx === index ? element.value : d))]);

    if (element.nextSibling) {
      element.nextSibling.focus()
    }
  }

  handleSubmit = e => {
    e.preventDefault()
    const token = this.props.auth.data.tokenLogin
    const getDetail = this.props.location.input
    const data = {
      receiver_id: getDetail.receiver_id,
      sender_id: this.props.auth.data.id,
      amount: getDetail.amount,
      notes: getDetail.notes,
    }
    this.props.postTransfer(token, data)
      .then(() => {
        // if (this.state.pin.join() === this.props.auth.data.pin) {
        //   message.success('Transfer Successfully')
        //   // this.props.history.push("/status")
        //   this.props.history.push({
        //     pathname: "/status",
        //     input: this.transfer_id
        //   })
        //   this.setState({
        //     visible: false,
        //     confirmLoading: false,
        //   });
        // } else {
        //   message.success('Ups... Pin is Wrong!!')
        //   this.setState({
        //     visible: false,
        //   });
        // }

      })
      .catch((error) => {
        message.error('Upss Transfer Not Successful...')
        console.log(error);
      })
  }

  render() {
    const { visible, confirmLoading } = this.state;
    const getDetail = this.props.location.input
    return (

      <>
        <Layout className="dashboard__temp">
          <Headers />
          <Layout className="sider__nav">
            <Navigation />
            <div className="main__content">
              <Content>
                <Title level={5}>Transfer To</Title>
                <Cards image={this.props.auth.data.photo} nameUser={this.props.auth.data.fullname} numPhone={this.props.auth.data.phone} />
                <Title level={5}>Detail</Title>
                <CardsText title="Amount" desc={getDetail.amount} />
                <CardsText title="Balance Left" desc={getDetail.balance} />
                <CardsText title="Date & Time" desc={getDetail.created_at} />
                <CardsText title="Notes" desc={getDetail.notes} />

                <Button type="primary" onClick={this.showModal}>
                  Confirm
                </Button>
              </Content>
            </div>

          </Layout>
          <Footers />
        </Layout>

        <Modal
          visible={visible}
          onOk={this.handleOk}
          confirmLoading={confirmLoading}
          onCancel={this.handleCancel}
          width={300}
        >
          <Title level={5}>Enter PIN to Transfer</Title>
          <Text type="secondary">Enter your 6 digits PIN for confirmation to continue transferring money. </Text>
          <form onSubmit={this.handleSubmit} className="form__input">
            <Row gutter={12}>
              {this.state.pin.map((data, id) => {
                return (
                  <>
                    <Col span={4}>
                      <Input onChange={e => this.handleChange(e.target, id)}
                        onFocus={e => e.target.select()}
                        value={data.pin}
                        key={id}
                        maxLength="1" />
                    </Col>

                    {console.log(this.state.pin, 'tessss')}
                  </>
                )
              })}

            </Row>
            <Button type="primary" htmlType="submit" block className="btn__primary">
              Confirm
          </Button>
          </form>
        </Modal>
      </>
    )
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  transfer: state.transfer
})
const mapDispatchToProps = { postTransfer }
export default connect(mapStateToProps, mapDispatchToProps)(Confirmation)