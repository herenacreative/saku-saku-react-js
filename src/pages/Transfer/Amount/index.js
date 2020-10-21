import { React, connect } from "libraries";
import { Layout, Space, Typography, Input, Button, Empty, Skeleton } from 'antd';
import { Footers, Headers, Navigation } from "components/organisms";
import '../../../assets/scss/main.scss'
import { Cards } from "components/molecules";
import { HighlightOutlined } from '@ant-design/icons';
import { getIdUsers, postTransfer } from 'redux/actions'
import config from "../../../configs/index";

const { Content } = Layout;
const { Text } = Typography;

class Amount extends React.Component {
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

                    const total = item.balance - this.state.amount;

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
                            <Input
                              maxLength={total.length}
                              prefix={"Rp. "}
                              bordered={false}
                              onChange={(e) => this.setState({ amount: e.target.value })}
                              value={this.state.amount}
                              type="number"
                              // formatter={value => `Rp ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                              // parser={value => value.replace(/\Rp\s?|(,*)/g, '')}
                              style={{ border: "none", borderBottom: '.2px solid' }}
                            />
                            {{total} === 0 ? <Text>Oppssss, Balance Rp. 0</Text>
                            : <Text>Rp {total} Available</Text> }
                            
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
                              amount: this.state.amount || 0,
                              notes: this.state.notes || "-",
                              created_at: this.state.created_at,
                              balance: total,
                            }
                          })
                        } htmlType="submit" style={{ float: 'right', borderRadius: '5px', backgroundColor: "#6379F4", color: "#fff" }}>
                          Confirm
                        </Button>
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