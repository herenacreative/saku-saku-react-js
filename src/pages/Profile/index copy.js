import { React, connect, Link, useEffect, useState, useHistory } from "libraries";
import { Layout, Typography, Tooltip, Row, Col, Button, Space, Empty, Skeleton, Image } from 'antd';
import { Footers, Headers, Navigation } from "components/organisms";
import '../../assets/scss/main.scss';
import { getIdUsers, getAllUsers } from 'redux/actions';
import { Cards } from "components/molecules";
import config from '../../configs/index';
import { EditOutlined } from '@ant-design/icons';

const { Content } = Layout;
const { Text, Title } = Typography;

const Profile = (props) => {
  const [user, setUser] = useState([])
  const history = useHistory()

  const getUserAll = () => {
    const token = props.auth.data.tokenLogin
    props.getAllUsers(token)
      .then(res => {
        setUser(res.value.data.data[0])
      })
      .catch(error => {
        console.log(error)
      })
  }

  useEffect(() => {
    getUserAll()
  }, [])



  return (
    <>
      <Layout className="dashboard__temp">
        <Headers />
        <Layout className="sider__nav">
          <Navigation />
          <Content>

            <Row>
              <Col className="main__content" style={{ textAlign: "center" }}>
                <Space direction="vertical">
                  <Image width={50} height={50} src={`${config.imgURL}/${props.auth.data.photo}`} />
                  <Tooltip title="upload">
                    <EditOutlined />
                  </Tooltip>
                  <Title level={5}>{props.auth.data.fullname}</Title>
                  <Text type="secondary">{props.auth.data.phone}</Text>
                </Space>
              </Col>
            </Row>

            <Row>
              <Col flex="1 1 200px" className="main__content" style={{ marginTop: '10px' }}>
                <Button
                  onClick={() => history.push("/personal-info")}
                  type="primary"
                  className="btn__default"
                  block
                >
                  Personal Information
                </Button>
                <Button
                  onClick={() => history.push("/change-password")}
                  type="primary"
                  className="btn__default"
                  block
                >
                  Change Password
                </Button>
                <Button
                  onClick={() => history.push("/change-pin")}
                  type="primary"
                  className="btn__default"
                  block
                >
                  Change PIN
                </Button>
                <Button type="primary" className="btn__default" block>
                  Logout
                </Button>
              </Col>

              <Col flex="1 1 200px" className="main__content" style={{ marginTop: '10px' }}>
                <div className="flex__sb">
                  <Text>Contacts Info</Text>
                  <Link to={`/transfer`}>See All</Link>
                </div>
                {props.users.data
                  ? props.users.data.length > 0
                    ? props.users.data.map((item, id) => {
                      return (
                        <Cards
                          key={id}
                          numPhone={item.phone}
                          nameUser={<Link to={`/transfer/${item.id}`}>{item.fullname}</Link>}
                          image={`${config.imgURL}/${item.photo}`}
                        />
                      )
                    })
                    : <Empty />
                  : <Skeleton active />
                }
              </Col>
            </Row>
          </Content>
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
const mapDispatchToProps = { getIdUsers, getAllUsers }

export default connect(mapStateToProps, mapDispatchToProps)(Profile)