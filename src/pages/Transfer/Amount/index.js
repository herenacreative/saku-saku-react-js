import { React, connect, useEffect, useState, useHistory, Component } from "libraries";
import { Layout, Space, Typography, InputNumber, Input, Button, message, Empty, Skeleton } from 'antd';
import { Footers, Headers, Navigation } from "components/organisms";
import '../../../assets/scss/main.scss'
import { Cards, InputPin } from "components/molecules";
import { HighlightOutlined } from '@ant-design/icons';
import { getIdUsers, postTransfer } from 'redux/actions'
import config from "../../../configs/index";

const { Sider, Content } = Layout;
const { Text, Title } = Typography;

class Amount extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: [],
      receiver_id: '',
      sender_id: '',
      amount: '',
      notes: '',
    }
  }

  getUseId = () => {
    const id = this.props.match.params.id
    const token = this.props.auth.data.tokenLogin
    this.props.getIdUsers(token, id).then(res => {
      this.setState(res.value.data.data[0])
    })
      .catch(error => {
        console.log(error)
      })
  }

  handleSubmit = e => {
    e.preventDefault()
    const token = this.props.auth.data.tokenLogin
    const data = {
      receiver_id: this.props.match.params.id,
      sender_id: this.props.auth.data.id,
      amount: this.state.amount,
      notes: this.state.notes,
    }
    this.props.postTransfer(token, data)
      .then(() => {
        message.success('Transfer Successfully')
        this.props.history.push("/confirmation")
      })
      .catch((error) => {
        message.error('Upss Transfer Not Successful...')
        console.log(error);
      })
  }

  componentDidMount() {
    this.getUseId()
  }

  render() {
    return (
      <>
        <Layout className="dashboard__temp">
          <Headers />
          <Layout className="sider__nav">
            <Navigation />
            <div className="main__content">

              {this.props.users.data
                ? this.props.users.data.length > 0
                  ? this.props.users.data.map((item, id) => {
                    return (
                      <Content>
                        <Cards numPhone={item.phone} image={`${config.imgURL}/${item.photo}`} nameUser={item.fullname} />
                        <div style={{ width: "300px" }}>
                          <Text type="secondary">
                            Type the amount you want to transfer and then
                            press continue to the next steps.
                          </Text>
                        </div>
                        {/* <form onSubmit={this.handleSubmit}> */}
                          <div style={{ textAlign: "center", margin: "9% 0 9%" }}>
                            <Space direction="vertical" align="center">
                              <Input
                                onChange={(e) => this.setState({ amount: e.target.value })}
                                value={this.state.amount}
                                // formatter={value => `Rp ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                                // parser={value => value.replace(/\Rp\s?|(,*)/g, '')}
                                // onChange={onChange}
                                style={{ fontSize: "30px", border: "none", width: "300px", borderBottom: '.2px solid' }}
                              />
                              <Text>Rp {item.balance - this.state.amount} {console.log(this.state.amount, 'item')} Available</Text>
                              <Input
                                onChange={(e) => this.setState({ notes: e.target.value })}
                                bordered={false}
                                style={{ width: "300px", borderBottom: '.2px solid' }}
                                placeholder="Add some notes"
                                prefix={<HighlightOutlined className="site-form-item-icon" />}
                              />
                            </Space>
                          </div>
                        <Button onClick={() =>
                          this.props.history.push({
                            pathname: "/confirmation",
                            input: {
                              receiver_id: this.props.match.params.id,
                              amount: this.state.amount,
                              notes: this.state.notes,
                              created_at: this.state.created_at,
                              balance: (`${item.balance - this.state.amount}`),
                            }
                          })
                        }  htmlType="submit" style={{ float: 'right', borderRadius: '5px', backgroundColor: "#6379F4", color: "#fff" }} type="primary">
                            Confirm
                        </Button>
                        {/* </form> */}
                      </Content>
                    )
                  })
                  : <p><Skeleton active /></p>
                : <p><Empty /></p>
              }

            </div>
          </Layout>
          <Footers />
        </Layout>=
      </>
    )
  }
}
const mapStateToProps = (state) => ({
  users: state.users,
  auth: state.auth,
  transfer: state.transfer
})
const mapDispatchToProps = { getIdUsers, postTransfer }
export default connect(mapStateToProps, mapDispatchToProps)(Amount)