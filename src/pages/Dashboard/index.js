import { React, useState, connect, useEffect, useHistory, Link} from "libraries";
import { Layout, Row, Col, Typography, Button, Space, Statistic, Card} from 'antd';
import { Footers, Headers, Navigation } from "components/organisms";
import '../../assets/scss/main.scss';
import { getAllTransfer }from 'redux/actions';
import { PlusOutlined, ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';
import { Cards } from "components/molecules";

const { Sider, Content } = Layout;
const { Text } = Typography;

const Dashboard = (props) => {
  const [user, setUser] = useState([])
  const [transfers, setTransfers] = useState([])
  const history = useHistory()

  // const getUserAll = () =>{
	//  props.getIdUsers().then(res=>{
  //     setUser(res.action.payload.data.data[0])
  //   })
  //   .catch(error=>{
  //     console.log(error)
  //   })
  // }

  const getTransferAll = () =>{
    console.log(props.auth.data.id, 'to')
    const token = props.auth.data.tokenLogin
    const id = props.auth.data.id
	 props.getAllTransfer(token, id).then(res=>{
      console.log(res.value.data.data, 'res.action.payload.data.data')
      setTransfers(res.value.data.data[0])
    })
    .catch(error=>{
      console.log(error)
    })
  }
	
  useEffect(() => {
    console.log(props.transfer.data, 'pr')
	  // getUserAll()
	  getTransferAll()
  }, [])

    return (
        <>
            <Layout className="dashboard__temp">
                <Headers/>
                <Layout className="sider__nav">
                  <Sider
                    className="nav__nav"
                    breakpoint="xs"
                    collapsedWidth="0"
                    onBreakpoint={broken => {
                      console.log(broken);
                    }}
                    onCollapse={(collapsed, type) => {
                      console.log(collapsed, type);
                    }}
                  >
                    <Navigation/>
                  </Sider>
                  <Content>
                    <Row style={{height:"150px"}}>
                      <Col className="main__content__card bg__primary flex__sb">
                        <div>
                          <Statistic
                            title={<Text className="font__light">Balance</Text>}
                            value={props.auth.data.balance}
                            valueStyle={{ color: '#fff', fontWeight: 'bold', fontSize:'30px' }}
                            prefix="Rp"
                          />
                          <Text className="font__light">{props.auth.data.phone}</Text>
                        </div>
                        <Space direction="vertical">
                          <Button 
                            size="large" 
                            className="resize" 
                            style={{width:"120px", borderRadius:"5px",  marginRight: "20px"}} 
                            icon={<ArrowUpOutlined />} 
                            ghost
                            onClick={()=> history.push("transfer")}
                          >
                            Transfer
                          </Button>
                          <Button 
                            size="large" 
                            className="resize" 
                            style={{width:"120px", borderRadius:"5px"}} 
                            icon={<PlusOutlined />} 
                            ghost
                            onClick={()=> history.push("top-up")}
                          >
                            Top Up
                          </Button>
                        </Space>
                      </Col>	
                    </Row>
                    <Row className="row__">
                        <Col flex="1 1 200px" className="main__content__card" style={{marginTop: '10px'}}>
                          <Row gutter={16}>
                          <Col span={12} style={{ padding: '10px'}}>
                            <Card>
                              <Statistic
                              title={<> <Space direction="vertical"><ArrowDownOutlined style={{ color: '#3f8600', fontSize: '30px' }} />
                                  <Text type='secondary' style={{fontSize: '14px'}}>Income</Text></Space>  </>}
                              value={20000000}
                              prefix="Rp"
                              />
                            </Card>
                          </Col>
                          <Col span={12} style={{padding: '10px'}}>
                            <Card>
                              <Statistic
                              title={<> 
                                  <Space direction="vertical">
                                    <ArrowUpOutlined style={{ color: '#cf1322', fontSize: '30px' }} />
                                    <Text type='secondary' style={{fontSize: '14px'}}>
                                      Expense
                                    </Text>
                                  </Space> 
                                  </>}
                              value={20000000}
                              prefix="Rp"
                              />
                            </Card>
                          </Col>
                          </Row>
                        </Col>
                        <Col flex="1 1 200px" className="main__content__card"  style={{marginTop: '10px', padding: "15px"}}>
                          <div className="flex__sb">
                            <Text>Transaction History</Text>
                            <Link to={`/history`}>See All</Link>
                          </div>
                          <Cards 
                            numPhone={transfers.phone} 
                            nameUser={<Link to={`/transfer/${transfers}`}>{transfers.fullname}</Link>}
                            count={transfers.amount} 
                            photo=""
                          />
                        </Col>
                      </Row>
                  
                  </Content>                   
                </Layout>
                <Footers/>
            </Layout>
        </>
    )
}

const mapStateToProps = (state) =>({
  auth: state.auth,
  // users: state.users,
  transfer: state.transfer
})

const mapDispatchToProps = { getAllTransfer}
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)