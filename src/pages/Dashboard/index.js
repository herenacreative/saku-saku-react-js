import { React, useState, connect, useEffect, useHistory, Link, moment } from "libraries";
import { Layout, Row, Col, Typography, Skeleton, Button, Space, Statistic, Tooltip, Empty } from 'antd';
import { Footers, Headers, Navigation } from "components/organisms";
import '../../assets/scss/main.scss';
import style from './dashboards.module.scss';
import { getAllTransfer } from 'redux/actions';
import { PlusOutlined, ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';
import { Cards } from "components/molecules";
import config from "../../configs/index";

const { Content } = Layout;
const { Text } = Typography;

const Dashboard = (props) => {
  const [transfers, setTransfers] = useState([])
  const history = useHistory()

  const getTransferAll = () => {
    const token = props.auth.data.tokenLogin
    const id = props.auth.data.id

    props.getAllTransfer(token, id)
    .then(res => {
      setTransfers(res.value.data.data[0])
    })
    .catch(error => {
      console.log(error)
    })
  }

  useEffect(() => {
    getTransferAll()
  }, [])

  return (
    <>
      <Layout className="dashboard__temp">
        <Headers />
        <Layout className="sider__nav">
          <Navigation />
          <Content>
            <Row className={style.hc}>
              <Col className="main__content__card bg__primary flex__sb">
                <div>
                  <Statistic
                    title={<Text className="font__light">Balance</Text>}
                    value={props.auth.data.balance}
                    valueStyle={{ color: '#fff', fontWeight: 'bold', fontSize: '30px' }}
                    prefix="Rp"
                  />
                  <Text className="font__light">{props.auth.data.phone}</Text>
                </div>
                <Space direction="vertical">
                  <Button
                    size="large"
                    className="resize"
                    icon={<ArrowUpOutlined />}
                    ghost
                    onClick={() => history.push("transfer")}
                  >
                    Transfer
                  </Button>
                  <Button
                    size="large"
                    className="resize"
                    icon={<PlusOutlined />}
                    ghost
                    onClick={() => history.push("top-up")}
                  >
                    Top Up
                  </Button>
                </Space>
              </Col>
            </Row>
            <Row className="row__">

              {/* col-2 chart  */}
              <Col flex="1 1 200px" className="main__content__card m__10">
                <Row gutter={16}>
                  <Col span={12} className={style.p__10}>
                    <Statistic
                      title={<> 
                        <Space direction="vertical">
                          <ArrowDownOutlined className={style.fc__green}/>
                          <Text type='secondary' className={style.fs__14}>Income</Text>
                        </Space>  
                      </>}
                      value={2000000000}
                      prefix="Rp"
                      valueStyle={{fontSize: '18px', fontWeight: 'bold'}}
                    />
                  </Col>
                  <Col span={12} className={style.p__10}>
                    <Statistic
                      title={<>
                        <Space direction="vertical">
                          <ArrowUpOutlined className={style.fc__red} />
                          <Text type='secondary' className={style.fs__14}>
                            Expense
                          </Text>
                        </Space>
                      </>}
                      value={20000000}
                      prefix="Rp"
                      valueStyle={{ fontSize: '18px', fontWeight: 'bold' }}
                    />
                  </Col>
                </Row>
              </Col>
              {/* col-2 chart  */}

              {/* col 3 Transaction History */}
              <Col flex="1 1 200px" className="main__content__card mp">
                <div className="flex__sb">
                  <Text>Transaction History</Text>
                  <Link to={`/history`}>See All</Link>
                </div>
                {props.transfer.data
                  ?props.transfer.data.length > 0
                    ? props.transfer.data.map(item => {
                      const time = moment(item.created_at || moment.now()).format("lll");
                        return (
                          <Cards
                            numPhone={item.phone}
                            nameUser={
                              <Tooltip placement="right" color="#6379F4" title={
                                <>
                                  <p>{item.notes}</p>
                                  <p>{time}</p>
                                </>
                              }>
                                {item.fullname}
                              </Tooltip>
                            }
                            count={item.amount}
                            image={`${config.imgURL}/${item.photo}`}
                          />
                        )
                      })
                    :<Skeleton active/>
                  :<Empty />
                }
              </Col>
              {/* col 3 Transaction History */}

            </Row>
          </Content>
        </Layout>
        <Footers />
      </Layout>
    </>
  )
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  transfer: state.transfer
})
const mapDispatchToProps = { getAllTransfer }

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)