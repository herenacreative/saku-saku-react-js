import { React, connect, useEffect, useState, useHistory, Component } from "libraries";
import { Layout, Space, Typography, InputNumber, Input, Button, Modal, Empty, Skeleton } from 'antd';
import { Footers, Headers, Navigation } from "components/organisms";
import '../../../assets/scss/main.scss'
import { Cards, InputPin } from "components/molecules";
import { HighlightOutlined } from '@ant-design/icons';
import { getIdUsers, getPostTransfer } from 'redux/actions'
import config from "../../../configs/index";

const { Sider, Content } = Layout;
const { Text, Title } = Typography;

class Amount extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ModalText: 'Content of the modal',
      visible: false,
      confirmLoading: false,
      user: []
    }
  }

  getUseId = () => {
    const id = this.props.match.params.id
    const token = this.props.auth.data.tokenLogin 
    this.props.getIdUsers(token, id).then(res => {
      console.log(res.value.data.data[0], 'tes')
      this.setState(res.value.data.data[0])
    })
      .catch(error => {
        console.log(error)
      })
  }

  componentDidMount() {
    this.getUseId()
    console.log(this.props.user, 'po', this.props.users, 'te')
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
    console.log('Clicked cancel button');
    this.setState({
      visible: false,
    });
  };

  render() {
    // const price =`${user.balance}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    const { visible, confirmLoading, ModalText } = this.state;
    return (
      <>
        <Layout className="dashboard__temp">
          <Headers />
          <Layout className="sider__nav">
            <Navigation />
            <div className="main__content">
             {this.props.users.data
              ? this.props.users.data.length > 0 
                ? this.props.users.data.map((item, id)=>{
              return (
              <Content>
                  <Cards numPhone={item.phone} image={`${config.imgURL}/${item.photo}`} nameUser={item.fullname} />
                <div style={{ width: "300px" }}>
                  <Text type="secondary">
                    Type the amount you want to transfer and then
                    press continue to the next steps.
                  </Text>
                </div>
                <div style={{ textAlign: "center", margin: "9% 0 9%" }}>
                  <Space direction="vertical" align="center">
                    <InputNumber
                      defaultValue=""
                      formatter={value => `Rp ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                      parser={value => value.replace(/\Rp\s?|(,*)/g, '')}
                      // onChange={onChange}
                      style={{ fontSize: "30px", border: "none", width: "300px", borderBottom: '.2px solid' }}
                    />
                    <Text>Rp {item.balance} Available</Text>
                    <Input
                      bordered={false}
                      style={{ width: "300px", borderBottom: '.2px solid' }}
                      placeholder="Add some notes"
                      prefix={<HighlightOutlined className="site-form-item-icon" />}
                    />
                  </Space>
                </div>
                <Button style={{ float: 'right', borderRadius: '5px', backgroundColor: "#6379F4", color: "#fff" }} type="primary" onClick={this.showModal}>
                  Confirm
                </Button>
              </Content>
             )
            })
          : <p><Empty/></p>
          : <p><Skeleton active/></p>}
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
          <Text type="secondary">
            Enter your 6 digits PIN for confirmation to 
            continue transferring money. 
          </Text>
          <InputPin />
        </Modal>
      </>
    )
  }
}
const mapStateToProps = (state) => ({
  users: state.users,
  auth: state.auth
})
const mapDispatchToProps = { getIdUsers }
export default connect(mapStateToProps, mapDispatchToProps)(Amount)
